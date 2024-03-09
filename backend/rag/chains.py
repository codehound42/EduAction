from langchain.prompts import PromptTemplate
from langchain.schema.language_model import BaseLanguageModel
from langchain.schema.output_parser import StrOutputParser
from langchain.schema.runnable import Runnable
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import BaseOutputParser, PydanticOutputParser, JsonOutputParser
from pydantic import Field
from langchain_core.pydantic_v1 import BaseModel

from .prompts import TRANSCRIPT_SUMMARY_TEMPLATE, QUIZ_TEMPLATE, SUBJECTS_TEMPLATE

class QuestionAndAnswer(BaseModel):
    question: str = Field(description="The quiz question.")
    answers: list[str] = Field(description="The possible answers to the question.")
    correct_answer: str = Field(description="The correct answer to the question.")


class QuestionsAndAnswers(BaseModel):
    question_and_answers: list[QuestionAndAnswer] = Field(description="list of questions and answers for the quiz.")


class Subjects(BaseModel):
    subjects: list[str] = Field(description="list of subjects")

flashcard_system_prompt = """
I want you to act as a professional Anki card creator, able to create Anki cards from the text I provide.

Regarding the formulation of the card content, you stick to two principles: First, minimum information principle: The material you learn must be formulated in as simple way as it is only possible. 
Simplicity does not have to imply losing information and skipping the difficult part.b Second, optimize wording: The wording of your items must be optimized to make sure that in minimum time the right bulb in your brain lights up. 
This will reduce error rates, increase specificity, reduce response time, and help your concentration.

The following is a model card-create template for you to study.

Text: The characteristics of the Dead Sea: Salt lake located on the border between Israel and Jordan. Its shoreline is the lowest point on the Earth's surface, averaging 396 m below sea level. It is 74 km long. It is seven times as salty (30% by volume) as the ocean. Its density keeps swimmers afloat. Only simple organisms can live in its saline waters

Create cards based on the above text as follows:

Q: Where is the Dead Sea located? A: on the border between Israel and Jordan 
Q: What is the lowest point on the Earth's surface? A: The Dead Sea shoreline 
Q: What is the average level on which the Dead Sea is located? A: 396 meters (below sea level) 
Q: How long is the Dead Sea? A: 74 km 
Q: How much saltier is the Dead Sea as compared with the oceans? A: 7 times 
"""

flashcard_image_generation_prompt="""
"Generate engaging illustrations for Anki flashcards to enhance learning. 
Each illustration should be colorful and designed to help learners grasp the card's topic effectively. 
Please create a unique, visual prompt for each topic, tailored to make the learning experience more intuitive and memorable. 
Return the output in the following format:
Q1 : prompt,
Q2 : prompt
Q3 : prompt etc.

Below are the 5 anki flashcards for which images are needed:")
"""



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

def create_flashcard_text_chain(llm: BaseLanguageModel) -> Runnable:
    prompt = ChatPromptTemplate.from_messages([
        ("system", flashcard_system_prompt),
        ("user", "Generate 5 ankicards for this Text: {input}")
    ])
    response_chain = (
        prompt | llm | StrOutputParser()
    ).with_config(
        run_name="ResponseChain",
    )
    return response_chain


def create_flashcard_prompts_chain(llm: BaseLanguageModel) -> Runnable:
    prompt = ChatPromptTemplate.from_messages([
        ("system", "I want you to act as a professional Anki card image generator."),
        ("user", flashcard_image_generation_prompt+"{input}.")
    ])
    response_chain = (
        prompt | llm | StrOutputParser()
    ).with_config(
        run_name="ResponseChain",
    )
    return response_chain


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
