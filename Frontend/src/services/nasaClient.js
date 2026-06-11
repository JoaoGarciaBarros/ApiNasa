const BASE = '/nasa'

async function request(path) {
  const res = await fetch(BASE + path)
  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || `Erro ${res.status}`)
  }
  return res.json()
}

export function getApod(date) {
  return request(`/apod?date=${date}`)
}

export function getAsteroidFeed(date) {
  return request(`/asteroid-feed?date=${date}`)
}

export function getAsteroidLookup(asteroidId) {
  return request(`/asteroid-lookup?asteroid_id=${asteroidId}`)
}

export function getAsteroidBrowse() {
  return request('/asteroid-browse')
}

export function getCneosCad(date) {
  return request(`/cneos?date=${date}`)
}

export function getCneosFireball(date) {
  return request(`/cneos-fireball?date=${date}`)
}

export function getCneosNhats(date) {
  return request(`/cneos-nhats?date=${date}`)
}

export function getCneosScout(date) {
  return request(`/cneos-scout?date=${date}`)
}

export function getCneosSentry(date) {
  return request(`/cneos-sentry?date=${date}`)
}

export function getMissionDesign(params) {
  const query = new URLSearchParams(
    Object.fromEntries(Object.entries(params).filter(([, v]) => v !== '' && v != null))
  ).toString()
  return request(`/mission-design?${query}`)
}

export function getDonkiCme(date) {
  return request(`/donki-cme?date=${date}`)
}

export function getDonkiAnalysis(date) {
  return request(`/donki-analysis?date=${date}`)
}

export function getDonkiGst(date) {
  return request(`/donki-gst?date=${date}`)
}

export function getDonkiIps(date) {
  return request(`/donki-ips?date=${date}`)
}

export function getDonkiFlr(date) {
  return request(`/donki-flr?date=${date}`)
}

export function getDonkiSep(date) {
  return request(`/donki-sep?date=${date}`)
}

export function getDonkiMpc(date) {
  return request(`/donki-mpc?date=${date}`)
}

export function getDonkiRbe(date) {
  return request(`/donki-rbe?date=${date}`)
}

export function getDonkiHss(date) {
  return request(`/donki-hss?date=${date}`)
}

export function getDonkiWsaEnlil(date) {
  return request(`/donki-wsa-enlil?date=${date}`)
}

export function getDonkiNotification(date) {
  return request(`/donki-notification?date=${date}`)
}

export function getEpic(date) {
  return request(`/epic?date=${date}`)
}

export function getExoplanet(date) {
  return request(`/exoplanet?date=${date}`)
}

export function getImageLibrary(query) {
  return request(`/image-library?date=${encodeURIComponent(query)}`)
}

export function getInsight(date) {
  return request(`/insight?date=${date}`)
}

export function getInsightAsset(nasaId) {
  return request(`/insight-assest?nasa_id=${encodeURIComponent(nasaId)}`)
}

export function getInsightMetadata(nasaId) {
  return request(`/insight-metadata?nasa_id=${encodeURIComponent(nasaId)}`)
}

export function getInsightCaption(nasaId) {
  return request(`/insight-caption?nasa_id=${encodeURIComponent(nasaId)}`)
}

export function getOsdr(studyId) {
  return request(`/osdr?date=${encodeURIComponent(studyId)}`)
}

export function getNasatrek(query) {
  return request(`/nasatrek?date=${encodeURIComponent(query)}`)
}

export function getSsc() {
  return request('/ssc')
}

export function getTechport(date) {
  return request(`/techport?date=${date}`)
}

export function getTechTransfer(field, query) {
  return request(`/tech-transfer?${field}=${encodeURIComponent(query)}`)
}

export function getTle(query) {
  return request(`/tle?query=${encodeURIComponent(query)}`)
}

export function getGibsTileUrl(date) {
  return `https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/${date}/250m/2/1/1.jpg`
}
