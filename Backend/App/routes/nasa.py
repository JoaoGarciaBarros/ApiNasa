from fastapi import APIRouter
router = APIRouter()
from ...services.nasa_services import (
    get_apod,
    get_asteroids,
    get_cneos,
    get_donki,
    get_eonet,
    get_epic,
    get_exoplanet,
    get_gibs,
    get_imagelibrary,
    get_insight,
    get_osdr,
    get_ssc,
    get_techport,
    get_techtransfer,
    get_tleapi,
    get_vesta,
)
