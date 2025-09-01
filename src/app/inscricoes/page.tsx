
import { fetchAllModalidades } from "@/data/modalidades-db";
import Link from "next/link";
import Image from "next/image";

export default async function InscricoesPage() {
  const modalidades = await fetchAllModalidades();
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Inscrições
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Inscreva-se nas nossas modalidades desportivas e faça parte da família GCO
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-8 mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Modalidades disponíveis para inscrição
          </h2>
          
          <div className="space-y-6">
            {modalidades.map((modalidade, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-4 flex items-center justify-center" style={{ width: 40, height: 40 }}>
                      {typeof modalidade.icone === 'string' && modalidade.icone.startsWith('/') ? (
                        <Image
                          src={modalidade.icone}
                          alt={modalidade.nome}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      ) : (
                        <span className="text-3xl">{modalidade.icone}</span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {modalidade.nome}
                        {!modalidade.ativo && (
                          <span className="ml-2 bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">
                            Sem atividade
                          </span>
                        )}
                      </h3>
                      <p className="text-gray-600 text-sm">{modalidade.descricao}</p>
                    </div>
                  </div>
                  <Link
                    href={`/modalidades/${modalidade.slug}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors inline-block text-center"
                  >
                    Ver Detalhes
                  </Link>
                </div>
                {!modalidade.ativo && (
                  <div className="mt-3 text-sm text-gray-500 bg-gray-50 p-3 rounded-md">
                    <p>
                      <strong>Nota:</strong> Esta modalidade encontra-se atualmente <b>sem atividade</b>.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Processo de Inscrição
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-100 via-blue-50 to-white p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-6">
              <div className="flex flex-col items-center justify-center md:w-1/4">
                <img src="/gco-logo.png" alt="GCO Logo" className="w-20 h-20 mb-2" />
                <span className="text-blue-700 font-bold text-lg">Inscrição Presencial</span>
              </div>
              <div className="flex-1">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-200 text-blue-700 rounded-full flex items-center justify-center w-12 h-12 shadow font-bold text-xl select-none" style={{ minWidth: 48, minHeight: 48 }}>1</span>
                    <span className="text-gray-800"><b>Dirija-se à secretaria do clube</b> para realizar a inscrição presencialmente.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-200 text-blue-700 rounded-full flex items-center justify-center w-12 h-12 shadow font-bold text-xl select-none" style={{ minWidth: 48, minHeight: 48 }}>2</span>
                    <span className="text-gray-800">Para praticar qualquer modalidade, <b>é obrigatório ser sócio</b> do Ginásio Clube de Odivelas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-200 text-blue-700 rounded-full flex items-center justify-center w-12 h-12 shadow font-bold text-xl select-none" style={{ minWidth: 48, minHeight: 48 }}>3</span>
                    <span className="text-gray-800">No ato de inscrição, <b>apresente o Cartão de Cidadão</b>. A foto será retirada diretamente do cartão.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-200 text-blue-700 rounded-full flex items-center justify-center w-12 h-12 shadow font-bold text-xl select-none" style={{ minWidth: 48, minHeight: 48 }}>4</span>
                    <span className="text-gray-800">Para mais informações, <b>contacte-nos</b> ou visite o clube durante o horário de atendimento.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link
              href="/contactos"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Dúvidas? Entre em contacto connosco →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
