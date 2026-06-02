import JsonBlock from '../../components/ui/JsonBlock'
import { useNavigate } from 'react-router-dom'

const sampleTechPort = {
  "contacts": [
    {
      "contactId": 0,
      "canUserEdit": true,
      "firstName": "string",
      "lastName": "string",
      "fullName": "string",
      "fullNameInverted": "string",
      "middleInitial": "string",
      "email": "string",
      "phone": "string",
      "receiveEmail": "Unsubscribed"
    }
  ]
}

export default function TechportPage() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-10">
      <h1 className="text-2xl font-semibold text-white mb-8 text-center">TechPort</h1>

      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1 rounded-xl object-cover border border-white/50">
          <JsonBlock data={sampleTechPort} />
        </div>

        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">O Techport é o catálogo oficial de projetos tecnológicos financiados ou desenvolvidos pela NASA. Ele foi criado para documentar pesquisas, missões e tecnologias em andamento, permitindo acompanhar como recursos e inovação são aplicados dentro da agência. A API oferece acesso a informações sobre objetivos, equipes e evolução dos projetos, funcionando como uma vitrine da produção tecnológica da NASA e uma ferramenta de transparência institucional.</p>
          <button onClick={() => navigate('/techport/test')} className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar TechPort
          </button>
        </div>
      </div>
    </div>
  )
}
