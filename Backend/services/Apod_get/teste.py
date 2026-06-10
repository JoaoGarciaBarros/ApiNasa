import httpx

from App.config import (
    NASA_API_KEY,
    NASA_BASE_URL,
)


async def get_apod(date: str):
    url = f"{NASA_BASE_URL}/planetary/apod"
    params = {
        "api_key": NASA_API_KEY,
        "date": date}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()
