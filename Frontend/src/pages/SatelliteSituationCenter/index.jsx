export default function SatelliteSituationCenterPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-10">
      <h1 className="text-2xl font-semibold text-white mb-8 text-center">Satellite Situation Center</h1>

      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1">
        </div>

        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">Fornece informações sobre localização e posicionamento geocêntrico de satélites e espaçonaves, permitindo analisar sua relação com regiões geofísicas e condições espaciais ao redor da Terra.</p>
          <button className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar SSC
          </button>
        </div>
      </div>
    </div>
  )
}
