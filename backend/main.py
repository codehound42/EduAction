from dotenv import load_dotenv
from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn
from rag.rag import generate_chat, generate_transcript_summary

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


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
