export default function InsightPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-10">
      <h1 className="text-2xl font-semibold text-white mb-8 text-center">Insight — Mars Weather Service API</h1>

      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1">
        </div>

        <div className="flex-1">
          <p className="text-white/40 text-lg">Disponibiliza dados meteorológicos coletados pela missão InSight em Marte, incluindo temperatura, pressão atmosférica e velocidade do vento. A API auxilia na análise das condições climáticas do planeta marciano.</p>
        </div>
      </div>
    </div>
  )
}
