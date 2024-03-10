TRANSCRIPT_SUMMARY_TEMPLATE = """Given the following lecture transcript, summarise the content.

# Transcript
{transcript}

# Summary"""

CLEAN_TRANSCRIPT_TEMPLATE = """Given is a raw transcript of a video. It was made by concatenating transcriptions from chunks of the full video text. Clean the trancsript by making the transition between the chunks smooth and coherent. Below is an example of how this might look:

<example>
# Raw transcript
The speaker welcomes everyone and introduces the topic for the lecture. The content of the lecture is not provided in the given transcript. The lecture will explore the history of the Aztec civilization. The lecture discusses the history of the Aztec Empire, starting from its humble beginnings. The lecture discusses the rise and subsequent decline of a subject from its modest origins to its dramatic downfall.

# Cleaned transcript
The speaker welcomes everyone and introduces the topic for the lecture. The lecture will explore the history of the Aztec civilization, starting from its humble beginnings to its dramatic fall.
</example>

# Raw transcript
{transcript}

# Cleaned transcript"""

SUBJECTS_TEMPLATE = """Generate a list of the top 5-10 subjects covered in given transcript.

<example>
# Transcript
Speaker: Welcome, everyone. Today, we're going to explore the history of the Aztec Empire, from its humble beginnings to its dramatic fall.

The Aztecs, also known as the Mexica, began their journey in the 13th century, searching for a new home as instructed by their god, Huitzilopochtli. This quest ended when they founded Tenochtitlán, on a small island in Lake Texcoco, around 1325. This city, now beneath modern-day Mexico City, was a testament to their ingenuity and strength, growing to become one of the largest cities in the world at its peak.

The Aztec society was intricately structured, with the Emperor at the pinnacle, viewed as a god among men. Society was divided into several classes, from nobles and priests to warriors, merchants, and farmers. The Aztecs were known for their architectural prowess, evident in the grand Templo Mayor, a symbol of their religious and political power. They were also skilled astronomers and calendar makers, contributing significantly to our understanding of the universe.

However, it wasn't just their scientific achievements that defined them. The Aztecs had a rich cultural tradition, with art, music, and poetry that revealed their deep spiritual and worldly views.

Unfortunately, the empire's strength and prosperity eventually led to its downfall. In 1519, Hernán Cortés and his Spanish conquistadors landed on the Gulf of Mexico. Despite initial peaceful interactions, conflict soon ensued. The combination of Spanish military tactics, alliances with local tribes opposed to the Aztecs, and the introduction of European diseases led to the fall of Tenochtitlán in 1521.

The conquest of the Aztec Empire marked the end of one of the most remarkable civilizations in history, but its legacy continues. The stories, ruins, and cultural practices of the Aztecs still play a vital role in Mexican culture and history today.

Thank you for joining me on this brief journey through the history of the Aztec Empire.

# Subjects
{{
    "subjects": [
        "The Migration and Foundation of Tenochtitlán",
        "Structure and Hierarchy of Aztec Society",
        "Architectural Achievements of the Aztecs",
        "Aztec Contributions to Astronomy and Calendar Systems",
        "The Rich Cultural Heritage of the Aztecs (Art, Music, Poetry)",
        "Religious Beliefs and Practices in Aztec Society",
        "The Arrival of Hernán Cortés and the Spanish Conquistadors",
        "The Conquest and Fall of the Aztec Empire",
        "The Legacy of the Aztec Empire in Modern Mexican Culture",
        "Overview of Aztec Scientific Achievements"
    ]
}}
</example>

# Transcript
{transcript}

# Subjects"""

QUIZ_TEMPLATE = """Given the following lecture transcript. Generate a quiz based on the content. The format of the quiz should be a list of at most 10 questions, answers and the correct answer. The correct answer should be the index of the correct answer in the list of answers (0-indexed).

See the example format below:
<example>
{{
    "question_and_answers": [
        {{
            "question": "What is the capital of France?",
            "answers": ["Paris", "London", "Berlin", "Madrid"],
            "correct_answer": 0
        }},
        {{
            "question": "What is the capital of Germany?",
            "answers": ["Paris", "London", "Berlin", "Madrid"],
            "correct_answer": 2
        }}
    ]
}}
</example>

# Transcript
{transcript}

# Quiz"""


FLASHCARDS_TEMPLATE = """Given the following lecture transcript. Generate a list of flashcards based on the content. The format of the flashcards should be a list of question, answer and an image prompt that will be sent to Stable Diffusion for image generation. An example of the format is shown below in example tags. Generate up to at most 5 flashcards.

Make the questions specific to the topic and not too general. Don't ask about the professor and the general format of the course and things like that.

<example>
{{
    "flashcards": [
        {{
            "question": "What is the capital of France?",
            "answer": "Paris",
            "image_prompt": "An image of the city Paris in France"
        }},
    ]
}}
</example>

# Transcript
{transcript}

# Flashcards"""