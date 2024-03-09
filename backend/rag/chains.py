from langchain.prompts import PromptTemplate
from langchain.schema.language_model import BaseLanguageModel
from langchain.schema.output_parser import StrOutputParser
from langchain.schema.runnable import Runnable
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import BaseOutputParser, PydanticOutputParser, JsonOutputParser
from pydantic import Field
from langchain_core.pydantic_v1 import BaseModel

from .prompts import TRANSCRIPT_SUMMARY_TEMPLATE, QUIZ_TEMPLATE, SUBJECTS_TEMPLATE, FLASHCARDS_TEMPLATE

class QuestionAndAnswer(BaseModel):
    question: str = Field(description="The quiz question.")
    answers: list[str] = Field(description="The possible answers to the question.")
    correct_answer: int = Field(description="The list index of the correct answer to the question.")


class QuestionsAndAnswers(BaseModel):
    question_and_answers: list[QuestionAndAnswer] = Field(description="list of questions and answers for the quiz.")


class Subjects(BaseModel):
    subjects: list[str] = Field(description="list of subjects")


class FlashCard(BaseModel):
    question: str = Field(description="The flashcard question.")
    answer: str = Field(description="The flashcard answer.")
    image_prompt: str = Field(description="The flashcard image prompt text.")


class FlashCards(BaseModel):
    flashcards: list[FlashCard] = Field(description="list of flashcards")


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
