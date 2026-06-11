import { useState } from 'react'
import DatePicker from '../../components/ui/DatePicker'
import { getApod } from '../../services/nasaClient'

export default function APODTest() {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleFetch() {
    setLoading(true)
    setError(null)
    try {
      const result = await getApod(date)
      setData(result)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-4rem)] px-6 py-10 gap-6">
      <h1 className="text-2xl font-semibold text-white">APOD</h1>
      
      <div className="flex gap-4 items-center flex-col">
        <div className="flex gap-4 items-center">
          <div className="flex items-center flex-col">
            <h2 className="text-xl font-semibold text-white">date</h2>
          <DatePicker value={date} onChange={setDate} />
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

      {data && (
        <div className="w-full max-w-3xl flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-white">{data.title}</h2>
          <p className="text-white/50 text-sm">
            {data.date}{data.copyright ? ` — © ${data.copyright}` : ''}
          </p>
          {data.media_type === 'image' ? (
            <img
              src={data.url}
              alt={data.title}
              className="w-full rounded-xl border border-white/30"
            />
          ) : (
            <iframe
              src={data.url}
              className="w-full aspect-video rounded-xl border border-white/30"
              allowFullScreen
            />
          )}
          <p className="text-white/70 leading-relaxed">{data.explanation}</p>
        </div>
      )}
    </div>
  )
}
