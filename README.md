# EduAction
The EduAction project is specifically developed for the Encode Club AI Hackathon London 2024. It is an AI-powered application designed to create customizable educational content, quizzes, and interactive modules. The main objective of this project is to enhance engagement for educators, students, and self-learners. By leveraging the power of artificial intelligence, EduAction aims to add to the way educational content is created and consumed, providing a more interactive and personalized learning experience.

# Setup

Backend:
- Create and fill out .env file (c.f. .env.example)
- Install requirements
- Run application

For development:
```bash
uvicorn main:app --reload --port 8000 --log-level debug --host 0.0.0.0
```

For performance:
```bash
gunicorn main:app --workers 4 --worker-class uvicorn.workers.UvicornWorker --bind 0.0.0.0:8000
```
