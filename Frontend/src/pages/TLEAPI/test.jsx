import { useState } from 'react'
import JsonBlock from '../../components/ui/JsonBlock'
import { getTle } from '../../services/nasaClient'

export default function TLEAPITest() {
  const [query, setQuery] = useState('ISS')
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleFetch() {
    setLoading(true)
    setError(null)
    try {
      setData(await getTle(query))
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-4rem)] px-6 py-10 gap-6">
      <h1 className="text-2xl font-semibold text-white">TLE API — Two Line Element</h1>

      <div className="flex gap-4 items-center flex-col">
        <div className="flex items-center flex-col">
          <h2 className="text-xl font-semibold text-white">search</h2>
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="ex: ISS"
            className="bg-black text-white border border-white/50 rounded px-3 py-2 w-64"
          />
        </div>
        <button
          onClick={handleFetch}
          disabled={loading}
          className="bg-black text-white font-bold py-2 px-4 rounded border border-white/50 hover:bg-white/10 transition-colors duration-100 disabled:opacity-50"
        >
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
      </div>

      {error && <p className="text-red-400 text-sm">{error}</p>}
      {data && <div className="w-full max-w-3xl border border-white/30 rounded-xl"><JsonBlock data={data} /></div>}
    </div>
  )
}
