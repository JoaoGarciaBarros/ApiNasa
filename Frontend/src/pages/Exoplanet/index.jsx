export default function ExoplanetPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-10">
      <h1 className="text-2xl font-semibold text-white mb-8 text-center">Exoplanet Archive</h1>

      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1">
        </div>

        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">Permite acesso ao banco de dados oficial de exoplanetas da NASA, contendo informações sobre planetas localizados fora do Sistema Solar. Os dados incluem métodos de descoberta, massa, raio, temperatura e características orbitais.</p>
          <button className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar Exoplanet Archive
          </button>
        </div>
      </div>
    </div>
  )
}
