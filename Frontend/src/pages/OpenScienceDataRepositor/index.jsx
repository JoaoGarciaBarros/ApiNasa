export default function OpenScienceDataRepositorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-10">
      <h1 className="text-2xl font-semibold text-white mb-8 text-center">Open Science Data Repository</h1>

      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1">
        </div>

        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">Oferece acesso programático a conjuntos de dados científicos disponibilizados pela NASA dentro da iniciativa de ciência aberta. A plataforma reúne informações utilizadas em pesquisas, experimentos e estudos acadêmicos.</p>
          <button className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar OSDR
          </button>
        </div>
      </div>
    </div>
  )
}
