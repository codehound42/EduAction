import os

import requests
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI

from rag.chains import (create_chat_chain, create_flashcard_chain,
                        create_quiz_chain, create_subjects_chain,
                        create_transcript_summary_chain,
                        create_clean_transcript_chain)
from langchain_text_splitters import RecursiveCharacterTextSplitter
import asyncio


load_dotenv()

llm = ChatOpenAI(model_name="gpt-3.5-turbo-1106", temperature=0, request_timeout=20, max_retries=10)
stability_api = "https://api.stability.ai"
stability_model = "stable-diffusion-v1-6"

chat_chain = create_chat_chain(llm)
summary_chain = create_transcript_summary_chain(llm)
flashcard_chain = create_flashcard_chain(llm)
quiz_chain = create_quiz_chain(llm)
subjects_chain = create_subjects_chain(llm)
response_clean_chain = create_clean_transcript_chain(llm)


def split_transcript(transcript: str):
    text_splitter = RecursiveCharacterTextSplitter(
        # Set a really small chunk size, just to show.
        chunk_size=20_000,
        chunk_overlap=200,
        length_function=len,
        is_separator_regex=False,
    )
    texts = text_splitter.create_documents([transcript])
    return texts


def generate_chat_response(input_text: str):
    response = chat_chain.invoke({"input": input_text})
    return response


async def generate_transcript_summary(transcript: str):
    texts = split_transcript(transcript)

    tasks = [asyncio.create_task(summary_chain.ainvoke({"transcript": text})) for text in texts]
    responses = await asyncio.gather(*tasks)

    # Assuming you want to concatenate all responses into a single summary
    full_summary = ' '.join(responses)

    output = response_clean_chain.invoke({"transcript": full_summary})

    return output


def generate_flashcards(input_text: str):
    response = flashcard_chain.invoke({"transcript": input_text})
    return response


async def generate_image(prompt, stability_api=stability_api, stability_model=stability_model):
    response = requests.post(
        f"{stability_api}/v1/generation/{stability_model}/text-to-image",
        headers={
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": f"Bearer {os.environ.get('STABILITY_API_KEY')}"
        },
        json={
            "text_prompts": [
                {
                    "text": prompt,
                    "weight" : 0.5
                }
            ],
            "cfg_scale": 7,
            "height": 512,
            "width": 512,
            "samples": 1,
        },
    )
    return response


def generate_quiz(input_text: str):
    response = quiz_chain.invoke({"transcript": input_text})
    return response


def generate_subjects(input_text: str):
    response = subjects_chain.invoke({"transcript": input_text})
    return response
