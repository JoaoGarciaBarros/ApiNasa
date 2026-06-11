import { useState } from 'react'
import JsonBlock from '../../components/ui/JsonBlock'
import {
  getImageLibrary,
  getInsightAsset,
  getInsightMetadata,
  getInsightCaption,
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

function TextField({ title, label, placeholder, onSearch }) {
  const [value, setValue] = useState('')
  const { data, loading, error, run } = useApi(onSearch)

  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-4rem)] px-6 py-10 gap-6">
      <h1 className="text-2xl font-semibold text-white">{title}</h1>

      <div className="flex gap-4 items-center flex-col">
        <div className="flex items-center flex-col">
          <h2 className="text-xl font-semibold text-white">{label}</h2>
          <input
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={placeholder}
            className="bg-black text-white border border-white/50 rounded px-3 py-2 w-64"
          />
        </div>
        <button
          onClick={() => run(value)}
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

export function ImageLibrarySearch() {
  return (
    <TextField
      title="Image Library — Search"
      label="query"
      placeholder="ex: mars"
      onSearch={getImageLibrary}
    />
  )
}

export function ImageLibraryAsset() {
  return (
    <TextField
      title="Image Library — Asset"
      label="nasa_id"
      placeholder="ex: as11-40-5874"
      onSearch={getInsightAsset}
    />
  )
}

export function ImageLibraryMetadata() {
  return (
    <TextField
      title="Image Library — Metadata"
      label="nasa_id"
      placeholder="ex: as11-40-5874"
      onSearch={getInsightMetadata}
    />
  )
}

export function ImageLibraryCaptions() {
  return (
    <TextField
      title="Image Library — Captions"
      label="nasa_id"
      placeholder="ex: 172_ISS-Slosh"
      onSearch={getInsightCaption}
    />
  )
}
