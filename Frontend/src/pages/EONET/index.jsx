export default function EONETPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-10">
      <h1 className="text-2xl font-semibold text-white mb-8 text-center">EONET — Earth Observatory Natural Event Tracker</h1>

      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1">
          <img
            src=""
            alt="EONET"
            className="w-full rounded-xl object-cover border border-white/75"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">Disponibiliza informações sobre eventos naturais que ocorrem ao redor do planeta em tempo quase real, utilizando dados de diferentes fontes observacionais. A API permite acompanhar fenômenos como incêndios florestais, tempestades, vulcões, ciclones e outros eventos ambientais, auxiliando na visualização e monitoramento de mudanças naturais na Terra.</p>
          <button className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar EONET
          </button>
        </div>
      </div>
    </div>
  )
}
