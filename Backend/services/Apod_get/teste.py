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


async def get_apod(date: str):
    url = f"{NASA_BASE_URL}/planetary/apod"
    params = {
        "api_key": NASA_API_KEY,
        "date": date,
        "start_date": date,
        "end_date": date,
        "count": count,
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()
