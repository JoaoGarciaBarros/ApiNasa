import JsonBlock from '../../components/ui/JsonBlock'

const sampleData = {
  "id": "2303449",
  "neo_reference_id": "2303449",
  "name": "303449 (2005 BE2)",
  "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2303449",
  "absolute_magnitude_h": 18.27,
  "estimated_diameter": {
    "kilometers": {
      "estimated_diameter_min": 0.5895966084,
      "estimated_diameter_max": 1.3183780956
    },
    "meters": {
      "estimated_diameter_min": 589.5966083829,
      "estimated_diameter_max": 1318.3780956475
    },
    "miles": {
      "estimated_diameter_min": 0.3663582341,
      "estimated_diameter_max": 0.8192019157
    },
    "feet": {
      "estimated_diameter_min": 1934.3721366469,
      "estimated_diameter_max": 4325.3875913241
    }
  },
  "is_potentially_hazardous_asteroid": false,
  "close_approach_data": [
    {
      "close_approach_date": "2005-08-18",
      "close_approach_date_full": "2005-Aug-18 21:10",
      "epoch_date_close_approach": 1124399400000,
      "relative_velocity": {
        "kilometers_per_second": "17.7115820285",
        "kilometers_per_hour": "63761.6953026043",
        "miles_per_hour": "39619.0378395543"
      },
      "miss_distance": {
        "astronomical": "0.0995807323",
        "lunar": "38.7369048647",
        "kilometers": "14897065.445120201",
        "miles": "9256607.2330167338"
      },
      "orbiting_body": "Earth"
    }
  ],
  "is_sentry_object": false
}

export default function AsteroidsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-10">
      <h1 className="text-2xl font-semibold text-white mb-8 text-center">Asteroids NeoWs — Near Earth Object Web Service</h1>

      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1 rounded-xl object-cover border border-white/50">
          <JsonBlock data={sampleData} />
        </div>

        <div className="flex-1">
          <p className="text-white/40 text-lg">Disponibiliza informações sobre objetos próximos da Terra (NEOs), incluindo asteroides e cometas monitorados pela NASA. Os dados incluem tamanho estimado, velocidade, distância de aproximação e classificação de risco potencial.</p>
        </div>
      </div>
    </div>
  )
}
