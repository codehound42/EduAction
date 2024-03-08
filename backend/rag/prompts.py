TRANSCRIPT_SUMMARY_TEMPLATE = """Given the following lecture transcript, summarise the content.

# Transcript
{transcript}

# Summary"""

QUIZ_TEMPLATE = """Given the following lecture transcript. Generate a quiz based on the content. The format of the quiz should be a list of questions, answers and the correct answer. See the example format below:

<example>
{{
    "question_and_answers": [
        {{
            "question": "What is the capital of France?",
            "answers": ["Paris", "London", "Berlin", "Madrid"],
            "correct_answer": "Paris"
        }},
        {{
            "question": "What is the capital of Germany?",
            "answers": ["Paris", "London", "Berlin", "Madrid"],
            "correct_answer": "Berlin"
        }}
    ]
}}
</example>

# Transcript
{transcript}

# Quiz"""