import re
import uvicorn
from dotenv import load_dotenv
from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from youtube_transcript_api import YouTubeTranscriptApi
from rag.rag import (
    generate_chat_response,
    generate_flashcards,
    generate_transcript_summary,
    generate_quiz,
    generate_subjects,
    generate_image
)
from settings import settings
import asyncio
import os
from supabase import create_client
import uuid
import json
import base64

load_dotenv()

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.FRONTEND_BASE_URLS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

supabase = create_client(supabase_url=os.environ.get("SUPABASE_URL"), supabase_key=os.environ.get("SUPABASE_KEY"))


class ChatIn(BaseModel):
    query: str

class ChatOut(BaseModel):
    response: str


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/api/chat/")
async def chat(input_text: str = Body(...)):
    chat_response = generate_chat_response(input_text)
    return {"data": chat_response}


@app.post("/api/summary/")
async def summary(input_text: str = Body(...)):
    transcript_summary = generate_transcript_summary(input_text)
    return {"data": transcript_summary}


@app.post("/api/subjects/")
async def subjects(input_text: str = Body(...)):
    subjects = generate_subjects(input_text)
    return {"data": subjects}


@app.post("/api/yt_link/")
async def yt_link(url: str = Body(...), user_id: str = Body(...)):
    if "&list" in url:
        url = url.split("&list")[0]
    video_id = url.split("?v=")[1]
    raw_subtitles = YouTubeTranscriptApi.get_transcript(video_id)
    transcript = ""
    for row in raw_subtitles:
        processed_row = re.sub(r'\n+', ' ', row['text'])
        transcript += processed_row + " "

    save_to_supabase(user_id, transcript, "yt_links", "txt")

    # transcript_summary = generate_transcript_summary(transcript)
    return transcript


@app.post("/api/flashcards/")
async def flashcards(transcript: str = Body(...), user_id: str = Body(...)):
    flashcards = generate_flashcards(transcript)

    # Creating a list of coroutine objects for each flashcard prompt
    coroutine_tasks = [generate_image(flashcard.image_prompt) for flashcard in flashcards.flashcards]

    # Using asyncio.gather to run coroutine tasks concurrently
    responses = await asyncio.gather(*coroutine_tasks)

    questions = [flashcard.question for flashcard in flashcards.flashcards]
    answers = [flashcard.answer for flashcard in flashcards.flashcards]
    images = [response.json()["artifacts"][0]["base64"] for response in responses]

    # Save images to supabase
    image_urls = []
    for image in images:
        response = save_to_supabase(user_id, image, "flashcards", "png")
        supabase_object_path = response.json()["Key"].split("content/")[1]
        public_image_url = supabase.storage.get_bucket('content').get_public_url(supabase_object_path)
        image_urls.append(public_image_url)

    flashcard_data = {"questions": questions, "answers": answers, "image_urls": image_urls}
    save_to_supabase(user_id, flashcard_data, "flashcards", "json")

    return {"questions": questions, "answers": answers, "images": image_urls}


@app.post("/api/quiz/")
async def quiz(input_text: str = Body(...)):
    quiz = generate_quiz(input_text)

    return {"data": quiz}


@app.post("/user/create/")
async def create_user(username: str = Body(...)):
    data, _ = supabase.table('users').insert({"username": username}).execute()
    return {"data": data}


def save_to_supabase(user_id, data, bucket_subfolder, file_extension):
    bucket = supabase.storage.get_bucket("content")

    tmp_filename = str(uuid.uuid4()) + f".{file_extension}"
    file_path = f"/tmp/{tmp_filename}.{file_extension}"
    if file_extension == "txt":
        file_type = "text/html"
        with open(file_path, "w") as fp:
            fp.write(data)
    elif file_extension == "png":
        file_type = "image/png"
        with open(file_path, "wb") as fp:
            fp.write(base64.b64decode(data))
    elif file_extension == "json":
        file_type = "application/json"
        with open(file_path, "w") as fp:
           json.dump(data, fp)
    else:
        raise NotImplementedError

    response = bucket.upload(path=f"{user_id}/{bucket_subfolder}/{tmp_filename}", file=file_path, file_options={"content-type": file_type})

    return response


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
