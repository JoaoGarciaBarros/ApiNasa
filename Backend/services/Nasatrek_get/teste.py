import httpx


async def get_nasatrek(date: str):
    url = "https://trek.nasa.gov/mars/TrekWS/rest/cat/datasets"
    params = {
        "search": date,
        "proj": "mars",
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()
