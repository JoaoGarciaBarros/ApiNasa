import asyncio
import os
import tempfile

from fastapi import APIRouter
import httpx

from App.config import (
    NASA_API_KEY,
    NASA_BASE_URL,
)

router = APIRouter()


async def get_gibs(date: str):
    url = (
        "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/"
        "MODIS_Terra_CorrectedReflectance_TrueColor/default/"
        f"{date}/250m/2/1/1.jpg"
    )
    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        response.raise_for_status()
        return response.content


async def main():
    img_bytes = await get_gibs("2024-06-01")
    with tempfile.NamedTemporaryFile(delete=False, suffix=".jpg") as tmp:
        tmp.write(img_bytes)
        tmp_path = tmp.name
    os.startfile(tmp_path)


if __name__ == "__main__":
    asyncio.run(main())
