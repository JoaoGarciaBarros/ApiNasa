import httpx

from app.config import (
    NASA_API_KEY,
    NASA_BASE_URL,
)

# APOD
async def get_apod(url: str = f"{NASA_BASE_URL}/planetary/apod", params: dict | None = None):

    """Fetch NASA APOD (Astronomy Picture of the Day)."""

    if params is None:
        params = {"api_key": NASA_API_KEY}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()

# ASTEROIDS
async def get_asteroids(url: str = f"{NASA_BASE_URL}/neo/rest/v1/feed", params: dict | None = None):

    """Fetch NASA NEO (Near Earth Objects) data."""

    if params is None:
        params = {"api_key": NASA_API_KEY}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()
    
    # CNEOS
async def get_cneos(url: str = f"{NASA_BASE_URL}/cneos/rest/v1/neo/browse", params: dict | None = None):

    """Fetch NASA CNEOS (Center for Near Earth Object Studies) data."""

    if params is None:
        params = {"api_key": NASA_API_KEY}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()
    
    #DONKI
async def get_donki(url: str = f"{NASA_BASE_URL}/DONKI/alerts", params: dict | None = None):

    """Fetch NASA DONKI (Space Weather Database Of Notifications, Knowledge, Information) data."""

    if params is None:
        params = {"api_key": NASA_API_KEY}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()
    
    #EONET
async def get_eonet(url: str = f"{NASA_BASE_URL}/eonet/rest/v3/events", params: dict | None = None):

    """Fetch NASA EONET (Earth Observatory Natural Event Tracker) data."""

    if params is None:
        params = {"api_key": NASA_API_KEY}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()
    
    #EPIC
async def get_epic(url: str = f"{NASA_BASE_URL}/EPIC/api/natural/images", params: dict | None = None):

    """Fetch NASA EPIC (Earth Polychromatic Imaging Camera) data."""

    if params is None:
        params = {"api_key": NASA_API_KEY}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()
    
    #EXOPLANET
async def get_exoplanet(url: str = f"{NASA_BASE_URL}/exoplanetarchive/rest/v1/exoplanets", params: dict | None = None):

    """Fetch NASA Exoplanet data."""

    if params is None:
        params = {"api_key": NASA_API_KEY}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()
    
    #GIBS
async def get_gibs(url: str = f"{NASA_BASE_URL}/gibs/rest/v1/imagery/metadata", params: dict | None = None):
    """Fetch NASA GIBS (Global Imagery Browse Services) data."""

    if params is None:
        params = {"api_key": NASA_API_KEY}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()
    
    #IMAGELIBRARY
async def get_imagelibrary(url: str = f"{NASA_BASE_URL}/imagery/api/v1/search", params: dict | None = None):

    """Fetch NASA Image Library data."""

    if params is None:
        params = {"api_key": NASA_API_KEY}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()
    
    #INSIGHT
async def get_insight(url: str = f"{NASA_BASE_URL}/insight_weather/", params: dict | None = None):

    """Fetch NASA InSight (Interior Exploration using Seismic Investigations, Geodesy and Heat Transport) data."""

    if params is None:
        params = {"api_key": NASA_API_KEY}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()
    
    #OSDR
async def get_osdr(url: str = f"{NASA_BASE_URL}/osdr/rest/v1/objects", params: dict | None = None):

    """Fetch NASA OSDR (Orbital Debris Program Office) data."""

    if params is None:
        params = {"api_key": NASA_API_KEY}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()
    
    #SSC
async def get_ssc(url: str = f"{NASA_BASE_URL}/ssc/rest/v1/spacecraft", params: dict | None = None):

    """Fetch NASA SSC (Space Science Center) data."""

    if params is None:
        params = {"api_key": NASA_API_KEY}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()
    
    #TECHPORT
async def get_techport(url: str = f"{NASA_BASE_URL}/techport/api/projects", params: dict | None = None):

    """Fetch NASA TechPort (Technology Portfolio) data."""

    if params is None:
        params = {"api_key": NASA_API_KEY}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()
    
    #TECHTRANSFER
async def get_techtransfer(url: str = f"{NASA_BASE_URL}/techtransfer/api/techtransfer", params: dict | None = None):

    """Fetch NASA TechTransfer (Technology Transfer Program) data."""

    if params is None:
        params = {"api_key": NASA_API_KEY}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()
    
    #TLEAPI
async def get_tleapi(url: str = f"{NASA_BASE_URL}/tle/rest/v1/tle", params: dict | None = None):

    """Fetch NASA TLEAPI (Two-Line Element Set) data."""

    if params is None:
        params = {"api_key": NASA_API_KEY}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()
    
    #VESTA
async def get_vesta(url: str = f"{NASA_BASE_URL}/vesta/rest/v1/asteroid", params: dict | None = None):

    """Fetch NASA VESTA (Virtual Environment for Space and Terrestrial Analysis) data."""

    if params is None:
        params = {"api_key": NASA_API_KEY}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()
    