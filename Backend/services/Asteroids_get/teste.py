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


async def get_asteroid_feed(date: str):
    url = f"{NASA_BASE_URL}/neo/rest/v1/feed"
    params = {
        "api_key": NASA_API_KEY,
        "start_date": date,
        "end_date": date,
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


async def get_asteroid_lookup(asteroid_id: str):
    url = f"{NASA_BASE_URL}/neo/rest/v1/neo/{asteroid_id}"
    params = {
        "api_key": NASA_API_KEY,
        "asteroid_id": asteroid_id,
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


async def get_asteroid_browse():
    url = f"{NASA_BASE_URL}/neo/rest/v1/neo/browse"
    params = {
        "api_key": NASA_API_KEY,
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()
