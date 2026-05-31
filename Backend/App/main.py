from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from App.routes.nasa import router as nasa_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
#As rotas
app.include_router(nasa_router)

@app.get("/")
async def root():
    return {"message": "Welcome to the NASA API!"}