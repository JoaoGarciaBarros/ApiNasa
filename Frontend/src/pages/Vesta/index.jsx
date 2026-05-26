export default function VestaPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-10">
      <h1 className="text-2xl font-semibold text-white mb-8 text-center">NASA Trek WMTS</h1>

      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1">
          <img
            src=""
            alt="NASA Trek WMTS"
            className="w-full rounded-xl object-cover border border-white/75"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">Disponibiliza serviços de mapas planetários em formato WMTS para exploração visual da Lua, Marte e Vesta. A API oferece imagens em camadas e navegação semelhante a sistemas de mapas online, permitindo análise de relevo, crateras e superfícies planetárias.</p>
          <button className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar NASA Trek WMTS
          </button>
        </div>
      </div>
    </div>
  )
}
