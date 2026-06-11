import { useState } from 'react'
import JsonBlock from '../../components/ui/JsonBlock'
import { getSsc } from '../../services/nasaClient'

export default function SSCTest() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleFetch() {
    setLoading(true)
    setError(null)
    try {
      setData(await getSsc())
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-4rem)] px-6 py-10 gap-6">
      <h1 className="text-2xl font-semibold text-white">Satellite Situation Center</h1>

      <button
        onClick={handleFetch}
        disabled={loading}
        className="bg-black text-white font-bold py-2 px-4 rounded border border-white/50 hover:bg-white/10 transition-colors duration-100 disabled:opacity-50"
      >
        {loading ? 'Buscando...' : 'Carregar observatórios'}
      </button>

      {error && <p className="text-red-400 text-sm">{error}</p>}
      {data && <div className="w-full max-w-3xl border border-white/30 rounded-xl"><JsonBlock data={data} /></div>}
    </div>
  )
}
