export default function GIBSPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-10">
      <h1 className="text-2xl font-semibold text-white mb-8 text-center">GIBS — Global Imagery Browse Services</h1>

      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1">
          <img
            src="https://api.nasa.gov/assets/img/general/cyclone_jasper.png"
            alt="GIBS"
            className="w-full rounded-xl object-cover border border-white/75"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">O GIBS foi desenvolvido para facilitar o acesso rápido a imagens globais produzidas por satélites de observação da Terra. Em vez de exigir download e processamento de arquivos científicos pesados, o sistema entrega imagens já organizadas e prontas para visualização. Ele é amplamente usado em mapas interativos e aplicações ambientais, permitindo acompanhar incêndios, nuvens, gelo polar e outros fenômenos terrestres. O objetivo do GIBS é tornar dados complexos mais acessíveis para pesquisadores, governos e público geral.</p>
          <button className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar GIBS
          </button>
        </div>
      </div>
    </div>
  )
}
