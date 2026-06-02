import { useLocation, useNavigate } from 'react-router-dom';

const apiRoutes = [
  '/apod', 
  '/asteroids', 
  '/donki', 
  '/eonet', 
  '/epic',
  '/exoplanet', 
  '/gibs', 
  '/insight', 
  '/image-library', 
  '/osdr',
  '/ssc', 
  '/cneos', 
  '/techport', 
  '/tech-transfer', 
  '/tle-api', 
  '/vesta',
]

export default function ApiNavigation() {
  const location = useLocation();
  const navigate = useNavigate();

  const baseRoute = '/' + location.pathname.split('/')[1];
  const currentIndex = apiRoutes.indexOf(baseRoute);

  if (currentIndex === -1) return null;

  const prevRoute = apiRoutes[(currentIndex - 1 + apiRoutes.length) % apiRoutes.length];
  const nextRoute = apiRoutes[(currentIndex + 1) % apiRoutes.length];
  const isSubRoute = location.pathname !== baseRoute;

  return (
    <div className="fixed top-16 left-0 right-0 z-40 flex justify-between items-center px-12 py-3 border-b border-white/10 bg-black-to-transparent backdrop-blur-2xl">
      <button
        onClick={() => navigate(prevRoute)}
        className="text-white/60 hover:text-white transition"
      >
        {"<"} API anterior
      </button>

      {isSubRoute && (
        <button
          onClick={() => navigate(baseRoute)}
          className="text-white/60 hover:text-white transition"
        >
          {"^"} Voltar para explicação {"^"} 
        </button>
      )}

      <button
        onClick={() => navigate(nextRoute)}
        className="text-white/60 hover:text-white transition"
      >
        Próxima API {">"}
      </button>
    </div>
  )
}
