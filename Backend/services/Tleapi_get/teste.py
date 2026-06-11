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


async def get_tle_api(query: str):
    url = "https://tle.ivanstanojevic.me/api/tle"

    params = {"search": query}

    headers = {"User-Agent": "curl/8.0"}

    async with httpx.AsyncClient(follow_redirects=True, headers=headers) as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()
