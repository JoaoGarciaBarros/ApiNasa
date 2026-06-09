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


async def get_image_library(date: str):
    url = f"https://images-api.nasa.gov/search"
    params = {
        "api_key": NASA_API_KEY,
        "q": date,
        "center": None,
        "description": None,
        "description_508": None,
        "keywords": None,
        "location": None,
        "media_type": None,
        "nasa_id": None,
        "page": None,
        "page_size": None,
        "photographer": None,
        "secondary_creator": None,
        "title": None,
        "year_start": None,
        "year_end": None,
    }

    params = {k: v for k, v in params.items() if v is not None}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()
