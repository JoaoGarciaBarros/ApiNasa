import JsonBlock from "../../components/ui/JsonBlock"
import { useNavigate } from 'react-router-dom'

const sampleEONET = {

	"title": "EONET Web Service Layers",
	"description": "List of web service layers in the EONET system",
	"link": "https://eonet.gsfc.nasa.gov/api/v2.1/layers/8",
	"categories": [
		{
				"id": 8,
		"title": "Wildfires",
				"layers": [
			{
				"name": "AIRS_CO_Total_Column_Day",
				"serviceUrl": "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi",
				"serviceTypeId": "WMTS_1_0_0",
				"parameters": [
					{
					"TILEMATRIXSET": "2km",
					"FORMAT": "image/png"
			}
				]
				
			},
			{
				"name": "AIRS_CO_Total_Column_Night",
				"serviceUrl": "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi",
				"serviceTypeId": "WMTS_1_0_0",
				"parameters": [
					{
					"TILEMATRIXSET": "2km",
					"FORMAT": "image/png"
			}
				]
				
			},
			{
				"name": "AIRS_Dust_Score_Ocean_Day",
				"serviceUrl": "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi",
				"serviceTypeId": "WMTS_1_0_0",
				"parameters": [
					{
					"TILEMATRIXSET": "2km",
					"FORMAT": "image/png"
			}
				]
				
			},
			{
				"name": "AIRS_Dust_Score_Ocean_Night",
				"serviceUrl": "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi",
				"serviceTypeId": "WMTS_1_0_0",
				"parameters": [
					{
					"FORMAT": "image/png",
					"TILEMATRIXSET": "2km"
			}
				]
				
			},
			{
				"name": "AIRS_Precipitation_Day",
				"serviceUrl": "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi",
				"serviceTypeId": "WMTS_1_0_0",
				"parameters": [
					{
					"TILEMATRIXSET": "2km",
					"FORMAT": "image/png"
			}
				]
				
			},
			{
				"name": "AIRS_Precipitation_Night",
				"serviceUrl": "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi",
				"serviceTypeId": "WMTS_1_0_0",
				"parameters": [
					{
					"TILEMATRIXSET": "2km",
					"FORMAT": "image/png"
			}
				]
				
			},
			{
				"name": "MODIS_Aqua_Aerosol",
				"serviceUrl": "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi",
				"serviceTypeId": "WMTS_1_0_0",
				"parameters": [
					{
					"TILEMATRIXSET": "2km",
					"FORMAT": "image/png"
			}
				]
				
			},
			{
				"name": "MODIS_Aqua_CorrectedReflectance_Bands367",
				"serviceUrl": "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi",
				"serviceTypeId": "WMTS_1_0_0",
				"parameters": [
					{
					"TILEMATRIXSET": "250m",
					"FORMAT": "image/jpeg"
			}
				]
				
			},
			{
				"name": "MODIS_Aqua_CorrectedReflectance_TrueColor",
				"serviceUrl": "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi",
				"serviceTypeId": "WMTS_1_0_0",
				"parameters": [
					{
					"TILEMATRIXSET": "250m",
					"FORMAT": "image/jpeg"
			}
				]
				
			},
			{
				"name": "MODIS_Aqua_Data_No_Data",
				"serviceUrl": "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi",
				"serviceTypeId": "WMTS_1_0_0",
				"parameters": [
					{
					"TILEMATRIXSET": "250m",
					"FORMAT": "image/png"
			}
				]
				
			},
			{
				"name": "MODIS_Aqua_SurfaceReflectance_Bands721",
				"serviceUrl": "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi",
				"serviceTypeId": "WMTS_1_0_0",
				"parameters": [
					{
					"TILEMATRIXSET": "500m",
					"FORMAT": "image/jpeg"
			}
				]
				
			},
			{
				"name": "MODIS_Combined_Value_Added_AOD",
				"serviceUrl": "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi",
				"serviceTypeId": "WMTS_1_0_0",
				"parameters": [
					{
					"TILEMATRIXSET": "2km",
					"FORMAT": "image/png"
			}
				]
				
			},
			{
				"name": "MODIS_Fires_All",
				"serviceUrl": "https://map2.vis.earthdata.nasa.gov/wms/wms.php",
				"serviceTypeId": "WMS_1_1_1",
				"parameters": [
					{
					"FORMAT": "image/png"
			}
				]
				
			},
			{
				"name": "MODIS_Terra_Aerosol",
				"serviceUrl": "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi",
				"serviceTypeId": "WMTS_1_0_0",
				"parameters": [
					{
					"TILEMATRIXSET": "2km",
					"FORMAT": "image/png"
			}
				]
				
			},
			{
				"name": "MODIS_Terra_CorrectedReflectance_Bands367",
				"serviceUrl": "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi",
				"serviceTypeId": "WMTS_1_0_0",
				"parameters": [
					{
					"TILEMATRIXSET": "250m",
					"FORMAT": "image/jpeg"
			}
				]
				
			},
			{
				"name": "MODIS_Terra_CorrectedReflectance_Bands721",
				"serviceUrl": "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi",
				"serviceTypeId": "WMTS_1_0_0",
				"parameters": [
					{
					"TILEMATRIXSET": "250m",
					"FORMAT": "image/jpeg"
			}
				]
				
			},
			{
				"name": "MODIS_Terra_CorrectedReflectance_TrueColor",
				"serviceUrl": "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi",
				"serviceTypeId": "WMTS_1_0_0",
				"parameters": [
					{
					"TILEMATRIXSET": "250m",
					"FORMAT": "image/jpeg"
			}
				]
				
			},
			{
				"name": "MODIS_Terra_Data_No_Data",
				"serviceUrl": "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi",
				"serviceTypeId": "WMTS_1_0_0",
				"parameters": [
					{
					"TILEMATRIXSET": "250m",
					"FORMAT": "image/png"
			}
				]
				
			},
			{
				"name": "MODIS_Terra_SurfaceReflectance_Bands721",
				"serviceUrl": "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi",
				"serviceTypeId": "WMTS_1_0_0",
				"parameters": [
					{
					"TILEMATRIXSET": "500m",
					"FORMAT": "image/jpeg"
			}
				]
				
			},
			{
				"name": "OMI_SO2_Lower_Troposphere",
				"serviceUrl": "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi",
				"serviceTypeId": "WMTS_1_0_0",
				"parameters": [
					{
					"TILEMATRIXSET": "2km",
					"FORMAT": "image/png"
			}
				]
				
			},
			{
				"name": "OMI_SO2_Middle_Troposphere",
				"serviceUrl": "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi",
				"serviceTypeId": "WMTS_1_0_0",
				"parameters": [
					{
					"TILEMATRIXSET": "2km",
					"FORMAT": "image/png"
			}
				]
				
			},
			{
				"name": "OMI_SO2_Upper_Troposphere_and_Stratosphere",
				"serviceUrl": "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi",
				"serviceTypeId": "WMTS_1_0_0",
				"parameters": [
					{
					"TILEMATRIXSET": "2km",
					"FORMAT": "image/png"
			}
				]
				
			},
			{
				"name": "VIIRS_SNPP_CorrectedReflectance_BandsM11-I2-I1",
				"serviceUrl": "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi",
				"serviceTypeId": "WMTS_1_0_0",
				"parameters": [
					{
					"TILEMATRIXSET": "250m",
					"FORMAT": "image/jpeg"
			}
				]
				
			},
			{
				"name": "VIIRS_SNPP_CorrectedReflectance_BandsM3-I3-M11",
				"serviceUrl": "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi",
				"serviceTypeId": "WMTS_1_0_0",
				"parameters": [
					{
					"TILEMATRIXSET": "250m",
					"FORMAT": "image/jpeg"
			}
				]
				
			},
			{
				"name": "VIIRS_SNPP_CorrectedReflectance_TrueColor",
				"serviceUrl": "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi",
				"serviceTypeId": "WMTS_1_0_0",
				"parameters": [
					{
					"TILEMATRIXSET": "250m",
					"FORMAT": "image/jpeg"
			}
				]
				
			},
			{
				"name": "VIIRS_SNPP_Fires_375m_Day",
				"serviceUrl": "https://map2.vis.earthdata.nasa.gov/wms/wms.php",
				"serviceTypeId": "WMS_1_1_1",
				"parameters": [
					{
					"FORMAT": "image/jpeg"
			}
				]
				
			},
			{
				"name": "VIIRS_SNPP_Fires_375m_Night",
				"serviceUrl": "https://map2.vis.earthdata.nasa.gov/wms/wms.php",
				"serviceTypeId": "WMS_1_1_1",
				"parameters": [
					{
					"FORMAT": "image/jpeg"
			}
				]
				
			}
		]
		}
	]

}


export default function EONETPage() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-10">
      <h1 className="text-2xl font-semibold text-white mb-8 text-center">EONET — Earth Observatory Natural Event Tracker</h1>

      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1 rounded-xl object-cover border border-white/50">
          <JsonBlock data={sampleEONET} />
        </div>

        <div className="flex-1 flex flex-col">
          <p className="text-white/60 text-lg">A EONET foi criada para acompanhar eventos naturais em andamento ao redor do planeta usando dados de observação da Terra. O sistema reúne informações sobre incêndios florestais, erupções vulcânicas, tempestades, enchentes e outros fenômenos monitorados por satélites e organizações parceiras. Seu objetivo é centralizar dados dispersos e facilitar a visualização de eventos naturais quase em tempo real. A API é usada por pesquisadores, sistemas ambientais e projetos educativos ligados a monitoramento climático e desastres naturais.</p>
          <button onClick={() => navigate('/eonet/test')} className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar EONET
          </button>
        </div>
      </div>
    </div>
  )
}
