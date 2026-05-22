import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, House, Telescope, Rocket, Orbit, Earth, Cloudy, LibraryBig, Camera } from 'lucide-react'

import nasaimg from '../../assets/nasa.png'

const links = [
  { to: '/', label: 'Home', end: true, icon: House },
  { to: '/apod', label: 'APOD', icon: Telescope },
  { to: '/insight', label: 'Insight', icon: Rocket },
  { to: '/image-library', label: 'Image Library', icon: LibraryBig },
  { to: '/asteroids', label: 'Asteroids', icon: Orbit  },
  { to: '/gibs', label: 'GIBS', icon: Earth },
  { to: '/epic', label: 'EPIC', icon: Camera },
  { to: '/donki', label: 'DONKI', icon: Cloudy },
]

function NavItem({ to, label, end, icon: Icon, onClick }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        `px-3 py-1.5 rounded-lg text-sm transition-colors duration-200 ${
          isActive
            ? 'text-white bg-white/[0.08] font-medium'
            : 'text-white/60 hover:text-white hover:bg-white/[0.05]'
        }`
      }
    >
      <div className="flex items-center gap-2">
        {Icon && <Icon size={16} />}
        <span>{label}</span>
      </div>
    </NavLink>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-black/80 backdrop-blur-md border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-4">
          <div className="h-16 flex items-center justify-between gap-8">
            <NavLink
              to="/"
              className="inline-flex items-center gap-2.5 font-semibold text-white hover:text-sky-400 transition-colors duration-200 shrink-0"
            >
              <img src={nasaimg} alt="NASA" className="w-12 h-12" />
              <span>Explorer</span>
            </NavLink>

            {/* Desktop nav */}
            <nav className="hidden sm:flex items-center gap-1">
              {links.map((link) => (
                <NavItem key={link.to} {...link} />
              ))}
            </nav>

            {/* Mobile toggle */}
            <button
              type="button"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              onClick={() => setOpen(!open)}
              className="sm:hidden inline-flex items-center justify-center rounded-xl border border-white/10 p-2 text-white/60 hover:text-white hover:bg-white/[0.06] transition duration-200"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="sm:hidden border-t border-white/[0.06] bg-black/90 px-4 py-3 space-y-1">
            {links.map((link) => (
              <NavItem key={link.to} {...link} onClick={() => setOpen(false)} />
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
