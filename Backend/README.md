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