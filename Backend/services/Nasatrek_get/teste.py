from datetime import date
from itertools import count
import string
import asyncio

from fastapi import APIRouter

router = APIRouter()

import httpx

from App.config import (
    NASA_API_KEY,
    NASA_BASE_URL,
)


async def get_nasatrek(date: str):
    url = f"https://nasatrek.jpl.nasa.gov/api/"
