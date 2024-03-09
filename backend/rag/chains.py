from langchain.prompts import PromptTemplate
from langchain.schema.language_model import BaseLanguageModel
from langchain.schema.output_parser import StrOutputParser
from langchain.schema.runnable import Runnable
from langchain_core.output_parsers import (BaseOutputParser, JsonOutputParser,
                                           PydanticOutputParser)
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.pydantic_v1 import BaseModel
from pydantic import Field
from rag.data_models import (FlashCard, FlashCards, QuestionAndAnswer,
                             QuestionsAndAnswers, Subjects)

from .prompts import (CLEAN_TRANSCRIPT_TEMPLATE, FLASHCARDS_TEMPLATE,
                      QUIZ_TEMPLATE, SUBJECTS_TEMPLATE,
                      TRANSCRIPT_SUMMARY_TEMPLATE)


def create_chat_chain(llm: BaseLanguageModel) -> Runnable:
    prompt = ChatPromptTemplate.from_messages([
        ("system", "You are a helpful assistant."),
        ("user", "{input}")
    ])
    chain = (
        prompt | llm | StrOutputParser()
    ).with_config(
        run_name="ChainChain",
    )
    return chain


def create_transcript_summary_chain(llm: BaseLanguageModel) -> Runnable:
    chain = (
        PromptTemplate.from_template(TRANSCRIPT_SUMMARY_TEMPLATE) | llm | StrOutputParser()
    ).with_config(
        run_name="SummaryChain",
    )
    return chain


def create_flashcard_chain(llm: BaseLanguageModel) -> Runnable:
    chain = (
        PromptTemplate.from_template(FLASHCARDS_TEMPLATE) | llm | PydanticOutputParser(pydantic_object=FlashCards)
    ).with_config(
        run_name="QuizChain",
    )
    return chain


def create_quiz_chain(llm: BaseLanguageModel) -> Runnable:
    chain = (
        PromptTemplate.from_template(QUIZ_TEMPLATE) | llm | PydanticOutputParser(pydantic_object=QuestionsAndAnswers)
    ).with_config(
        run_name="QuizChain",
    )
    return chain


def create_subjects_chain(llm: BaseLanguageModel) -> Runnable:
    chain = (
        PromptTemplate.from_template(SUBJECTS_TEMPLATE) | llm | JsonOutputParser(pydantic_object=Subjects)
    ).with_config(
        run_name="QuizChain",
    )
    return chain


def create_clean_transcript_chain(llm: BaseLanguageModel) -> Runnable:
    chain = (
        PromptTemplate.from_template(CLEAN_TRANSCRIPT_TEMPLATE) | llm | StrOutputParser()
    ).with_config(
        run_name="CleanTranscriptChain",
    )
    return chain
