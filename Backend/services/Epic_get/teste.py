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


async def get_epic(date: str):
    url = f"{NASA_BASE_URL}/EPIC/api/natural/images"
    params = {
        "api_key": NASA_API_KEY,
        "natural": "true",
        "natural/date": date,
        "natural/all": string,
        "natural/available": string,
        "enhanced": string,
        "enhanced/date": date,
        "enhanced/all": string,
        "enhanced/available": string,
    }
    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()
