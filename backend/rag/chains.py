from langchain.prompts import PromptTemplate
from langchain.schema.language_model import BaseLanguageModel
from langchain.schema.output_parser import StrOutputParser
from langchain.schema.runnable import Runnable
from langchain_core.prompts import ChatPromptTemplate

from .prompts import TRANSCRIPT_SUMMARY_TEMPLATE


def create_chat_chain(llm: BaseLanguageModel) -> Runnable:
    prompt = ChatPromptTemplate.from_messages([
        ("system", "You are a helpful assistant."),
        ("user", "{input}")
    ])
    response_chain = (
        prompt | llm | StrOutputParser()
    ).with_config(
        run_name="ResponseChain",
    )
    return response_chain


def create_transcript_summary_chain(llm: BaseLanguageModel) -> Runnable:
    response_chain = (
        PromptTemplate.from_template(TRANSCRIPT_SUMMARY_TEMPLATE) | llm | StrOutputParser()
    ).with_config(
        run_name="ResponseChain",
    )
    return response_chain
