import httpx

from App.config import (
    NASA_API_KEY,
    NASA_BASE_URL,
)


async def get_epic(date: str):
    url = f"{NASA_BASE_URL}/EPIC/api/natural/date/{date}"
    params = {
        "api_key": NASA_API_KEY,
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()
