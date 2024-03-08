from dotenv import load_dotenv
from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn
from rag.rag import generate_chat, generate_transcript_summary
from youtube_transcript_api import YouTubeTranscriptApi
import re

from settings import settings

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
    chat_response = generate_chat(input_text)
    return {"response": chat_response}


@app.post("/api/summary/")
async def summary(input_text: str = Body(...)):
    transcript_summary = generate_transcript_summary(input_text)
    return {"response": transcript_summary}

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

    transcript_summary = generate_transcript_summary(processed_subtitles)

    return transcript_summary




if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)