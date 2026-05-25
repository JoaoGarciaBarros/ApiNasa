export default function TLEAPIPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-10">
      <h1 className="text-2xl font-semibold text-white mb-8 text-center">TLE API — Two Line Element</h1>

      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1">
        </div>

        <div className="flex-1">
          <p className="text-white/40 text-lg">Fornece dados orbitais de objetos artificiais que orbitam a Terra utilizando o padrão TLE (Two-Line Element). Esses dados são utilizados para rastreamento e previsão da posição de satélites e outros corpos em órbita.</p>
        </div>
      </div>
    </div>
  )
}
