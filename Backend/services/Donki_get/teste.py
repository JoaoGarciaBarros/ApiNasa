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


async def get_donki_cme(date: str):
    url = f"{NASA_BASE_URL}/DONKI/CME"
    params = {
        "api_key": NASA_API_KEY,
        "startDate": date,
        "endDate": date,
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


async def get_donki_analysis(date: str):
    url = f"{NASA_BASE_URL}/DONKI/CMEAnalysis"
    params = {
        "api_key": NASA_API_KEY,
        "startDate": date,
        "endDate": date,
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
        "startDate": date,
        "endDate": date,
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
        "startDate": date,
        "endDate": date,
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
        "startDate": date,
        "endDate": date,
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


async def get_donki_sep(date: str):
    url = f"{NASA_BASE_URL}/DONKI/SEP"
    params = {
        "api_key": NASA_API_KEY,
        "startDate": date,
        "endDate": date,
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


async def get_donki_mpc(date: str):
    url = f"{NASA_BASE_URL}/DONKI/MPC"
    params = {
        "api_key": NASA_API_KEY,
        "startDate": date,
        "endDate": date,
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


async def get_donki_rbe(date: str):
    url = f"{NASA_BASE_URL}/DONKI/RBE"
    params = {
        "api_key": NASA_API_KEY,
        "startDate": date,
        "endDate": date,
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


async def get_donki_hss(date: str):
    url = f"{NASA_BASE_URL}/DONKI/HSS"
    params = {
        "api_key": NASA_API_KEY,
        "startDate": date,
        "endDate": date,
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


async def get_donki_wsa_enlil_simulation(date: str):
    url = f"{NASA_BASE_URL}/DONKI/WSAEnlilSimulations"
    params = {
        "api_key": NASA_API_KEY,
        "startDate": date,
        "endDate": date,
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


async def get_donki_notification(date: str):
    url = f"{NASA_BASE_URL}/DONKI/Notifications"
    params = {
        "api_key": NASA_API_KEY,
        "startDate": date,
        "endDate": date,
        "type": "all",
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()
