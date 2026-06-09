import JsonBlock from '../../components/ui/JsonBlock'
import { useNavigate } from 'react-router-dom'

const sampleTLEAPI = {

  "@context": "https://www.w3.org/ns/hydra/context.jsonld",
  "@id": "https://tle.ivanstanojevic.me/api/tle/",
  "@type": "Tle[]",
  "totalItems": 24847,
  "member": [
    {
      "@id": "https://tle.ivanstanojevic.me/api/tle/25544",
      "@type": "Tle",
      "satelliteId": 25544,
      "name": "ISS (ZARYA)",
      "date": "2026-05-30T12:25:10+00:00",
      "line1": "1 25544U 98067A   26150.51748226  .00011870  00000+0  21933-3 0  9996",
      "line2": "2 25544  51.6337  27.5746 0007247 114.7056 245.4688 15.49496692569015"
    },
    {
      "@id": "https://tle.ivanstanojevic.me/api/tle/20580",
      "@type": "Tle",
      "satelliteId": 20580,
      "name": "HST",
      "date": "2026-05-30T12:56:28+00:00",
      "line1": "1 20580U 90037B   26150.53921556  .00006911  00000+0  21966-3 0  9997",
      "line2": "2 20580  28.4720 201.1735 0001466 321.2423  38.8067 15.30552064785860"
    },
    {
      "@id": "https://tle.ivanstanojevic.me/api/tle/48274",
      "@type": "Tle",
      "satelliteId": 48274,
      "name": "CSS (TIANHE)",
      "date": "2026-05-30T10:34:16+00:00",
      "line1": "1 48274U 21035A   26150.44047303  .00029586  00000+0  35725-3 0  9999",
      "line2": "2 48274  41.4693  69.9411 0010599 308.7458  51.2433 15.60022969290394"
    },
    {
      "@id": "https://tle.ivanstanojevic.me/api/tle/28654",
      "@type": "Tle",
      "satelliteId": 28654,
      "name": "NOAA 18",
      "date": "2026-04-15T04:52:44+00:00",
      "line1": "1 28654U 05018A   26105.20329213  .00000010  00000+0  28725-4 0  9993",
      "line2": "2 28654  98.8116 185.7911 0013664 333.9959  26.0526 14.13718092 77419"
    },
    {
      "@id": "https://tle.ivanstanojevic.me/api/tle/43013",
      "@type": "Tle",
      "satelliteId": 43013,
      "name": "NOAA 20 (JPSS-1)",
      "date": "2026-05-30T12:29:47+00:00",
      "line1": "1 43013U 17073A   26150.52069252  .00000077  00000+0  57395-4 0  9990",
      "line2": "2 43013  98.7769  90.1408 0000844  36.6985 323.4249 14.19508124441960"
    },
    {
      "@id": "https://tle.ivanstanojevic.me/api/tle/37849",
      "@type": "Tle",
      "satelliteId": 37849,
      "name": "SUOMI NPP",
      "date": "2026-05-30T12:10:51+00:00",
      "line1": "1 37849U 11061A   26150.50754617  .00000090  00000+0  63625-4 0  9993",
      "line2": "2 37849  98.7950  91.5051 0002406  43.4716 316.6649 14.19513295755933"
    },
    {
      "@id": "https://tle.ivanstanojevic.me/api/tle/41866",
      "@type": "Tle",
      "satelliteId": 41866,
      "name": "GOES 16",
      "date": "2026-05-30T11:34:40+00:00",
      "line1": "1 41866U 16071A   26150.48241132 -.00000079  00000+0  00000+0 0  9994",
      "line2": "2 41866   0.2962  85.7098 0000787 307.5277 283.7826  1.00271227 34922"
    },
    {
      "@id": "https://tle.ivanstanojevic.me/api/tle/54234",
      "@type": "Tle",
      "satelliteId": 54234,
      "name": "NOAA 21 (JPSS-2)",
      "date": "2026-05-30T11:36:36+00:00",
      "line1": "1 54234U 22150A   26150.48375503  .00000069  00000+0  53522-4 0  9992",
      "line2": "2 54234  98.7057  89.5707 0000668 211.2364 148.8773 14.19561868184034"
    },
    {
      "@id": "https://tle.ivanstanojevic.me/api/tle/51850",
      "@type": "Tle",
      "satelliteId": 51850,
      "name": "GOES 18",
      "date": "2026-05-30T11:25:26+00:00",
      "line1": "1 51850U 22021A   26150.47599794  .00000109  00000+0  00000+0 0  9992",
      "line2": "2 51850   0.0416 128.9793 0000726 340.7911 172.5829  1.00273408  6411"
    },
    {
      "@id": "https://tle.ivanstanojevic.me/api/tle/53239",
      "@type": "Tle",
      "satelliteId": 53239,
      "name": "CSS (WENTIAN)",
      "date": "2026-05-29T22:16:47+00:00",
      "line1": "1 53239U 22085A   26149.92832235  .00026428  00000+0  32007-3 0  9991",
      "line2": "2 53239  41.4693  73.0539 0010653 305.7656  54.2192 15.59989407288238"
    },
    {
      "@id": "https://tle.ivanstanojevic.me/api/tle/35491",
      "@type": "Tle",
      "satelliteId": 35491,
      "name": "GOES 14",
      "date": "2026-05-30T12:47:28+00:00",
      "line1": "1 35491U 09033A   26150.53297041 -.00000203  00000+0  00000+0 0  9996",
      "line2": "2 35491   1.6460  83.2480 0002153 353.3092 155.2121  1.00116748  6418"
    },
    {
      "@id": "https://tle.ivanstanojevic.me/api/tle/55268",
      "@type": "Tle",
      "satelliteId": 55268,
      "name": "NAVSTAR 82 (USA 343)",
      "date": "2026-05-30T03:37:52+00:00",
      "line1": "1 55268U 23009A   26150.15130505  .00000065  00000+0  00000+0 0  9993",
      "line2": "2 55268  55.1206 149.2275 0006197 315.7356 147.5619  2.00572873 24889"
    },
    {
      "@id": "https://tle.ivanstanojevic.me/api/tle/29486",
      "@type": "Tle",
      "satelliteId": 29486,
      "name": "NAVSTAR 58 (USA 190)",
      "date": "2026-05-30T03:19:20+00:00",
      "line1": "1 29486U 06042A   26150.13843095  .00000068  00000+0  00000+0 0  9990",
      "line2": "2 29486  54.7083 152.0554 0106254  54.0213  13.4284  2.00570995144034"
    },
    {
      "@id": "https://tle.ivanstanojevic.me/api/tle/46826",
      "@type": "Tle",
      "satelliteId": 46826,
      "name": "GPS BIII-4",
      "date": "2026-05-30T07:46:09+00:00",
      "line1": "1 46826U 20078A   26150.32371610  .00000051  00000+0  00000+0 0  9994",
      "line2": "2 46826  53.9818 211.5031 0072700 206.7757 156.8807  2.00565059 41153"
    },
    {
      "@id": "https://tle.ivanstanojevic.me/api/tle/41328",
      "@type": "Tle",
      "satelliteId": 41328,
      "name": "GPS BIIF-12",
      "date": "2026-05-29T22:04:07+00:00",
      "line1": "1 41328U 16007A   26149.91953111 -.00000043  00000+0  00000+0 0  9990",
      "line2": "2 41328  55.5134  90.1836 0096193 247.3319 111.6144  2.00552740 75473"
    },
    {
      "@id": "https://tle.ivanstanojevic.me/api/tle/44506",
      "@type": "Tle",
      "satelliteId": 44506,
      "name": "GPS BIII-2",
      "date": "2026-05-30T10:52:29+00:00",
      "line1": "1 44506U 19056A   26150.45311656 -.00000092  00000+0  00000+0 0  9995",
      "line2": "2 44506  55.6421 331.8469 0061060 197.3272 344.8655  2.00569866 49710"
    },
    {
      "@id": "https://tle.ivanstanojevic.me/api/tle/39533",
      "@type": "Tle",
      "satelliteId": 39533,
      "name": "GPS BIIF-5",
      "date": "2026-05-30T05:39:28+00:00",
      "line1": "1 39533U 14008A   26150.23574576  .00000063  00000+0  00000+0 0  9996",
      "line2": "2 39533  53.6516 150.0518 0084195 230.9621 128.3004  2.00558720 89320"
    },
    {
      "@id": "https://tle.ivanstanojevic.me/api/tle/40730",
      "@type": "Tle",
      "satelliteId": 40730,
      "name": "GPS BIIF-10",
      "date": "2026-05-30T06:31:05+00:00",
      "line1": "1 40730U 15033A   26150.27159561 -.00000050  00000+0  00000+0 0  9990",
      "line2": "2 40730  53.9967 267.8251 0115038  30.1505 330.5022  2.00557227 79638"
    },
    {
      "@id": "https://tle.ivanstanojevic.me/api/tle/41175",
      "@type": "Tle",
      "satelliteId": 41175,
      "name": "GSAT0208 (GALILEO 11)",
      "date": "2026-05-28T07:33:44+00:00",
      "line1": "1 41175U 15079B   26148.31510057 -.00000005  00000+0  00000+0 0  9997",
      "line2": "2 41175  55.8147 101.8035 0004914 339.3027  20.6239  1.70473787 64852"
    },
    {
      "@id": "https://tle.ivanstanojevic.me/api/tle/52940",
      "@type": "Tle",
      "satelliteId": 52940,
      "name": "WFOV (USA 332)",
      "date": "2026-05-30T07:30:28+00:00",
      "line1": "1 52940U 22073A   26150.31283198 -.00000352  00000+0  00000+0 0  9992",
      "line2": "2 52940   3.6665  78.7537 0002068 250.9853 149.9722  1.00272374 14198"
    }
  ],
  "parameters": {
    "search": "*",
    "sort": "popularity",
    "sort-dir": "desc",
    "page": 1,
    "page-size": 20
  },
  "view": {
    "@id": "https://tle.ivanstanojevic.me/api/tle/?page=1",
    "@type": "PartialCollectionView",
    "first": "https://tle.ivanstanojevic.me/api/tle/?page=1",
    "next": "https://tle.ivanstanojevic.me/api/tle/?page=2",
    "last": "https://tle.ivanstanojevic.me/api/tle/?page=1243"
  }

}


export default function TLEAPIPage() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-10">
      <h1 className="text-2xl font-semibold text-white mb-8 text-center">TLE API — Two Line Element</h1>

      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1 rounded-xl object-cover border border-white/50">
          <JsonBlock data={sampleTLEAPI} />
        </div>

        <div className="flex-1 flex flex-col">
          <p className="text-white/60 text-lg">A TLE API fornece acesso a dados Two-Line Element, um formato utilizado para representar órbitas de satélites artificiais. Esses dados permitem calcular posição e trajetória orbital de objetos em torno da Terra. O serviço existe porque rastrear satélites é essencial para observação espacial, telecomunicações e análise orbital. A API simplifica o acesso a essas informações, sendo muito usada em simuladores, rastreadores e softwares astronômicos.</p>
          <button onClick={() => navigate('/tle-api/test')} className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar TLE API
          </button>
        </div>
      </div>
    </div>
  )
}
