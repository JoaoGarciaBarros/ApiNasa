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


async def get_apod(date: str):
    url = f"{NASA_BASE_URL}/planetary/apod"
    params = {
        "api_key": NASA_API_KEY,
        "date": date,
        "start_date": date,
        "end_date": date,
        "count": count,
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


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


async def get_donki_cme(date: str):
    url = f"{NASA_BASE_URL}/DONKI/CME"
    params = {
        "api_key": NASA_API_KEY,
        "start_date": date,
        "end_date": date,
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


async def get_donki_analysis(date: str):
    url = f"{NASA_BASE_URL}/DONKI/CMEAnalysis"
    params = {
        "api_key": NASA_API_KEY,
        "start_date": date,
        "end_date": date,
        "mostAccurateOnly": True,
        "completeEntryOnly": True,
        "speed": 0,
        "half": 0,
        "catalog": "ALL",
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


async def get_donki_gst(date: str):
    url = f"{NASA_BASE_URL}/DONKI/GST"
    params = {
        "api_key": NASA_API_KEY,
        "start_date": date,
        "end_date": date,
        "mostAccurateOnly": True,
        "completeEntryOnly": True,
        "speed": 0,
        "half": 0,
        "catalog": "ALL",
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


async def get_donki_ips(date: str):
    url = f"{NASA_BASE_URL}/DONKI/IPS"
    params = {
        "api_key": NASA_API_KEY,
        "start_date": date,
        "end_date": date,
        "catalog": "ALL",
        "location": "ALL",
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


async def get_donki_flr(date: str):
    url = f"{NASA_BASE_URL}/DONKI/FLR"
    params = {
        "api_key": NASA_API_KEY,
        "start_date": date,
        "end_date": date,
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


async def get_donki_sep(date: str):
    url = f"{NASA_BASE_URL}/DONKI/SEP"
    params = {
        "api_key": NASA_API_KEY,
        "start_date": date,
        "end_date": date,
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


async def get_donki_mpc(date: str):
    url = f"{NASA_BASE_URL}/DONKI/MPC"
    params = {
        "api_key": NASA_API_KEY,
        "start_date": date,
        "end_date": date,
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


async def get_donki_rbe(date: str):
    url = f"{NASA_BASE_URL}/DONKI/RBE"
    params = {
        "api_key": NASA_API_KEY,
        "start_date": date,
        "end_date": date,
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


async def get_donki_hss(date: str):
    url = f"{NASA_BASE_URL}/DONKI/HSS"
    params = {
        "api_key": NASA_API_KEY,
        "start_date": date,
        "end_date": date,
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


async def get_donki_wsa_enlil_simulation(date: str):
    url = f"{NASA_BASE_URL}/DONKI/WSAEnlilSimulations"
    params = {
        "api_key": NASA_API_KEY,
        "start_date": date,
        "end_date": date,
    }


async def get_donki_notification(date: str):
    url = f"{NASA_BASE_URL}/DONKI/Notifications"
    params = {
        "api_key": NASA_API_KEY,
        "start_date": date,
        "end_date": date,
        "type": "all",
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


# async def get_eonet(date: str):
# NÃO ACHAMOS NADA DO EONET/NÃO TEMOS PERMISSÃO PARA O SITE CERTO


async def get_epic(date: str):
    url = f"{NASA_BASE_URL}/EPIC/api/natural/images"
    params = {
        "api_key": NASA_API_KEY,
        "natural": "true",
        "natural/date": date,
        "natural/all": string,
        "natural/available": string,
        "enhanced": string,
        "enhanced/date": date,
        "enhanced/all": string,
        "enhanced/available": string,
    }
    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


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


async def get_gibs(date: str):
    url = f"https://nasa-gibs.github.io/gibs-api-docs/access-basics/"
    params = {
        "api_key": NASA_API_KEY,
        "date": date,
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


async def get_insight(date: str):
    url = f"{NASA_BASE_URL}/insight_weather/"
    params = {
        "api_key": NASA_API_KEY,
        "feedtype": "json",
        "version": "1.0",
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


async def get_image_library(date: str):
    url = f"https://images-api.nasa.gov/search"
    params = {
        "api_key": NASA_API_KEY,
        "q": date,
        "center": None,
        "description": None,
        "description_508": None,
        "keywords": None,
        "location": None,
        "media_type": None,
        "nasa_id": None,
        "page": None,
        "page_size": None,
        "photographer": None,
        "secondary_creator": None,
        "title": None,
        "year_start": None,
        "year_end": None,
    }

    params = {k: v for k, v in params.items() if v is not None}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


async def get_insight_assest(date: str):
    url = f"https://images-api.nasa.gov/asset/"
    params = {
        "api_key": NASA_API_KEY,
        "feedtype": "json",
        "version": "1.0",
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


async def get_insight_metadata(nasa_id: str):
    url = f"https://images-api.nasa.gov/metadata/"
    params = {
        "NASA_ID": nasa_id,
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


async def get_insight_caption(nasa_id: str):
    url = f"https://images-api.nasa.gov/caption/"
    params = {
        "NASA_ID": nasa_id,
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


async def get_osdr(date: str):
    url = f"https://osdr.nasa.gov/osdr/data/osd/files/"
    params = {
        "OSD_STUDY_ID": None,
        "CURRENT_PAGE_NUMBER": None,
        "RESULTS_PER_PAGE": None,
        "ALL_FILES": None,
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


# SSC
# NÃO ACHAMOS NADA DO SSC


async def get_cneos(date: str):
    url = f"https://ssd-api.jpl.nasa.gov/cad.api"
    params = {
        "dist-max": None,  # float/string
        "dist-min": None,  # float/string
        "min-dist-min": None,  # float/string
        "min-dist-max": None,  # float/string
        "h-min": None,  # float/string
        "h-max": None,  # float/string
        "v-inf-min": None,  # float/string
        "v-inf-max": None,  # float/string
        "v-rel-min": None,  # float/string
        "v-rel-max": None,  # float/string
        "class": None,  # string
        "pha": None,  # string/boolean
        "nea": None,  # string/boolean
        "comet": None,  # string/boolean
        "nea-comet": None,  # string/boolean
        "neo": None,  # string/boolean
        "kind": None,  # string
        "spk": None,  # int/string
        "des": None,  # string
        "body": None,  # string
        "sort": None,  # string
        "limit": None,  # int/string
        "limit-from": None,  # int/string
        "total-only": None,  # boolean/string
        "diameter": None,  # boolean/string
        "fullname": None,  # boolean/string
    }

    params = {k: v for k, v in params.items() if v is not None}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


async def get_mission_design(
    mode: str,
    lim: int | None = None,
    crit: int | None = None,
    year: int | None = None,
    des: str | None = None,
    spk: str | None = None,
    sstr: str | None = None,
    orbit_class: str | None = None,
    mjd0: float | None = None,
    span: int | None = None,
    tof_min: int | None = None,
    tof_max: int | None = None,
    step: int | None = None,
    ec: float | None = None,
    qr: float | None = None,
    tp: float | None = None,
    inc: float | None = None,
    om: float | None = None,
    w: float | None = None,
    jd0: float | None = None,
    jdf: float | None = None,
    maxout: int | None = None,
    maxdist: float | None = None,
):
    url = "https://ssd-api.jpl.nasa.gov/mdesign.api"

    params = {
        "mode": mode,
        "lim": lim,
        "crit": crit,
        "year": year,
        "des": des,
        "spk": spk,
        "sstr": sstr,
        "class": orbit_class,
        "mjd0": mjd0,
        "span": span,
        "tof-min": tof_min,
        "tof-max": tof_max,
        "step": step,
        "ec": ec,
        "qr": qr,
        "tp": tp,
        "in": inc,
        "om": om,
        "w": w,
        "jd0": jd0,
        "jdf": jdf,
        "maxout": maxout,
        "maxdist": maxdist,
    }

    params = {k: v for k, v in params.items() if v is not None}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


async def get_cneos_nhats(date: str):
    url = f"https://ssd-api.jpl.nasa.gov/nhats.api"
    params = {
        "dv": None,  # float
        "dur": None,  # int
        "stay": None,  # int
        "launch": None,  # data/string
        "h": None,  # float
        "occ": None,  # boolean/string
        "spk": None,  # int/string
        "des": None,  # string
        "plot": None,  # string/boolean
    }
    params = {k: v for k, v in params.items() if v is not None}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


async def get_cneos_scout(date: str):
    url = f"https://ssd-api.jpl.nasa.gov/scout.api"
    params = {
        "tdes": None,  # string
        "plot": None,  # string
        "file": None,  # string
        "orbits": None,  # bool
        "n-orbits": None,  # int
        "eph-start": None,  # string
        "eph-stop": None,  # string
        "eph-step": None,  # int
        "obs-code": None,  # string
        "fov-diam": None,  # float
        "fov-ra": None,  # float
        "fov-dec": None,  # float
        "fov-vmag": None,  # float
        "ranges": None,  # string
    }
    params = {k: v for k, v in params.items() if v is not None}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


async def get_cneos_sentry(date: str):
    url = f"https://ssd-api.jpl.nasa.gov/sentry.api"
    params = {
        "spk": int,
        "des": string,
        "h-max": None,  # float
        "ps-min": None,  # float
        "ip-min": None,  # float
        "days": None,  # int
        "all": None,  # bool
        "removed": None,  # bool
    }
    params = {k: v for k, v in params.items() if v is not None}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


async def get_techport(date: str):
    url = f"https://techport.nasa.gov/help/api"


# TECHTRANSFER
async def get_tech_transfer(date: str):
    url = f"{NASA_BASE_URL}/techtransfer"
    params = {
        "patent": None,  # string
        "patent_issued": None,  # boolean/string
        "software": None,  # string
        "spinoff": None,  # string
    }
    params = {k: v for k, v in params.items() if v is not None}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


async def get_tle_api(query: str):
    url = "http://tle.ivanstanojevic.me/api/tle"

    params = {"search": query}  # string

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


async def get_nasatrek(date: str):
    url = f"https://nasatrek.jpl.nasa.gov/api/"
