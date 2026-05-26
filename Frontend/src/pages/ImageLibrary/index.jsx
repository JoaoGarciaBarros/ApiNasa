export default function ImageLibraryPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-10">
      <h1 className="text-2xl font-semibold text-white mb-8 text-center">NASA Image and Video Library</h1>

      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1">
          <img
            src=""
            alt="NASA Image and Video Library"
            className="w-full rounded-xl object-cover border border-white/75"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">Permite acesso à biblioteca oficial de imagens, vídeos e áudios da NASA. O acervo reúne registros históricos e científicos relacionados a missões espaciais, astronautas, foguetes, telescópios e exploração do espaço.</p>
          <button className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar Image Library
          </button>
        </div>
      </div>
    </div>
  )
}
