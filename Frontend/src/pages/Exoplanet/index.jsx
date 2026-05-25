export default function ExoplanetPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-10">
      <h1 className="text-2xl font-semibold text-white mb-8 text-center">Exoplanet Archive</h1>

      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1">
        </div>

        <div className="flex-1">
          <p className="text-white/40 text-lg">Permite acesso ao banco de dados oficial de exoplanetas da NASA, contendo informações sobre planetas localizados fora do Sistema Solar. Os dados incluem métodos de descoberta, massa, raio, temperatura e características orbitais.</p>
        </div>
      </div>
    </div>
  )
}
