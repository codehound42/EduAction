from langchain_core.pydantic_v1 import BaseModel
from pydantic import Field


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

