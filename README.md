# NASA Explorer

Aplicação full-stack para explorar dados públicos da NASA. Frontend em **React (Vite)** consumindo um Backend **FastAPI**, que atua como proxy/wrapper para a [NASA Open APIs](https://api.nasa.gov/) e demais serviços relacionados (GIBS, OSDR, TLE, Exoplanet Archive, etc.).

Projeto de pesquisa baseado no levantamento de APIs/dados feito nesta planilha:
[Planilha de pesquisa NASA APIs](https://docs.google.com/spreadsheets/d/1NCZe943Dhx23CYj1fJTnGgF3UUVPLvQilrGPz0yutUY/edit?usp=sharing)

---

## Arquitetura

```
NASA explorer/
├── Backend/                 # API FastAPI (wrapper das APIs da NASA)
│   ├── App/
│   │   ├── main.py          # cria o app FastAPI e registra as rotas
│   │   ├── config.py        # carrega NASA_API_KEY / NASA_BASE_URL do .env
│   │   └── routes/
│   │       └── nasa.py       # todas as rotas /nasa/*
│   └── services/             # 1 pasta por API da NASA, cada uma com teste.py
│       ├── Apod_get/
│       ├── Asteroids_get/
│       ├── Cneos_get/
│       ├── Donki_get/
│       ├── Epic_get/
│       ├── Exoplanet_get/
│       ├── Gibs_get/
│       ├── Image_library_get/
│       ├── Insight_get/
│       ├── Nasatrek_get/
│       ├── OpenScienceDataRepositor_get/
│       ├── SatelliteSituationCenter_get/
│       ├── Techport_get/
│       ├── Techtransfer_get/
│       └── Tleapi_get/
└── Frontend/                  # SPA React + Vite + Tailwind
    └── src/
        ├── routes/index.jsx   # rotas da aplicação (react-router-dom)
        ├── services/nasaClient.js  # cliente HTTP que chama o Backend (/nasa/*)
        ├── components/        # layout (Navbar, Layout), UI (Button, DatePicker, JsonBlock, StarsBackground)
        └── pages/              # uma pasta por API (index.jsx = página final, test.jsx = playground de testes)
```

---

## Stack

**Backend**
- Python 3.10+
- FastAPI + Uvicorn
- httpx (requisições assíncronas às APIs da NASA)
- python-dotenv (variáveis de ambiente)

**Frontend**
- React 19 + Vite
- React Router DOM
- Tailwind CSS
- lucide-react (ícones)
- tsparticles / react-tsparticles (fundo de estrelas)

---

## Fonte de dados

Todas as integrações consomem [api.nasa.gov](https://api.nasa.gov/) (e endpoints satélites como GIBS, EONET, OSDR, TLE API, Exoplanet Archive, Techport, Tech Transfer). A seleção das APIs utilizadas e seus parâmetros foi planejada na planilha de pesquisa do projeto (link acima).

---

## Como rodar

### Requisitos
- Python 3.10+
- Node.js 18+
- Chave da API NASA (gratuita) → https://api.nasa.gov (pode usar `DEMO_KEY`)

### 1. Backend

Criar `Backend/.env`:
```
NASA_API_KEY=sua_chave_aqui
NASA_BASE_URL=https://api.nasa.gov
```

Instalar e rodar:
```bash
cd Backend
pip install fastapi uvicorn httpx python-dotenv
uvicorn App.main:app --reload
```

- API: http://localhost:8000
- Swagger: http://localhost:8000/docs

### 2. Frontend

```bash
cd Frontend
npm install
npm run dev
```

- App: http://localhost:5173
- O Vite faz proxy de `/nasa` → `http://localhost:8000` (ver `Frontend/vite.config.js`)

**Ordem de inicialização:** Backend primeiro, depois Frontend.

---

## Endpoints do Backend (`/nasa`)

| Endpoint | Descrição |
|---|---|
| `GET /apod` | Astronomy Picture of the Day |
| `GET /gibs` | Global Imagery Browse Services (tiles de satélite) |
| `GET /image-library` | Busca na NASA Image and Video Library |
| `GET /insight`, `/insight-assest`, `/insight-metadata`, `/insight-caption` | Dados meteorológicos de Marte (missão InSight) |
| `GET /asteroid-feed`, `/asteroid-lookup`, `/asteroid-browse` | NeoWs - asteroides próximos da Terra |
| `GET /cneos`, `/cneos-fireball`, `/cneos-nhats`, `/cneos-scout`, `/cneos-sentry` | CNEOS - objetos próximos, fireballs, missões |
| `GET /mission-design` | CNEOS Mission Design (trajetórias, órbitas) |
| `GET /donki-cme`, `/donki-analysis`, `/donki-gst`, `/donki-ips`, `/donki-flr`, `/donki-sep`, `/donki-mpc`, `/donki-rbe`, `/donki-hss`, `/donki-wsa-enlil`, `/donki-notification` | DONKI - clima espacial (flares, CMEs, tempestades) |
| `GET /epic` | EPIC - imagens da Terra a partir do ponto L1 |
| `GET /exoplanet` | NASA Exoplanet Archive |
| `GET /tech-transfer` | Tech Transfer (patentes, software, spinoffs) |
| `GET /tle` | TLE API - elementos orbitais de satélites |
| `GET /osdr` | Open Science Data Repository |
| `GET /nasatrek` | NASA Trek |
| `GET /techport` | Techport - projetos de tecnologia da NASA |
| `GET /ssc` | Satellite Situation Center |

---

## Páginas do Frontend

Cada API tem uma pasta em `Frontend/src/pages/<API>/`:
- `index.jsx` — página final apresentada na Home (`/`)
- `test.jsx` — página de testes/playground dos endpoints (rotas `*/test`)

APIs disponíveis: APOD, Asteroids, CNEOS, DONKI, EONET, EPIC, Exoplanet, GIBS, ImageLibrary, InSight, OpenScienceDataRepositor (OSDR), SatelliteSituationCenter (SSC), Techport, TechTransfer, TLEAPI, Vesta.

---

## Histórico do projeto

Desenvolvido em etapas: estrutura inicial do backend → integração de cada API da NASA em `services/` → construção das rotas FastAPI → criação das páginas do frontend (Home, navegação, páginas de teste) → ajustes visuais (fundo de estrelas, paleta de cores, normalização de componentes como `DatePicker`).
