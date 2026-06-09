import JsonBlock from '../../components/ui/JsonBlock'
import { useNavigate } from 'react-router-dom'

const sampleOSDR = {
  "hits": 1,
  "input": "87.1",
  "page_number": 1,
  "page_size": 25,
  "page_total": 1,
  "studies": {
    "OSD-87": {
      "file_count": 7,
      "study_files": [
        {
          "category": "Study Metadata Files",
          "date_created": 1516434676.433,
          "date_updated": "",
          "file_name": "GLDS-87_metadata_Zanello_STS135-ISA.zip",
          "file_size": 4809,
          "organization": "genelab",
          "remote_url": "/geode-py/ws/studies/OSD-87/download?source=datamanager&file=GLDS-87_metadata_Zanello_STS135-ISA.zip",
          "restricted": false,
          "subcategory": "",
          "subdirectory": "",
          "visible": true
        },
        {
          "category": "Microarray Data Files",
          "date_created": 1506033834.109,
          "date_updated": "",
          "file_name": "GLDS-87_microarray_14R_(Mouse430_2).CEL.gz",
          "file_size": 6374949,
          "organization": "genelab",
          "remote_url": "/geode-py/ws/studies/OSD-87/download?source=datamanager&file=GLDS-87_microarray_14R_%28Mouse430_2%29.CEL.gz",
          "restricted": false,
          "subcategory": "",
          "subdirectory": "",
          "visible": true
        },
        {
          "category": "Microarray Data Files",
          "date_created": 1506033834.109,
          "date_updated": "",
          "file_name": "GLDS-87_microarray_16R_(Mouse430_2).CEL.gz",
          "file_size": 6274393,
          "organization": "genelab",
          "remote_url": "/geode-py/ws/studies/OSD-87/download?source=datamanager&file=GLDS-87_microarray_16R_%28Mouse430_2%29.CEL.gz",
          "restricted": false,
          "subcategory": "",
          "subdirectory": "",
          "visible": true
        },
        {
          "category": "Microarray Data Files",
          "date_created": 1506033834.109,
          "date_updated": "",
          "file_name": "GLDS-87_microarray_20R_(Mouse430_2).CEL.gz",
          "file_size": 6384622,
          "organization": "genelab",
          "remote_url": "/geode-py/ws/studies/OSD-87/download?source=datamanager&file=GLDS-87_microarray_20R_%28Mouse430_2%29.CEL.gz",
          "restricted": false,
          "subcategory": "",
          "subdirectory": "",
          "visible": true
        },
        {
          "category": "Microarray Data Files",
          "date_created": 1506033834.109,
          "date_updated": "",
          "file_name": "GLDS-87_microarray_52R_(Mouse430_2).CEL.gz",
          "file_size": 6297226,
          "organization": "genelab",
          "remote_url": "/geode-py/ws/studies/OSD-87/download?source=datamanager&file=GLDS-87_microarray_52R_%28Mouse430_2%29.CEL.gz",
          "restricted": false,
          "subcategory": "",
          "subdirectory": "",
          "visible": true
        },
        {
          "category": "Microarray Data Files",
          "date_created": 1506033834.109,
          "date_updated": "",
          "file_name": "GLDS-87_microarray_54R_(Mouse430_2).CEL.gz",
          "file_size": 6017124,
          "organization": "genelab",
          "remote_url": "/geode-py/ws/studies/OSD-87/download?source=datamanager&file=GLDS-87_microarray_54R_%28Mouse430_2%29.CEL.gz",
          "restricted": false,
          "subcategory": "",
          "subdirectory": "",
          "visible": true
        },
        {
          "category": "Microarray Data Files",
          "date_created": 1506033834.109,
          "date_updated": "",
          "file_name": "GLDS-87_microarray_58R_(Mouse430_2).CEL.gz",
          "file_size": 6329707,
          "organization": "genelab",
          "remote_url": "/geode-py/ws/studies/OSD-87/download?source=datamanager&file=GLDS-87_microarray_58R_%28Mouse430_2%29.CEL.gz",
          "restricted": false,
          "subcategory": "",
          "subdirectory": "",
          "visible": true
        }
      ]
    }
  },
  "success": true,
  "total_hits": 1,
  "valid_input": [
    "87"
  ]

}

export default function OpenScienceDataRepositorPage() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-10">
      <h1 className="text-2xl font-semibold text-white mb-8 text-center">Open Science Data Repository</h1>

      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1 rounded-xl object-cover border border-white/50">
          <JsonBlock data={sampleOSDR} />
        </div>

        <div className="flex-1 flex flex-col">
          <p className="text-white/60 text-lg">O Open Science Data Repository faz parte do movimento de ciência aberta da NASA e existe para compartilhar conjuntos de dados científicos produzidos ou financiados pela agência. O sistema busca reduzir barreiras entre pesquisa institucional e comunidade científica, permitindo que universidades, laboratórios e desenvolvedores reutilizem dados oficiais. Sua API oferece acesso estruturado a datasets variados, incentivando transparência, reprodutibilidade científica e colaboração internacional.</p>
          <button onClick={() => navigate('/osdr/test')} className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar OSDR
          </button>
        </div>
      </div>
    </div>
  )
}
