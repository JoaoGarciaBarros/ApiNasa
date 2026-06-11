import { useEffect, useRef, useState } from 'react'

const WEEKDAYS = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const MONTHS = [
  'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
  'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro',
]

function toDateValue(str) {
  if (!str) return null
  const [y, m, d] = str.split('-').map(Number)
  return new Date(y, m - 1, d)
}

function toISO(date) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

function toBR(date) {
  if (!date) return ''
  const d = String(date.getDate()).padStart(2, '0')
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const y = date.getFullYear()
  return `${d}/${m}/${y}`
}

export default function DatePicker({ value, onChange, className = '' }) {
  const [open, setOpen] = useState(false)
  const selected = toDateValue(value)
  const [viewDate, setViewDate] = useState(selected || new Date())
  const ref = useRef(null)

  useEffect(() => {
    if (selected) setViewDate(selected)
  }, [value])

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const year = viewDate.getFullYear()
  const month = viewDate.getMonth()

  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const daysInPrevMonth = new Date(year, month, 0).getDate()

  const cells = []
  for (let i = firstDay - 1; i >= 0; i--) {
    cells.push({ day: daysInPrevMonth - i, current: false, date: new Date(year, month - 1, daysInPrevMonth - i) })
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, current: true, date: new Date(year, month, d) })
  }
  while (cells.length % 7 !== 0) {
    const next = cells.length - (firstDay + daysInMonth) + 1
    cells.push({ day: next, current: false, date: new Date(year, month + 1, next) })
  }

  function isSameDay(a, b) {
    return a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
  }

  function pick(date) {
    onChange(toISO(date))
    setOpen(false)
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className={`flex items-center justify-between gap-3 bg-black text-white border border-white/50 rounded px-3 py-2 cursor-pointer hover:border-white focus:outline-none focus:ring-1 focus:ring-white/50 transition-colors ${className}`}
      >
        <span>{toBR(selected) || 'dd/mm/aaaa'}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      </button>

      {open && (
        <div className="absolute z-50 mt-2 w-64 bg-black border border-white rounded-lg p-3 shadow-lg text-white">
          <div className="flex items-center justify-between mb-2">
            <button
              type="button"
              onClick={() => setViewDate(new Date(year, month - 1, 1))}
              className="px-2 py-1 border border-white/50 rounded hover:bg-white/10 transition-colors"
            >
              ‹
            </button>
            <span className="font-semibold">{MONTHS[month]} de {year}</span>
            <button
              type="button"
              onClick={() => setViewDate(new Date(year, month + 1, 1))}
              className="px-2 py-1 border border-white/50 rounded hover:bg-white/10 transition-colors"
            >
              ›
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-sm mb-1">
            {WEEKDAYS.map((w, i) => (
              <div key={i} className="text-white/50">{w}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            {cells.map((c, i) => {
              const isSelected = isSameDay(c.date, selected)
              const isToday = isSameDay(c.date, new Date())
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => pick(c.date)}
                  className={[
                    'rounded py-1 transition-colors border border-transparent',
                    isSelected
                      ? 'bg-white text-black font-bold'
                      : (c.current ? 'text-white hover:border-white/50' : 'text-white/30 hover:border-white/50'),
                    isToday && !isSelected ? 'border-white/50' : '',
                  ].join(' ')}
                >
                  {c.day}
                </button>
              )
            })}
          </div>

          <div className="flex justify-between mt-3 text-sm">
            <button type="button" onClick={() => onChange('')} className="text-white/60 hover:text-white transition-colors">
              Limpar
            </button>
            <button type="button" onClick={() => pick(new Date())} className="text-white/60 hover:text-white transition-colors">
              Hoje
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
