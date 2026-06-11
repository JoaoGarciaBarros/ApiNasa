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


async def get_osdr(study_id: str):
    url = f"https://osdr.nasa.gov/osdr/data/osd/files/{study_id}"

    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        response.raise_for_status()
        return response.json()
