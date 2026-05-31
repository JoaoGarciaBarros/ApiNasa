import { Link } from 'react-router-dom'
import {
  Telescope, Orbit, Sun, Globe, Earth, Atom,
  Satellite, Thermometer, Images, Database,
  Radar, Cpu, FlaskConical, SatelliteDish, Rocket, Map
} from 'lucide-react'

const apis = [
  {
    to: '/apod',
    icon: Telescope,
    name: 'APOD',
    full: 'Astronomy Picture of the Day',
    description: 'Uma imagem ou vídeo do espaço todo dia, com explicação científica.',
  },
  {
    to: '/asteroids',
    icon: Orbit,
    name: 'Asteroids NeoWs',
    full: 'Near Earth Object Web Service',
    description: 'Asteroides próximos da Terra — órbita, tamanho e risco potencial.',
  },
  {
    to: '/donki',
    icon: Sun,
    name: 'DONKI',
    full: 'Space Weather Database',
    description: 'Clima espacial: flares, ejeções coronais, tempestades geomagnéticas.',
  },
  {
    to: '/eonet',
    icon: Globe,
    name: 'EONET',
    full: 'Earth Observatory Natural Event Tracker',
    description: 'Eventos naturais em tempo quase real — incêndios, vulcões, tempestades.',
  },
  {
    to: '/epic',
    icon: Earth,
    name: 'EPIC',
    full: 'Earth Polychromatic Imaging Camera',
    description: 'Imagens completas da Terra do ponto L1, entre a Terra e o Sol.',
  },
  {
    to: '/exoplanet',
    icon: Atom,
    name: 'Exoplanet Archive',
    full: 'NASA Exoplanet Archive',
    description: 'Banco de dados de planetas fora do Sistema Solar.',
  },
  {
    to: '/gibs',
    icon: Satellite,
    name: 'GIBS',
    full: 'Global Imagery Browse Services',
    description: 'Imagens globais de satélite prontas para visualização.',
  },
  {
    to: '/insight',
    icon: Thermometer,
    name: 'InSight',
    full: 'Mars Weather Service API',
    description: 'Dados meteorológicos coletados pela missão InSight em Marte.',
  },
  {
    to: '/image-library',
    icon: Images,
    name: 'Image & Video Library',
    full: 'NASA Image and Video Library',
    description: 'Biblioteca oficial com décadas de fotos, vídeos e áudios da NASA.',
  },
  {
    to: '/osdr',
    icon: Database,
    name: 'Open Science Data Repository',
    full: 'NASA OSDR',
    description: 'Datasets científicos abertos produzidos ou financiados pela NASA.',
  },
  {
    to: '/ssc',
    icon: Satellite,
    name: 'Satellite Situation Center',
    full: 'SSC',
    description: 'Localização e contexto orbital de satélites científicos.',
  },
  {
    to: '/cneos',
    icon: Radar,
    name: 'SSD / CNEOS',
    full: 'Center for Near-Earth Object Studies',
    description: 'Dinâmica orbital, aproximações e defesa planetária.',
  },
  {
    to: '/techport',
    icon: Cpu,
    name: 'Techport',
    full: 'NASA Technology Portfolio',
    description: 'Catálogo de projetos tecnológicos financiados pela NASA.',
  },
  {
    to: '/tech-transfer',
    icon: FlaskConical,
    name: 'TechTransfer',
    full: 'NASA Technology Transfer',
    description: 'Patentes e tecnologias da NASA disponíveis para o setor comercial.',
  },
  {
    to: '/tle-api',
    icon: SatelliteDish,
    name: 'TLE API',
    full: 'Two-Line Element API',
    description: 'Dados orbitais de satélites no formato Two-Line Element.',
  },
  {
    to: '/vesta',
    icon: Rocket,
    name: 'NASA Trek',
    full: 'Planetary Cartography Platform',
    description: 'Mapas interativos de superfícies planetárias — Lua, Marte e outros.',
  },
]

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] px-6 py-16 max-w-6xl mx-auto">

      {/* Hero */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-semibold text-white mb-4 tracking-tight">
          NASA Explorer
        </h1>
        <p className="text-white/40 text-lg max-w-xl mx-auto">
          Acesso direto às APIs públicas da NASA. Explore dados espaciais, imagens, clima espacial e muito mais.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {apis.map(({ to, icon: Icon, name, full, description }) => (
          <Link
            key={to}
            to={to}
            className="group flex flex-col gap-3 p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white/[0.06] text-white/70 group-hover:text-white transition-colors duration-200">
                <Icon size={18} />
              </div>
              <span className="text-white font-medium text-sm leading-tight">{name}</span>
            </div>
            <p className="text-white/35 text-xs leading-relaxed group-hover:text-white/50 transition-colors duration-200">
              {description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
