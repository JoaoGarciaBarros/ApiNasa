import httpx


async def get_techport(date: str):
    url = "https://techport.nasa.gov/api/projects"
    params = {
        "updatedSince": date,
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()
