from fastapi import FastAPI
from .routes import nasa  # importa o router nasa.py

app = FastAPI(
    title="NASA API Wrapper",
    description="Endpoints centralizados para serviços da NASA",
    version="1.0.0",
)

# inclui todas as rotas do nasa.py
app.include_router(nasa.router)


# rota raiz opcional
@app.get("/")
async def root():
    return {"message": "API da NASA está rodando 🚀"}
