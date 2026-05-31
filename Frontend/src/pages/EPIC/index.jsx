export default function EPICPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-10">
      <h1 className="text-2xl font-semibold text-white mb-8 text-center">EPIC — Earth Polychromatic Imaging Camera</h1>

      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1">
          <img
            src="https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20190530021927.png?api_key=DEMO_KEY"
            alt="EPIC"
            className="w-full rounded-xl object-cover border border-white/75"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">A EPIC fornece imagens completas da Terra registradas pelo instrumento Earth Polychromatic Imaging Camera, instalado na missão DSCOVR. Diferente de satélites que observam regiões específicas, a EPIC captura o planeta inteiro a partir do ponto gravitacional L1, entre a Terra e o Sol. O projeto existe para estudar atmosfera, nuvens, vegetação e interação da luz solar com o planeta, além de oferecer imagens únicas da Terra vista do espaço profundo. Sua API permite acessar essas fotografias e os metadados associados.</p>
          <button className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar EPIC
          </button>
        </div>
      </div>
    </div>
  )
}
