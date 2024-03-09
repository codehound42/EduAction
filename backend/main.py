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

load_dotenv()

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.FRONTEND_BASE_URLS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


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
async def yt_link(url: str = Body(...)):
    if "&list" in url:
        url = url.split("&list")[0]
    video_id = url.split("?v=")[1]
    raw_subtitles = YouTubeTranscriptApi.get_transcript(video_id)
    processed_subtitles = ""
    for row in raw_subtitles:
        processed_row = re.sub(r'\n+', ' ', row['text'])
        processed_subtitles += processed_row + " "

    # transcript_summary = generate_transcript_summary(processed_subtitles)

    return processed_subtitles


@app.post("/api/flashcards/")
async def flashcards(input_text: str = Body(...)):
    flashcards = generate_flashcards(input_text)

    # Creating a list of coroutine objects for each flashcard prompt
    coroutine_tasks = [generate_image(flashcard.image_prompt) for flashcard in flashcards.flashcards]

    # Using asyncio.gather to run coroutine tasks concurrently
    responses = await asyncio.gather(*coroutine_tasks)

    questions = [flashcard.question for flashcard in flashcards.flashcards]
    answers = [flashcard.answer for flashcard in flashcards.flashcards]
    images = [response.json()["artifacts"][0]["base64"] for response in responses]

    return {"questions": questions, "answers": answers, "images": images}


@app.post("/api/quiz/")
async def quiz(input_text: str = Body(...)):
    quiz = generate_quiz(input_text)
    return {"data": quiz}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
