import JsonBlock from '../../components/ui/JsonBlock'

const sampleDataFeed = {
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

const sampleDataLookup = {
  "id": "3542519",
  "neo_reference_id": "3542519",
  "name": "(2010 PK9)",
  "designation": "2010 PK9",
  "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3542519",
  "absolute_magnitude_h": 21.81,
  "estimated_diameter": {
    "kilometers": {
      "estimated_diameter_min": 0.1154928176,
      "estimated_diameter_max": 0.258249791
    },
    "meters": {
      "estimated_diameter_min": 115.4928175848,
      "estimated_diameter_max": 258.2497910326
    },
    "miles": {
      "estimated_diameter_min": 0.0717638876,
      "estimated_diameter_max": 0.1604689309
    },
    "feet": {
      "estimated_diameter_min": 378.9134556449,
      "estimated_diameter_max": 847.2762444114
    }
  },
  "is_potentially_hazardous_asteroid": true,
  "close_approach_data": [
    {
      "close_approach_date": "1900-06-01",
      "close_approach_date_full": "1900-Jun-01 16:40",
      "epoch_date_close_approach": -2195882400000,
      "relative_velocity": {
        "kilometers_per_second": "30.9354328365",
        "kilometers_per_hour": "111367.5582113129",
        "miles_per_hour": "69199.4697119127"
      },
      "miss_distance": {
        "astronomical": "0.0445495565",
        "lunar": "17.3297774785",
        "kilometers": "6664518.761844655",
        "miles": "4141139.931400039"
      },
      "orbiting_body": "Merc"
    },
    {
      "close_approach_date": "1900-07-07",
      "close_approach_date_full": "1900-Jul-07 22:08",
      "epoch_date_close_approach": -2192752320000,
      "relative_velocity": {
        "kilometers_per_second": "31.7784421852",
        "kilometers_per_hour": "114402.3918665533",
        "miles_per_hour": "71085.1973239703"
      },
      "miss_distance": {
        "astronomical": "0.1416686321",
        "lunar": "55.1090978869",
        "kilometers": "21193325.607973627",
        "miles": "13168921.8817729726"
      },
      "orbiting_body": "Venus"
    },
    {
      "close_approach_date": "1900-07-27",
      "close_approach_date_full": "1900-Jul-27 20:47",
      "epoch_date_close_approach": -2191029180000,
      "relative_velocity": {
        "kilometers_per_second": "23.864674044",
        "kilometers_per_hour": "85912.8265584731",
        "miles_per_hour": "53382.889369069"
      },
      "miss_distance": {
        "astronomical": "0.2177325755",
        "lunar": "84.6979718695",
        "kilometers": "32572329.524414185",
        "miles": "20239507.048058353"
      },
      "orbiting_body": "Earth"
    },
    {
      "close_approach_date": "1902-02-11",
      "close_approach_date_full": "1902-Feb-11 06:39",
      "epoch_date_close_approach": -2142350460000,
      "relative_velocity": {
        "kilometers_per_second": "28.1657402294",
        "kilometers_per_hour": "101396.6648258962",
        "miles_per_hour": "63003.9443191798"
      },
      "miss_distance": {
        "astronomical": "0.0869629861",
        "lunar": "33.8286015929",
        "kilometers": "13009477.489399607",
        "miles": "8083714.4650922966"
      },
      "orbiting_body": "Merc"
    }
  ]
}

const sampleDataBrowse = {
   "id": "2001620",
      "neo_reference_id": "2001620",
      "name": "1620 Geographos (1951 RA)",
      "name_limited": "Geographos",
      "designation": "1620",
      "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2001620",
      "absolute_magnitude_h": 15.26,
      "estimated_diameter": {
        "kilometers": {
          "estimated_diameter_min": 2.35806068,
          "estimated_diameter_max": 5.2727839755
        },
        "meters": {
          "estimated_diameter_min": 2358.0606799969,
          "estimated_diameter_max": 5272.7839755424
        },
        "miles": {
          "estimated_diameter_min": 1.4652305228,
          "estimated_diameter_max": 3.2763550517
        },
        "feet": {
          "estimated_diameter_min": 7736.419801361,
          "estimated_diameter_max": 17299.1605783187
        }
      },
      "is_potentially_hazardous_asteroid": true,
      "close_approach_data": [
        {
          "close_approach_date": "1901-08-23",
          "close_approach_date_full": "1901-Aug-23 17:36",
          "epoch_date_close_approach": -2157171840000,
          "relative_velocity": {
            "kilometers_per_second": "11.7628116645",
            "kilometers_per_hour": "42346.1219923274",
            "miles_per_hour": "26312.2334123992"
          },
          "miss_distance": {
            "astronomical": "0.0338992181",
            "lunar": "13.1867958409",
            "kilometers": "5071250.822425447",
            "miles": "3151129.1412552886"
          },
          "orbiting_body": "Earth"
        },
        {
          "close_approach_date": "1915-03-14",
          "close_approach_date_full": "1915-Mar-14 16:15",
          "epoch_date_close_approach": -1729410300000,
          "relative_velocity": {
            "kilometers_per_second": "12.1053300069",
            "kilometers_per_hour": "43579.1880247792",
            "miles_per_hour": "27078.4126923968"
          },
          "miss_distance": {
            "astronomical": "0.0815995171",
            "lunar": "31.7422121519",
            "kilometers": "12207113.951188577",
            "miles": "7585148.8812412826"
          },
          "orbiting_body": "Earth"
        },
        {
          "close_approach_date": "1926-08-21",
          "close_approach_date_full": "1926-Aug-21 06:24",
          "epoch_date_close_approach": -1368466560000,
          "relative_velocity": {
            "kilometers_per_second": "10.5595594626",
            "kilometers_per_hour": "38014.4140655227",
            "miles_per_hour": "23620.678561991"
          },
          "miss_distance": {
            "astronomical": "0.0664845025",
            "lunar": "25.8624714725",
            "kilometers": "9945939.962009675",
            "miles": "6180120.516396515"
          },
          "orbiting_body": "Earth"
        }
      ]
}

export default function AsteroidsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-10">
      <h1 className="text-2xl font-semibold text-white mb-8 text-center">Asteroids NeoWs — Near Earth Object Web Service</h1>
      <h2 className="text-center text-xl font-medium text-white shrink-0 flex-1">A NeoWs foi criada para tornar públicos os dados sobre asteroides próximos da Terra monitorados pela NASA. O sistema reúne informações como órbita, velocidade, tamanho estimado e aproximações previstas, permitindo acompanhar objetos potencialmente relevantes para pesquisa e defesa planetária. A API existe para facilitar o acesso a dados que antes ficavam concentrados em centros astronômicos especializados, sendo usada em painéis espaciais, estudos acadêmicos e ferramentas de monitoramento.</h2>
      {/* NEO - Feed */}
      <div className="w-full max-w-4xl flex items-center gap-4 mt-12 mb-4">
        <div className="flex-1 h-px bg-white/15"></div>

        <h2 className="text-xl font-medium text-white shrink-0">
          NEO - Feed
        </h2>

        <div className="flex-1 h-px bg-white/15"></div>
        </div>
      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1 rounded-xl object-cover border border-white/50">
          <JsonBlock data={sampleDataFeed} />
        </div>

        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">O Neo Feed é o modo principal da NeoWs e serve para listar asteroides próximos da Terra dentro de um intervalo de datas. Ele foi criado para facilitar o acompanhamento diário de objetos monitorados pela NASA, reunindo informações sobre aproximações previstas, tamanho estimado e nível de risco potencial. Em vez de pesquisar corpo por corpo, o Feed apresenta uma visão geral organizada dos objetos observados em determinado período.</p>
          <button className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar NeoWS
          </button> 
        </div>
      </div>
      {/* NEO - Lookup */}
      <div className="w-full max-w-4xl flex items-center gap-4 mt-12 mb-4">
        <div className="flex-1 h-px bg-white/15"></div>
        
        <h2 className="text-xl font-medium text-white shrink-0">
          NEO - Lookup
        </h2>
        
        <div className="flex-1 h-px bg-white/15"></div>
        </div>
        
      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">O Neo Lookup existe para consultas individuais de asteroides já identificados pela NASA. Enquanto o Feed oferece listas, o Lookup permite aprofundar a análise de um objeto específico, trazendo dados orbitais, características físicas e registros de aproximações. Esse recurso é importante para pesquisadores e aplicações que precisam estudar ou exibir um asteroide em detalhes.</p>
          <button className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar NeoWS
          </button>
        </div>
        
        <div className="flex-1 rounded-xl object-cover border border-white/50">
          <JsonBlock data={sampleDataLookup} />
        </div>

      </div>
      {/* NEO - Browse */}
      <div className="w-full max-w-4xl flex items-center gap-4 mt-12 mb-4">
        <div className="flex-1 h-px bg-white/15"></div>
        
        <h2 className="text-xl font-medium text-white shrink-0">
          NEO - Browse
        </h2>
        
        <div className="flex-1 h-px bg-white/15"></div>
        </div>
      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1 rounded-xl object-cover border border-white/50">
          <JsonBlock data={sampleDataBrowse} />
        </div>

        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">O Neo Browse funciona como um catálogo geral dos objetos próximos da Terra presentes no banco de dados da NASA. Seu objetivo é permitir navegação ampla pelo acervo sem depender de datas ou identificadores específicos. Ele é útil para exploração de dados, análise estatística e sistemas que precisam acessar grandes quantidades de registros astronômicos.</p>
          <button className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar NeoWS
          </button>
        </div>
        
      </div>
    </div>
  )
}
