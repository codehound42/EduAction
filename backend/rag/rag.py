from langchain_openai import ChatOpenAI
from dotenv import load_dotenv

from rag.chains import create_chat_chain, create_transcript_summary_chain, create_quiz_chain

load_dotenv()

llm = ChatOpenAI(model_name="gpt-3.5-turbo-1106", temperature=0, request_timeout=20, max_retries=10)

chat_chain = create_chat_chain(llm)
summary_chain = create_transcript_summary_chain(llm)
quiz_chain = create_quiz_chain(llm)


def generate_chat_response(input_text: str):
    response = chat_chain.invoke({"input": input_text})
    return response

def generate_transcript_summary(input_text: str):
    response = summary_chain.invoke({"transcript": input_text})
    return response

def generate_quiz(input_text: str):
    response = quiz_chain.invoke({"transcript": input_text})
    return response
