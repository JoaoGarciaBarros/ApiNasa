import { useState } from 'react'
import JsonBlock from '../../components/ui/JsonBlock'
import { getTechTransfer } from '../../services/nasaClient'

export default function TechtransferTest() {
  const [field, setField] = useState('patent')
  const [query, setQuery] = useState('')
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleFetch() {
    setLoading(true)
    setError(null)
    try {
      setData(await getTechTransfer(field, query))
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-4rem)] px-6 py-10 gap-6">
      <h1 className="text-2xl font-semibold text-white">TechTransfer</h1>

      <div className="flex gap-4 items-center flex-col">
        <div className="flex gap-4 items-center">
          <div className="flex items-center flex-col">
            <h2 className="text-xl font-semibold text-white">categoria</h2>
            <select
              value={field}
              onChange={e => setField(e.target.value)}
              className="bg-black text-white border border-white/50 rounded px-3 py-2"
            >
              <option value="patent">patent</option>
              <option value="software">software</option>
              <option value="spinoff">spinoff</option>
            </select>
          </div>
          <div className="flex items-center flex-col">
            <h2 className="text-xl font-semibold text-white">query</h2>
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="ex: engine"
              className="bg-black text-white border border-white/50 rounded px-3 py-2 w-64"
            />
          </div>
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
