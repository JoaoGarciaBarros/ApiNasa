import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import APODPage from '../pages/APOD'
import AsteroidsPage from '../pages/Asteroids'
import CNEOSPage from '../pages/CNEOS'
import DONKIpage from '../pages/DONKI'
import EONETPage from '../pages/EONET'
import EPICPage from '../pages/EPIC'
import ExoplanetPage from '../pages/Exoplanet'
import GIBSPage from '../pages/GIBS'
import Home from '../pages/Home'
import ImageLibraryPage from '../pages/ImageLibrary'
import InsightPage from '../pages/insight'
import OSDRpage from '../pages/OpenScienceDataRepositor'
// import SSCpage from '../pages/SatelliteSituationCenter'
import Techportpage from '../pages/Techport'
import TechTransferpage from '../pages/TechTransfer'
import TLEAPIPage from '../pages/TLEAPI'
// import VestaPage from '../pages/Vesta'


export default function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/apod" element={<APODPage />} />
        <Route path="/asteroids" element={<AsteroidsPage />} />
        <Route path="/cneos" element={<CNEOSPage />} />
        <Route path="/donki" element={<DONKIpage />} />
        <Route path="/eonet" element={<EONETPage />} />
        <Route path="/epic" element={<EPICPage />} />
        <Route path="/exoplanet" element={<ExoplanetPage />} />
        <Route path="/gibs" element={<GIBSPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/image-library" element={<ImageLibraryPage />} />
        <Route path="/insight" element={<InsightPage />} />
        <Route path="/osdr" element={<OSDRpage />} />
        {/* <Route path="/ssc" element={<SSCpage />} /> */}
        <Route path="/techport" element={<Techportpage />} />
        <Route path="/tech-transfer" element={<TechTransferpage />} />
        <Route path="/tle-api" element={<TLEAPIPage />} />
        {/* <Route path="/vesta" element={<VestaPage />} /> */}
      </Routes>
    </Layout>
  )
}
