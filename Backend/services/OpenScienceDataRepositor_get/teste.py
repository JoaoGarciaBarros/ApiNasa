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


async def get_osdr(date: str):
    url = f"https://osdr.nasa.gov/osdr/data/osd/files/"
    params = {
        "OSD_STUDY_ID": None,
        "CURRENT_PAGE_NUMBER": None,
        "RESULTS_PER_PAGE": None,
        "ALL_FILES": None,
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()
