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
    url = "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI"
    params = {
        "table": "exoplanets",
        "select": "*",
        "where": f"disc_pubdate like '{date}%'",
        "orderby": "disc_pubdate desc",
        "format": "json",
    }
    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()

    # GIBS (NÃO ESTA CERTO )
