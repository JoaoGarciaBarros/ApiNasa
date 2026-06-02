export default function VestaPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-10">
      <h1 className="text-2xl font-semibold text-white mb-8 text-center">NASA Trek WMTS</h1>

      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex">
          <div>
          <img
            src="https://trek.nasa.gov/tiles/Moon/EQ/Apollo15_MetricCam_ClrShade_Global_1024ppd/thumbnail/Apollo15_MetricCam_ClrShade_Global_1024ppd-120.png"
            alt="NASA Trek WMTS"
            className="w- rounded-xl object-cover border border-white/75"
          />
          <img
            src="https://trek.nasa.gov/tiles/Moon/EQ/Apollo15_MetricCam_ClrConf_Global_1024ppd/thumbnail/Apollo15_MetricCam_ClrConf_Global_1024ppd-120.png"
            alt="NASA Trek WMTS"
            className="w-lg rounded-xl object-cover border border-white/75"
          />
          </div>
          <div>
            <img
            src="https://trek.nasa.gov/tiles/Moon/EQ/Apollo15_MetricCam_Gray_Global_1024ppd/thumbnail/Apollo15_MetricCam_Gray_Global_1024ppd-120.png"
            alt="NASA Trek WMTS"
            className="w-lg rounded-xl object-cover border border-white/75"
          />
          <img
            src="https://trek.nasa.gov/tiles/Moon/EQ/Apollo15_MetricCam_Shade_Global_1024ppd/thumbnail/Apollo15_MetricCam_Shade_Global_1024ppd-120.png"
            alt="NASA Trek WMTS"
            className="w-lg rounded-xl object-cover border border-white/75"
          />
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">O NASA Trek é uma plataforma de exploração cartográfica criada para visualizar superfícies planetárias e corpos celestes através de mapas interativos. Diferente de APIs focadas apenas em dados brutos, o Trek foi desenvolvido para navegação visual e análise geográfica de planetas e luas. Ele reúne imagens, topografia e camadas científicas de missões espaciais, permitindo estudar regiões específicas da Lua, Marte e outros corpos. O sistema é usado tanto em educação quanto em planejamento e pesquisa científica ligada à geologia planetária.</p>
          <button 
            onClick={() => window.open('https://trek.nasa.gov/', '_blank')}
            className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar NASA Trek WMTS
          </button>
        </div>
      </div>
    </div>
  )
}
