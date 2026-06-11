import httpx


async def get_ssc():
    url = "https://sscweb.gsfc.nasa.gov/WS/sscr/2/observatories"
    headers = {
        "Accept": "application/json",
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, headers=headers)
        response.raise_for_status()
        return response.json()
