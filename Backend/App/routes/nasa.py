from fastapi import APIRouter
from services.Apod_get.teste import get_apod
from services.Gibs_get.teste import get_gibs
from services.Image_library_get.teste import get_image_library
from services.Insight_get.teste import (
    get_insight,
    get_insight_assest,
    get_insight_metadata,
    get_insight_caption,
)
from services.Asteroids_get.teste import (
    get_asteroid_feed,
    get_asteroid_lookup,
    get_asteroid_browse,
)
from services.Cneos_get.teste import (
    get_cneos,
    get_cneos_fireball,
    get_cneos_nhats,
    get_cneos_scout,
    get_cneos_sentry,
    get_mission_design,
)
from services.Donki_get.teste import (
    get_donki_cme,
    get_donki_analysis,
    get_donki_gst,
    get_donki_ips,
    get_donki_flr,
    get_donki_sep,
    get_donki_mpc,
    get_donki_rbe,
    get_donki_hss,
    get_donki_wsa_enlil_simulation,
    get_donki_notification,
)
from services.Epic_get.teste import get_epic
from services.Exoplanet_get.teste import get_exoplanet
from services.Techtransfer_get.teste import get_tech_transfer
from services.Tleapi_get.teste import get_tle_api
from services.OpenScienceDataRepositor_get.teste import get_osdr
from services.Nasatrek_get.teste import get_nasatrek
from services.Techport_get.teste import get_techport
from services.SatelliteSituationCenter_get.teste import get_ssc

router = APIRouter(prefix="/nasa", tags=["NASA"])


@router.get("/apod")
async def apod_route(
    date: str):
    return await get_apod(date)


@router.get("/gibs")
async def gibs_route(date: str):
    return await get_gibs(date)


@router.get("/image-library")
async def image_library_route(date: str):
    return await get_image_library(date)


@router.get("/insight")
async def insight_route(date: str):
    return await get_insight(date)


@router.get("/insight-assest")
async def insight_assest_route(nasa_id: str):
    return await get_insight_assest(nasa_id)


@router.get("/insight-metadata")
async def insight_metadata_route(nasa_id: str):
    return await get_insight_metadata(nasa_id)


@router.get("/insight-caption")
async def insight_caption_route(nasa_id: str):
    return await get_insight_caption(nasa_id)


@router.get("/asteroid-feed")
async def asteroid_feed_route(
    date: str):
    return await get_asteroid_feed(date)


@router.get("/asteroid-lookup")
async def asteroid_lookup_route(asteroid_id: str):
    return await get_asteroid_lookup(asteroid_id)


@router.get("/asteroid-browse")
async def asteroid_browse_route():
    return await get_asteroid_browse()


@router.get("/cneos")
async def cneos_route(date: str):
    return await get_cneos(date)


@router.get("/cneos-fireball")
async def cneos_fireball_route(date: str):
    return await get_cneos_fireball(date)


@router.get("/cneos-nhats")
async def cneos_nhats_route(date: str):
    return await get_cneos_nhats(date)


@router.get("/cneos-scout")
async def cneos_scout_route(date: str):
    return await get_cneos_scout(date)


@router.get("/cneos-sentry")
async def cneos_sentry_route(date: str):
    return await get_cneos_sentry(date)


@router.get("/mission-design")
async def mission_design_route(
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
    return await get_mission_design(
        mode,
        lim,
        crit,
        year,
        des,
        spk,
        sstr,
        orbit_class,
        mjd0,
        span,
        tof_min,
        tof_max,
        step,
        ec,
        qr,
        tp,
        inc,
        om,
        w,
        jd0,
        jdf,
        maxout,
        maxdist,
    )


@router.get("/donki-cme")
async def donki_cme_route(date: str):
    return await get_donki_cme(date)


@router.get("/donki-analysis")
async def donki_analysis_route(date: str):
    return await get_donki_analysis(date)


@router.get("/donki-gst")
async def donki_gst_route(date: str):
    return await get_donki_gst(date)


@router.get("/donki-ips")
async def donki_ips_route(date: str):
    return await get_donki_ips(date)


@router.get("/donki-flr")
async def donki_flr_route(date: str):
    return await get_donki_flr(date)


@router.get("/donki-sep")
async def donki_sep_route(date: str):
    return await get_donki_sep(date)


@router.get("/donki-mpc")
async def donki_mpc_route(date: str):
    return await get_donki_mpc(date)


@router.get("/donki-rbe")
async def donki_rbe_route(date: str):
    return await get_donki_rbe(date)


@router.get("/donki-hss")
async def donki_hss_route(date: str):
    return await get_donki_hss(date)


@router.get("/donki-wsa-enlil")
async def donki_wsa_enlil_route(date: str):
    return await get_donki_wsa_enlil_simulation(date)


@router.get("/donki-notification")
async def donki_notification_route(date: str):
    return await get_donki_notification(date)


@router.get("/epic")
async def epic_route(date: str):
    return await get_epic(date)


@router.get("/exoplanet")
async def exoplanet_route(date: str):
    return await get_exoplanet(date)


@router.get("/tech-transfer")
async def tech_transfer_route(
    patent: str | None = None,
    software: str | None = None,
    spinoff: str | None = None,
):
    if patent is not None:
        category, query = "patent", patent
    elif software is not None:
        category, query = "software", software
    else:
        category, query = "spinoff", spinoff or ""
    return await get_tech_transfer(category, query)


@router.get("/tle")
async def tle_route(query: str):
    return await get_tle_api(query)


@router.get("/osdr")
async def osdr_route(study_id: str):
    return await get_osdr(study_id)


@router.get("/nasatrek")
async def nasatrek_route(date: str):
    return await get_nasatrek(date)


@router.get("/techport")
async def techport_route(date: str):
    return await get_techport(date)


@router.get("/ssc")
async def ssc_route():
    return await get_ssc()
