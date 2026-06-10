# NASA Explorer

Frontend em React + Backend em FastAPI consumindo as APIs da NASA.

---

## Requisitos

- **Python 3.10+**
- **Node.js 18+**
- **Chave da API NASA** → https://api.nasa.gov (grátis)

---

## Backend

### 1. Criar o arquivo `.env` dentro da pasta `Backend/` - Pode ser Usado com DEMO_KEY

```
NASA_API_KEY=sua_chave_aqui
NASA_BASE_URL=https://api.nasa.gov
```

### 2. Instalar dependências

```bash
cd Backend
pip install fastapi uvicorn httpx python-dotenv
```

### 3. Rodar

```bash
uvicorn App.main:app --reload
```

O Back roda em: http://localhost:8000  
Swagger do Back: http://localhost:8000/docs

---

## Frontend

### 1. Instalar dependências

```bash
cd Frontend
npm install
```

### 2. Rodar

```bash
npm run dev
```

O Front roda em: http://localhost:5173

---

## Ordem de inicialização

1. Suba o **Backend** primeiro
2. Depois suba o **Frontend**

