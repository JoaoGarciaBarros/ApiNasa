import { useState } from 'react'
import DatePicker from '../../components/ui/DatePicker'
import JsonBlock from '../../components/ui/JsonBlock'
import {
  getDonkiCme,
  getDonkiAnalysis,
  getDonkiGst,
  getDonkiIps,
  getDonkiFlr,
  getDonkiSep,
  getDonkiMpc,
  getDonkiRbe,
  getDonkiHss,
  getDonkiWsaEnlil,
  getDonkiNotification,
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

export function DONKICME() {
  return <DateField title="DONKI — CME" onSearch={getDonkiCme} />
}

export function DONKICMEAnalysis() {
  return <DateField title="DONKI — CME Analysis" onSearch={getDonkiAnalysis} />
}

export function DONKIGST() {
  return <DateField title="DONKI — GST" onSearch={getDonkiGst} />
}

export function DONKIIPS() {
  return <DateField title="DONKI — IPS" onSearch={getDonkiIps} />
}

export function DONKILFR() {
  return <DateField title="DONKI — FLR" onSearch={getDonkiFlr} />
}

export function DONKISEP() {
  return <DateField title="DONKI — SEP" onSearch={getDonkiSep} />
}

export function DONKIMPC() {
  return <DateField title="DONKI — MPC" onSearch={getDonkiMpc} />
}

export function DONKIRBE() {
  return <DateField title="DONKI — RBE" onSearch={getDonkiRbe} />
}

export function DONKIHSS() {
  return <DateField title="DONKI — HSS" onSearch={getDonkiHss} />
}

export function DONKIWSA() {
  return <DateField title="DONKI — WSA + Enlil" onSearch={getDonkiWsaEnlil} />
}

export function DONKINotification() {
  return <DateField title="DONKI — Notifications" onSearch={getDonkiNotification} />
}
