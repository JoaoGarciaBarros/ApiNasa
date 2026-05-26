export default function TechTransferPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-10">
      <h1 className="text-2xl font-semibold text-white mb-8 text-center">TechTransfer</h1>

      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1">
        </div>

        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">Disponibiliza acesso a patentes, softwares e relatórios tecnológicos produzidos pela NASA, promovendo transferência de conhecimento e reutilização de tecnologias em aplicações acadêmicas, industriais e científicas.</p>
          <button className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar TechTransfer
          </button>
        </div>
      </div>
    </div>
  )
}
