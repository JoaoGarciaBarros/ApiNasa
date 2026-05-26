export default function GIBSPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-10">
      <h1 className="text-2xl font-semibold text-white mb-8 text-center">GIBS — Global Imagery Browse Services</h1>

      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1">
          <img
            src=""
            alt="GIBS"
            className="w-full rounded-xl object-cover border border-white/75"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">Fornece imagens de satélite da Terra em alta resolução por meio de serviços padronizados de mapas. A API permite explorar fenômenos ambientais e climáticos, como queimadas, cobertura de nuvens, gelo polar e mudanças na superfície terrestre.</p>
          <button className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar GIBS
          </button>
        </div>
      </div>
    </div>
  )
}
