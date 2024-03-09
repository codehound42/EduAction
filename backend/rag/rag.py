from langchain_openai import ChatOpenAI
from dotenv import load_dotenv
import requests
import os

from rag.chains import create_chat_chain, create_transcript_summary_chain, create_quiz_chain, create_flashcard_text_chain, create_flashcard_prompts_chain, create_subjects_chain

load_dotenv()

llm = ChatOpenAI(model_name="gpt-3.5-turbo-1106", temperature=0, request_timeout=20, max_retries=10)
stability_api = "https://api.stability.ai"
stability_model = "stable-diffusion-v1-6"

chat_chain = create_chat_chain(llm)
summary_chain = create_transcript_summary_chain(llm)
flashcard_text_chain = create_flashcard_text_chain(llm)
flashcard_prompts_chain = create_flashcard_prompts_chain(llm)
quiz_chain = create_quiz_chain(llm)
subjects_chain = create_subjects_chain(llm)


def generate_chat_response(input_text: str):
    response = chat_chain.invoke({"input": input_text})
    return response

def generate_transcript_summary(input_text: str):
    response = summary_chain.invoke({"transcript": input_text})
    return response

def generate_flashcards(input_text: str):
    response = flashcard_text_chain.invoke({"input": input_text})
    return response

def generate_flashcards_image_prompts(input_text: str):
    response = flashcard_prompts_chain.invoke({"input": input_text})
    return response

def generate_image(prompt, stability_api=stability_api, stability_model=stability_model):
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
