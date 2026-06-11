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


async def get_exoplanet(date: str):
    url = "https://exoplanetarchive.ipac.caltech.edu/TAP/sync"
    year = date.split("-")[0]
    query = (
        "select pl_name,hostname,disc_year,discoverymethod,disc_facility,pl_orbper,pl_rade,pl_bmasse "
        f"from ps where disc_year = {year} order by pl_name"
    )
    params = {
        "query": query,
        "format": "json",
    }
    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()