export default function APODPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-10">
      <h1 className="text-2xl font-semibold text-white mb-8 text-center">APOD — Astronomy Picture of the Day</h1>

      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1">
          <img
            src="https://apod.nasa.gov/apod/image/0311/aurora1_taylor.jpg"
            alt="Aurora Over Edmonton"
            className="w-full rounded-xl object-cover border border-white/75"
          />
        </div>
        
        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">Apresenta diariamente uma imagem ou vídeo relacionado à astronomia, acompanhado de explicação científica escrita por especialistas da NASA. A API permite explorar fenômenos espaciais, corpos celestes e eventos astronômicos por meio de registros visuais e conteúdo educativo.</p>
          <button className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar APOD
          </button> 
        </div>
      </div>
    </div>
  )
}
