import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, House, Telescope, Orbit, Sun, Globe, Earth, Atom, Satellite, Thermometer, Images, Database, Radar, Cpu, FlaskConical, SatelliteDish,} from 'lucide-react'

import nasaimg from '../../assets/nasa.png'

const links = [
  { to: '/', label: 'Home', end: true, icon: House },
  { to: '/apod', label: 'APOD', icon: Telescope },
  { to: '/asteroids', label: 'Asteroids', icon: Orbit  },
  { to: '/donki', label: 'DONKI', icon: Sun },
  // { to: '/eonet', label: 'EONET', icon: Globe },
  { to: '/epic', label: 'EPIC', icon: Earth },
  { to: '/exoplanet', label: 'Exoplanet', icon: Atom },
  { to: '/gibs', label: 'GIBS', icon: Satellite },
  { to: '/insight', label: 'Insight', icon: Thermometer },
  { to: '/image-library', label: 'Image Library', icon: Images },
  { to: '/osdr', label: 'OSDR', icon: Database },
  // { to: '/ssc', label: 'SSC', icon: Satellite },
  { to: '/cneos', label: 'CNEOS', icon: Radar },
  { to: '/techport', label: 'Techport', icon: Cpu },
  { to: '/tech-transfer', label: 'Tech Transfer', icon: FlaskConical },
  { to: '/tle-api', label: 'TLE API', icon: SatelliteDish },
  // { to: '/vesta', label: 'Vesta', icon: Rocket },
]

function NavItem({ to, label, end, icon: Icon, onClick }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        `relative flex items-center gap-2 pl-4 pr-3 py-1.5 rounded-r-lg text-sm transition-colors duration-200 ${
          isActive
            ? 'text-white bg-white/[0.08] font-medium'
            : 'text-white/60 hover:text-white hover:bg-white/[0.05]'
        }`
      }
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <span className="absolute left-0 top-1 bottom-1 w-[2px] bg-white/70 rounded-full" />
          )}
          {Icon && <Icon size={16} />}
          <span>{label}</span>
        </>
      )}
    </NavLink>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-black-to-transparent backdrop-blur-2xl border-b border-white/[0.1]">
        <div className="mx-auto max-w-6xl px-4">
          <div className="h-16 flex items-center justify-between gap-8">
            <NavLink
              to="/"
              className="inline-flex items-center gap-2.5 font-semibold text-white hover:text-sky-400 transition-colors duration-200 shrink-0"
            >
              <img src={nasaimg} alt="NASA" className="w-12 h-12" />
              <span>Explorer</span>
            </NavLink>

            {/* Menu toggle */}
            <button
              type="button"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center rounded-xl border border-white/10 p-2 text-white/60 hover:text-white hover:bg-white/[0.06] transition duration-200"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Menu */}
        {open && (
          <div className="absolute right-4 top-[4.25rem] w-56 bg-black/95 border border-white/[0.08] rounded-xl px-2 py-2 space-y-0.5 shadow-xl">
            {links.map((link) => (
              <NavItem key={link.to} {...link} onClick={() => setOpen(false)} />
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
