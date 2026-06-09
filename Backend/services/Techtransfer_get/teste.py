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


async def get_tech_transfer(date: str):
    url = f"{NASA_BASE_URL}/techtransfer"
    params = {
        "patent": None,  # string
        "patent_issued": None,  # boolean/string
        "software": None,  # string
        "spinoff": None,  # string
    }
    params = {k: v for k, v in params.items() if v is not None}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()
