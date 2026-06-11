import { useState } from 'react'
import DatePicker from '../../components/ui/DatePicker'
import JsonBlock from '../../components/ui/JsonBlock'
import {
  getCneosCad,
  getCneosFireball,
  getMissionDesign,
  getCneosNhats,
  getCneosScout,
  getCneosSentry,
} from '../../services/nasaClient'

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

function DateField({ title, onSearch }) {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const { data, loading, error, run } = useApi(onSearch)

  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-4rem)] px-6 py-10 gap-6">
      <h1 className="text-2xl font-semibold text-white">{title}</h1>

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

export function CNEOSCAD() {
  return <DateField title="SSD/CNEOS — CAD" onSearch={getCneosCad} />
}

export function CNEOSFireball() {
  return <DateField title="SSD/CNEOS — Fireball" onSearch={getCneosFireball} />
}

export function CNEOSMissionDesign() {
  const [mode, setMode] = useState('S')
  const [des, setDes] = useState('433')
  const { data, loading, error, run } = useApi(getMissionDesign)

  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-4rem)] px-6 py-10 gap-6">
      <h1 className="text-2xl font-semibold text-white">SSD/CNEOS — Mission Design</h1>

      <div className="flex gap-4 items-center flex-col">
        <div className="flex gap-4 items-center">
          <div className="flex items-center flex-col">
            <h2 className="text-xl font-semibold text-white">mode</h2>
            <input
              type="text"
              value={mode}
              onChange={e => setMode(e.target.value)}
              className="bg-black text-white border border-white/50 rounded px-3 py-2 w-32"
            />
          </div>
          <div className="flex items-center flex-col">
            <h2 className="text-xl font-semibold text-white">des</h2>
            <input
              type="text"
              value={des}
              onChange={e => setDes(e.target.value)}
              className="bg-black text-white border border-white/50 rounded px-3 py-2 w-32"
            />
          </div>
        </div>
        <button
          onClick={() => run({ mode, des })}
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

export function CNEOSNHATS() {
  return <DateField title="SSD/CNEOS — NHATS" onSearch={getCneosNhats} />
}

export function CNEOSScout() {
  const [tdes, setTdes] = useState('')
  const { data, loading, error, run } = useApi(getCneosScout)

  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-4rem)] px-6 py-10 gap-6">
      <h1 className="text-2xl font-semibold text-white">SSD/CNEOS — Scout</h1>

      <div className="flex gap-4 items-center flex-col">
        <div className="flex items-center flex-col">
          <h2 className="text-xl font-semibold text-white">tdes</h2>
          <input
            type="text"
            value={tdes}
            onChange={e => setTdes(e.target.value)}
            placeholder="ex: P21Eqd6"
            className="bg-black text-white border border-white/50 rounded px-3 py-2 w-64"
          />
        </div>
        <button
          onClick={() => run(tdes)}
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

export function CNEOSSentry() {
  return <DateField title="SSD/CNEOS — Sentry" onSearch={getCneosSentry} />
}
