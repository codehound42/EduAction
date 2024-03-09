import logging

from dotenv import load_dotenv
from pydantic_settings import BaseSettings

logger = logging.getLogger(__name__)

load_dotenv()

class Settings(BaseSettings):
    FRONTEND_BASE_URLS: list[str] = [
        "http://localhost:3000",
    ]
    CHUNK_SIZE: int = 20_000

settings = Settings()
