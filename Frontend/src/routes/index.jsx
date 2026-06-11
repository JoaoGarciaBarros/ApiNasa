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
import { AsteroidFeed, AsteroidLookup, AsteroidBrowse } from '../pages/Asteroids/test'
import { CNEOSCAD, CNEOSFireball, CNEOSMissionDesign, CNEOSNHATS, CNEOSScout, CNEOSSentry } from '../pages/CNEOS/test'
import { DONKICME, DONKICMEAnalysis, DONKIGST, DONKIIPS, DONKIFLR, DONKISEP, DONKIMPC, DONKIRBE, DONKIHSS, DONKIWSA, DONKINotification } from '../pages/DONKI/test'
import EONETTest from '../pages/EONET/test'
import EPICTest from '../pages/EPIC/test'
import ExoplanetTest from '../pages/Exoplanet/test'
import GIBSTest from '../pages/GIBS/test'
import { ImageLibrarySearch, ImageLibraryAsset, ImageLibraryMetadata, ImageLibraryCaptions } from '../pages/ImageLibrary/test'
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
        <Route path="/asteroids/feed" element={<AsteroidFeed />} />
        <Route path="/asteroids/lookup" element={<AsteroidLookup />} />
        <Route path="/asteroids/browse" element={<AsteroidBrowse />} />
        <Route path="/cneos/cad" element={<CNEOSCAD />} />
        <Route path="/cneos/fireball" element={<CNEOSFireball />} />
        <Route path="/cneos/mission-design" element={<CNEOSMissionDesign />} />
        <Route path="/cneos/nhats" element={<CNEOSNHATS />} />
        <Route path="/cneos/scout" element={<CNEOSScout />} />
        <Route path="/cneos/sentry" element={<CNEOSSentry />} />
        <Route path="/donki/cme" element={<DONKICME />} />
        <Route path="/donki/analysis" element={<DONKICMEAnalysis />} />
        <Route path="/donki/gst" element={<DONKIGST />} />
        <Route path="/donki/ips" element={<DONKIIPS />} />
        <Route path="/donki/flr" element={<DONKIFLR />} />
        <Route path="/donki/sep" element={<DONKISEP />} />
        <Route path="/donki/mpc" element={<DONKIMPC />} />
        <Route path="/donki/rbe" element={<DONKIRBE />} />
        <Route path="/donki/hss" element={<DONKIHSS />} />
        <Route path="/donki/wsa" element={<DONKIWSA />} />
        <Route path="/donki/notification" element={<DONKINotification />} />
        <Route path="/eonet/test" element={<EONETTest />} />
        <Route path="/epic/test" element={<EPICTest />} />
        <Route path="/exoplanet/test" element={<ExoplanetTest />} />
        <Route path="/gibs/test" element={<GIBSTest />} />
        <Route path="/image-library/search" element={<ImageLibrarySearch />} />
        <Route path="/image-library/asset" element={<ImageLibraryAsset />} />
        <Route path="/image-library/metadata" element={<ImageLibraryMetadata />} />
        <Route path="/image-library/captions" element={<ImageLibraryCaptions />} />
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
