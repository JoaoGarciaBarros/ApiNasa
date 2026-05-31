export default function ExoplanetPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-10">
      <h1 className="text-2xl font-semibold text-white mb-8 text-center">Exoplanet Archive</h1>

      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1">
        </div>

        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">O Exoplanet Archive é um grande banco de dados dedicado ao estudo de exoplanetas, planetas localizados fora do Sistema Solar. Mantido pela NASA, ele reúne descobertas confirmadas e informações derivadas de missões espaciais e observatórios astronômicos. A API existe para organizar e disponibilizar esse enorme volume de dados, permitindo consultas sobre características orbitais, estrelas hospedeiras e métodos de detecção. O sistema é essencial para pesquisa astronômica e desenvolvimento de ferramentas de análise planetária.</p>
          <button className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar Exoplanet Archive
          </button>
        </div>
      </div>
    </div>
  )
}
