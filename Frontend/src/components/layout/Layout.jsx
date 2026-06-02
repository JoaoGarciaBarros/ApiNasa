import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import ApiNavigation from './ApiNavigation'
import StarsBackground from '../ui/StarsBackground'

const apiRoutes = [
  '/apod', '/asteroids', '/cneos', '/donki', '/eonet', '/epic',
  '/exoplanet', '/gibs', '/image-library', '/insight', '/osdr',
  '/ssc', '/techport', '/tech-transfer', '/tle-api', '/vesta',
]

export default function Layout({ children }) {
  const location = useLocation()
  const baseRoute = '/' + location.pathname.split('/')[1]
  const isApiRoute = apiRoutes.includes(baseRoute)

  return (
    <>
      <StarsBackground />
      <div className="relative z-10 min-h-screen text-white">
        <Navbar />
        <ApiNavigation />
        <main className={isApiRoute ? 'pt-28' : 'pt-16'}>
          {children}
        </main>
      </div>
    </>
  )
}
