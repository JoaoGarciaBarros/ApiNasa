from dotenv import load_dotenv
import os

load_dotenv()

NASA_API_KEY = os.getenv("NASA_API_KEY")
NASA_BASE_URL = os.getenv("NASA_BASE_URL")
