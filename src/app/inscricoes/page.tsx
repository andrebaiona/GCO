
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
                          <span className="ml-2 bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                            SUSPENSA
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
                      <strong>Nota:</strong> Esta modalidade está temporariamente suspensa para novas atividades, 
                      mas ainda aceitamos pré-inscrições para quando as atividades forem retomadas.
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
          
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-md">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">1. Pré-inscrição online</h3>
              <p className="text-gray-700">
                Complete o formulário de pré-inscrição selecionando a modalidade e horário de interesse. 
                As inscrições estão abertas todo o ano, com início das atividades em setembro.
              </p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-md">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">2. Contacto e esclarecimentos</h3>
              <p className="text-gray-700">
                Após a pré-inscrição, será contactado pelos nossos serviços para agendar uma reunião 
                informativa e esclarecer todas as dúvidas sobre a modalidade escolhida.
              </p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-md">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">3. Avaliação inicial (modalidades competitivas)</h3>
              <p className="text-gray-700">
                Para modalidades competitivas, será agendada uma avaliação inicial gratuita para 
                determinar o nível e grupo mais adequado às capacidades do atleta.
              </p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-md">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">4. Confirmação e pagamento</h3>
              <p className="text-gray-700">
                Após a avaliação e aceitação da vaga, proceda ao pagamento da taxa de inscrição 
                e primeira mensalidade para formalizar a entrada no clube.
              </p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-md">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">5. Início das atividades</h3>
              <p className="text-gray-700">
                Após confirmação, poderá iniciar as atividades no horário escolhido. 
                Serão fornecidas todas as informações sobre equipamentos e regulamentos.
              </p>
            </div>
          </div>
          
          <div className="mt-8 bg-gray-50 p-4 rounded-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Documentos necessários:</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Cartão de cidadão ou bilhete de identidade</li>
              <li>Comprovativo de morada</li>
              <li>Fotografia tipo passe</li>
              <li>Atestado médico (para competições)</li>
              <li>Autorização dos encarregados de educação (menores)</li>
            </ul>
          </div>

          <div className="mt-8 bg-green-50 p-4 rounded-md">
            <h3 className="text-lg font-semibold text-green-800 mb-3">Preços para a época 2024/2025:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-green-700">Andebol:</p>
                <p className="text-gray-700">Inscrição: 60€ | Mensalidade: 30€</p>
              </div>
              <div>
                <p className="font-medium text-green-700">Ginástica:</p>
                <p className="text-gray-700">Inscrição: 70€ | Mensalidade: 40€</p>
              </div>
              <div>
                <p className="font-medium text-green-700">Patinagem Artística:</p>
                <p className="text-gray-700">Inscrição: 80€ | Mensalidade: 45€</p>
              </div>
              <div>
                <p className="font-medium text-green-700">Xadrez:</p>
                <p className="text-gray-700">Inscrição: 35€ | Mensalidade: 25€</p>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              * Valores não incluem equipamentos. Desconto familiar de 10% a partir do 2º elemento.
            </p>
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
