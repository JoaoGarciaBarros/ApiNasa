export default function CNEOSPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-10">
      <h1 className="text-2xl font-semibold text-white mb-8 text-center">SSD/CNEOS — Solar System Dynamics / Center for Near-Earth Object Studies</h1>

      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1">
        </div>

        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">Disponibiliza dados relacionados à dinâmica orbital de corpos do Sistema Solar e ao monitoramento de objetos próximos da Terra. A API é utilizada para cálculos orbitais, previsões de trajetória e estudos de risco astronômico.</p>
          <button className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar SSD/CNEOS
          </button>
        </div>
      </div>
    </div>
  )
}
