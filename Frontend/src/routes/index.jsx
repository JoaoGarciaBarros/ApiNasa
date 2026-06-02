import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import APODPage from '../pages/APOD/index'
import AsteroidsPage from '../pages/Asteroids/index'
import CNEOSPage from '../pages/CNEOS/index'
import DONKIPage from '../pages/DONKI/index'
import EONETPage from '../pages/EONET/index'
import EPICPage from '../pages/EPIC/index'
import ExoplanetPage from '../pages/Exoplanet/index'
import GIBSPage from '../pages/GIBS/index'
import Home from '../pages/Home'
import ImageLibraryPage from '../pages/ImageLibrary/index'
import InsightPage from '../pages/insight/index'
import OSDRPage from '../pages/OpenScienceDataRepositor/index'
import SSCPage from '../pages/SatelliteSituationCenter/index'
import TechportPage from '../pages/Techport/index'
import TechTransferPage from '../pages/TechTransfer/index'
import TLEAPIPage from '../pages/TLEAPI/index'
import VestaPage from '../pages/Vesta/index'

import APODTest from '../pages/APOD/test'
import AsteroidsTest from '../pages/Asteroids/test'
import CNEOSTest from '../pages/CNEOS/test'
import DONKITest from '../pages/DONKI/test'
import EONETTest from '../pages/EONET/test'
import EPICTest from '../pages/EPIC/test'
import ExoplanetTest from '../pages/Exoplanet/test'
import GIBSTest from '../pages/GIBS/test'
import ImageLibraryTest from '../pages/ImageLibrary/test'
import InsightTest from '../pages/insight/test'
import OSDRTest from '../pages/OpenScienceDataRepositor/test'
import SSCTest from '../pages/SatelliteSituationCenter/test'
import TechportTest from '../pages/Techport/test'
import TechTransferTest from '../pages/TechTransfer/test'
import TLEAPITest from '../pages/TLEAPI/test'
import VestaTest from '../pages/Vesta/test'


export default function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/apod" element={<APODPage />} />
        <Route path="/asteroids" element={<AsteroidsPage />} />
        <Route path="/cneos" element={<CNEOSPage />} />
        <Route path="/donki" element={<DONKIPage />} />
        <Route path="/eonet" element={<EONETPage />} />
        <Route path="/epic" element={<EPICPage />} />
        <Route path="/exoplanet" element={<ExoplanetPage />} />
        <Route path="/gibs" element={<GIBSPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/image-library" element={<ImageLibraryPage />} />
        <Route path="/insight" element={<InsightPage />} />
        <Route path="/osdr" element={<OSDRPage />} />
        <Route path="/ssc" element={<SSCPage />} />
        <Route path="/techport" element={<TechportPage />} />
        <Route path="/tech-transfer" element={<TechTransferPage />} />
        <Route path="/tle-api" element={<TLEAPIPage />} />
        <Route path="/vesta" element={<VestaPage />} />

        <Route path="/apod/test" element={<APODTest />} />
        <Route path="/asteroids/test" element={<AsteroidsTest />} />
        <Route path="/cneos/test" element={<CNEOSTest />} />
        <Route path="/donki/test" element={<DONKITest />} />
        <Route path="/eonet/test" element={<EONETTest />} />
        <Route path="/epic/test" element={<EPICTest />} />
        <Route path="/exoplanet/test" element={<ExoplanetTest />} />
        <Route path="/gibs/test" element={<GIBSTest />} />
        <Route path="/image-library/test" element={<ImageLibraryTest />} />
        <Route path="/insight/test" element={<InsightTest />} />
        <Route path="/osdr/test" element={<OSDRTest />} />
        <Route path="/ssc/test" element={<SSCTest />} />
        <Route path="/techport/test" element={<TechportTest />} />
        <Route path="/tech-transfer/test" element={<TechTransferTest />} />
        <Route path="/tle-api/test" element={<TLEAPITest />} />
        <Route path="/vesta/test" element={<VestaTest />} />
      </Routes>
    </Layout>
  )
}
