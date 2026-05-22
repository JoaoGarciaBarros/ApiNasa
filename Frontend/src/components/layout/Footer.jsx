import { Satellite } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10 mt-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-white font-semibold mb-1.5">
              <Satellite size={16} className="text-sky-400" />
              NASA Explorer
            </div>
            <p className="text-white/40 text-sm">
              Projeto acadêmico — portal visual para APIs públicas da NASA.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-white/35">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              Frontend ativo
            </span>
            <span className="text-white/15">·</span>
            <span>React + Vite + Tailwind</span>
            <span className="text-white/15">·</span>
            <span>FastAPI em breve</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] text-white/20 text-xs">
          Interface inicial — sem backend ou consumo real de APIs.
        </div>
      </div>
    </footer>
  )
}
