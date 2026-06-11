import { useState } from 'react'
import DatePicker from '../../components/ui/DatePicker'
import JsonBlock from '../../components/ui/JsonBlock'
import { getAsteroidFeed, getAsteroidLookup, getAsteroidBrowse } from '../../services/nasaClient'

function useApi(fn) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function run(...args) {
    setLoading(true)
    setError(null)
    try {
      setData(await fn(...args))
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return { data, loading, error, run }
}

export function AsteroidFeed() {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const { data, loading, error, run } = useApi(getAsteroidFeed)

  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-4rem)] px-6 py-10 gap-6">
      <h1 className="text-2xl font-semibold text-white">NEO — Feed</h1>
      <div className="text-white/60 text-xl mb-4">Escolha a data de sua preferencia, o projeto foi iniciado no dia 16 de junho de 1995.</div>

      <div className="flex gap-4 items-center flex-col">
        <div className="flex items-center flex-col">
          <h2 className="text-xl font-semibold text-white">date</h2>
        <DatePicker value={date} onChange={setDate} />
        </div>
        <button
          onClick={() => run(date)}
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

export function AsteroidLookup() {
  const [asteroidId, setAsteroidId] = useState('3542519')
  const { data, loading, error, run } = useApi(getAsteroidLookup)

  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-6  rem)] px-6 py-10 gap-6">
      <h1 className="text-2xl font-semibold text-white">NEO — Lookup</h1>
      <div className="text-white/60 text-xl mb-4">Use o ID do asteroide para buscar detalhes específicos.</div>

      <div className="flex gap-4 items-center flex-col">
        <div className="flex items-center flex-col">
          <h2 className="text-xl font-semibold text-white">asteroidId</h2>
          <input
            type="text"
            inputMode="numeric"
            value={asteroidId}
            onChange={e => setAsteroidId(e.target.value.replace(/\D/g, "").slice(0, 7))}
            placeholder="ID do asteroide (ex: 3542519)"
            className="bg-black text-white border border-white/50 rounded px-3 py-2 w-64"
          />
        </div>
        <button
          onClick={() => run(asteroidId)}
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

export function AsteroidBrowse() {
  const { data, loading, error, run } = useApi(getAsteroidBrowse)

  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-4rem)] px-6 py-10 gap-6">
      <h1 className="text-2xl font-semibold text-white">NEO — Browse</h1>
      <div className="text-white/60 text-xl mb-4">Use para buscar Objetos proximos em todos os tempos.</div>

      <button
        onClick={() => run()}
        disabled={loading}
        className="bg-black text-white font-bold py-2 px-4 rounded border border-white/50 hover:bg-white/10 transition-colors duration-100 disabled:opacity-50"
      >
        {loading ? 'Buscando...' : 'Carregar asteroides'}
      </button>

      {error && <p className="text-red-400 text-sm">{error}</p>}
      {data && <div className="w-full max-w-3xl border border-white/30 rounded-xl"><JsonBlock data={data} /></div>}
    </div>
  )
}
