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
