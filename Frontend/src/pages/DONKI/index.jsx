export default function DONKIpage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-10">
      <h1 className="text-2xl font-semibold text-white mb-8 text-center">DONKI — Space Weather Database Of Notifications, Knowledge, Information</h1>

      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1">
        </div>

        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">Fornece registros de eventos relacionados ao clima espacial, como explosões solares, tempestades geomagnéticas e ejeções de massa coronal. É utilizada para monitorar atividades solares que podem impactar satélites, sistemas de comunicação e missões espaciais.</p>
          <button className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar DONKI
          </button>
        </div>
      </div>
    </div>
  )
}
