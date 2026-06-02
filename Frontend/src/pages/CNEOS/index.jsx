import { useNavigate } from 'react-router-dom'

export default function CNEOSPage() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-10">
      <h1 className="text-2xl font-semibold text-white mb-8 text-center">SSD/CNEOS — Solar System Dynamics / Center for Near-Earth Object Studies</h1>
      <h2 className="text-center text-xl font-medium text-white shrink-0 flex-1">O SSD/CNEOS reúne sistemas da NASA dedicados à dinâmica orbital e monitoramento de pequenos corpos do Sistema Solar. A plataforma calcula órbitas, aproximações e previsões relacionadas a asteroides, cometas e objetos próximos da Terra. Seu propósito principal é apoiar pesquisa astronômica e defesa planetária, oferecendo dados confiáveis sobre movimentação de corpos celestes. A API transforma cálculos complexos em consultas acessíveis, sendo fundamental para pesquisadores e ferramentas de visualização espacial.</h2>

      {/* CAD */}
      <div className="w-full max-w-4xl flex items-center gap-4 mt-12 mb-4">
        <div className="flex-1 h-px bg-white/15"></div>
        <h2 className="text-xl font-medium text-white shrink-0">
          CAD — Close Approach Data
        </h2>
        <div className="flex-1 h-px bg-white/15"></div>
      </div>
      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">
        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">O CAD registra aproximações de asteroides e cometas em relação à Terra e outros corpos do Sistema Solar. Ele existe para acompanhar encontros orbitais previstos e documentar distâncias, velocidades e datas relevantes, sendo uma ferramenta importante de defesa planetária e pesquisa orbital.</p>
          <button onClick={() => navigate('/cneos/test')} className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar SSD/CNEOS
          </button>
        </div>
      </div>

      {/* Fireball */}
      <div className="w-full max-w-4xl flex items-center gap-4 mt-12 mb-4">
        <div className="flex-1 h-px bg-white/15"></div>
        <h2 className="text-xl font-medium text-white shrink-0">
          Fireball
        </h2>
        <div className="flex-1 h-px bg-white/15"></div>
      </div>
      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">
        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">O Fireball reúne dados sobre meteoros extremamente brilhantes detectados ao entrarem na atmosfera terrestre. O sistema documenta energia liberada, altitude e localização aproximada dos eventos, ajudando cientistas a estudar impactos atmosféricos e comportamento de pequenos corpos espaciais.</p>
          <button onClick={() => navigate('/cneos/test')} className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar SSD/CNEOS
          </button>
        </div>
      </div>

      {/* Mission Design */}
      <div className="w-full max-w-4xl flex items-center gap-4 mt-12 mb-4">
        <div className="flex-1 h-px bg-white/15"></div>
        <h2 className="text-xl font-medium text-white shrink-0">
          Mission Design
        </h2>
        <div className="flex-1 h-px bg-white/15"></div>
      </div>
      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">
        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">O Mission Design é um conjunto de ferramentas voltado para planejamento orbital e trajetórias espaciais. Ele existe para apoiar estudos de missões, cálculo de manobras e análise de transferências entre corpos celestes. Diferente de APIs focadas em observação, essa área está ligada ao desenvolvimento e avaliação de caminhos espaciais possíveis.</p>
          <button onClick={() => navigate('/cneos/test')} className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar SSD/CNEOS
          </button>
        </div>
      </div>

      {/* NHATS */}
      <div className="w-full max-w-4xl flex items-center gap-4 mt-12 mb-4">
        <div className="flex-1 h-px bg-white/15"></div>
        <h2 className="text-xl font-medium text-white shrink-0">
          NHATS — Near-Earth Object Human Space Flight Accessible Targets Study
        </h2>
        <div className="flex-1 h-px bg-white/15"></div>
      </div>
      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">
        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">O NHATS foi criado para identificar asteroides potencialmente acessíveis por missões humanas. O sistema avalia requisitos energéticos e viabilidade orbital para futuras explorações tripuladas, funcionando como um filtro de candidatos para estudos de missão.</p>
          <button onClick={() => navigate('/cneos/test')} className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar SSD/CNEOS
          </button>
        </div>
      </div>

      {/* Scout */}
      <div className="w-full max-w-4xl flex items-center gap-4 mt-12 mb-4">
        <div className="flex-1 h-px bg-white/15"></div>
        <h2 className="text-xl font-medium text-white shrink-0">
          Scout
        </h2>
        <div className="flex-1 h-px bg-white/15"></div>
      </div>
      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">
        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">O Scout monitora objetos recém-descobertos que ainda possuem órbitas incertas e estima rapidamente possíveis trajetórias. Seu papel é fornecer avaliações iniciais de risco logo após a descoberta de um corpo, permitindo resposta científica rápida enquanto novas observações são realizadas.</p>
          <button onClick={() => navigate('/cneos/test')} className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar SSD/CNEOS
          </button>
        </div>
      </div>

      {/* Sentry */}
      <div className="w-full max-w-4xl flex items-center gap-4 mt-12 mb-4">
        <div className="flex-1 h-px bg-white/15"></div>
        <h2 className="text-xl font-medium text-white shrink-0">
          Sentry
        </h2>
        <div className="flex-1 h-px bg-white/15"></div>
      </div>
      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">
        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">O Sentry é um sistema automatizado de monitoramento de impacto de longo prazo. Ele calcula continuamente probabilidades de colisão de objetos próximos da Terra e atualiza previsões conforme novos dados são coletados. Seu objetivo é manter vigilância permanente sobre riscos potenciais, servindo como um dos principais sistemas de defesa planetária da NASA.</p>
          <button onClick={() => navigate('/cneos/test')} className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar SSD/CNEOS
          </button>
        </div>
      </div>
    </div>
  )
}
