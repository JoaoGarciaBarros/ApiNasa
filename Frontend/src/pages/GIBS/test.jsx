import { useState } from 'react'
import { getGibsTileUrl } from '../../services/nasaClient'

export default function GIBSTest() {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const [url, setUrl] = useState(null)

  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-4rem)] px-6 py-10 gap-6">
      <h1 className="text-2xl font-semibold text-white">GIBS</h1>

      <div className="flex gap-4 items-center flex-col">
        <div className="flex items-center flex-col">
          <h2 className="text-xl font-semibold text-white">date</h2>
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            className="bg-black text-white border border-white/50 rounded px-3 py-2"
          />
        </div>
        <button
          onClick={() => setUrl(getGibsTileUrl(date))}
          className="bg-black text-white font-bold py-2 px-4 rounded border border-white/50 hover:bg-white/10 transition-colors duration-100"
        >
          Buscar
        </button>
      </div>

      {url && (
        <img
          src={url}
          alt="GIBS"
          className="w-full max-w-2xl rounded-xl border border-white/30"
        />
      )}
    </div>
  )
}
