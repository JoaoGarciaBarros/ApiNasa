import { useState } from 'react'
import JsonBlock from '../../components/ui/JsonBlock'
import { getExoplanet } from '../../services/nasaClient'

export default function ExoplanetTest() {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleFetch() {
    setLoading(true)
    setError(null)
    try {
      setData(await getExoplanet(date))
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-4rem)] px-6 py-10 gap-6">
      <h1 className="text-2xl font-semibold text-white">Exoplanet Archive</h1>
      <div className="text-white/60 text-xl mb-4">Busca por data de publicação da descoberta.</div>

      <div className="flex gap-4 items-center flex-col">
        <div className="flex items-center flex-col">
          <h2 className="text-xl font-semibold text-white">disc_pubdate</h2>
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            className="bg-black text-white border border-white/50 rounded px-3 py-2"
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
