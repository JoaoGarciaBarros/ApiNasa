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


async def get_cneos_fireball(date: str):
    url = f"https://ssd-api.jpl.nasa.gov/fireball.api"
    params = {
        "date-min": date,
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
        "spk": None,  # int/string
        "des": None,  # string
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
