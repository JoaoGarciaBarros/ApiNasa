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


async def get_insight(date: str):
    url = f"{NASA_BASE_URL}/insight_weather/"
    params = {
        "api_key": NASA_API_KEY,
        "feedtype": "json",
        "version": "1.0",
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


async def get_insight_assest(nasa_id: str):
    url = f"https://images-api.nasa.gov/asset/{nasa_id}"

    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        response.raise_for_status()
        return response.json()


async def get_insight_metadata(nasa_id: str):
    url = f"https://images-api.nasa.gov/metadata/{nasa_id}"

    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        response.raise_for_status()
        return response.json()


async def get_insight_caption(nasa_id: str):
    url = f"https://images-api.nasa.gov/captions/{nasa_id}"

    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        response.raise_for_status()
        return response.json()
