"use client";

import { useState, useEffect } from "react";

type Escalao = {
  id: number;
  nome: string;
  idade_minima?: number | null;
  idade_maxima?: number | null;
  descricao?: string | null;
  preco_escalao?: {
    tipo: string;
    valor: number;
    observacoes?: string | null;
  }[];
};

interface TabsEscaloesProps {
  escaloes: Escalao[];
}

export default function TabsEscaloes({ escaloes }: TabsEscaloesProps) {
  if (!Array.isArray(escaloes) || escaloes.length === 0) {
    return (
      <div className="p-6 bg-gray-50 rounded-xl shadow text-gray-500 text-center">
        Nenhum escalão disponível para esta modalidade.
      </div>
    );
  }
  
  const [activeTab, setActiveTab] = useState(0);
  const [isAndebol, setIsAndebol] = useState(false);
  const [isPatinagem, setIsPatinagem] = useState(false);
  const [isXadrez, setIsXadrez] = useState(false);

  // Garantir que activeTab é válido quando a lista de escalões muda
  useEffect(() => {
    const visiveis = escaloes.filter(esc => esc.nome?.toLowerCase() !== 'todos');
    if (visiveis.length === 0) {
      setActiveTab(0);
      return;
    }
    if (activeTab >= visiveis.length) {
      setActiveTab(0);
    }
  }, [escaloes, activeTab]);

  // Buscar valores globais do escalão "Todos"
  const escalaoTodos = escaloes.find(e => e.nome?.toLowerCase() === "todos");
  const inscricaoGlobal = escalaoTodos?.preco_escalao?.find(p => 
    p.tipo?.toLowerCase() === "inscricao" || p.tipo?.toLowerCase() === "inscrição"
  );
  const seguroGlobal = escalaoTodos?.preco_escalao?.find(p => 
    p.tipo?.toLowerCase() === "seguro"
  );
  const renovacaoGlobal = escalaoTodos?.preco_escalao?.find(p => 
    p.tipo?.toLowerCase() === "renovacao" || p.tipo?.toLowerCase() === "renovação"
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname;
      setIsAndebol(pathname.includes("/modalidades/andebol"));
      setIsPatinagem(pathname.includes("/modalidades/patinagem-artistica"));
      setIsXadrez(pathname.includes("/modalidades/xadrez"));
    }
  }, []);

  // Leitura imediata do pathname (client-side) para evitar flicker e permitir retorno antecipado
  const clientPathname = typeof window !== "undefined" ? window.location.pathname : "";
  const showAsXadrez = clientPathname.includes("/modalidades/xadrez") || isXadrez;

  // Se for Xadrez: não mostrar tabs — apenas a mensalidade geral (escalão 'Todos')
  if (showAsXadrez) {
    const mensalidadeGlobal = escalaoTodos?.preco_escalao?.find(
      (p: any) => p.tipo?.toLowerCase() === "mensalidade"
    );

    if (mensalidadeGlobal && typeof mensalidadeGlobal.valor === 'number' && mensalidadeGlobal.valor > 0) {
      return (
        <div className="flex flex-col items-center p-6">
          <h3 className="text-2xl font-bold mb-2 text-blue-900">Mensalidade</h3>
          <div className="w-[220px] h-[220px] bg-blue-100 rounded-xl px-4 py-6 flex flex-col items-center justify-center shadow border border-blue-200">
            <span className="text-3xl font-bold text-blue-800">{mensalidadeGlobal.valor} €</span>
            {mensalidadeGlobal.observacoes && (
              <span className="text-xs text-blue-700 text-center mt-2">{mensalidadeGlobal.observacoes}</span>
            )}
          </div>
        </div>
      );
    }

    if (mensalidadeGlobal) {
      return (
        <div className="p-6 text-gray-700 text-center">
          <div className="text-lg font-semibold mb-2">Mensalidade</div>
          <div className="text-sm text-red-600">Valor registado: {mensalidadeGlobal.valor ?? 'não definido'}. Por favor atualize o preço para o valor correto (ex.: 10 €).</div>
          {mensalidadeGlobal.observacoes && (
            <div className="text-xs text-gray-600 mt-2">Observações: {mensalidadeGlobal.observacoes}</div>
          )}
        </div>
      );
    }

    return (
      <div className="p-6 text-gray-500">Sem preço de mensalidade definido para Xadrez.</div>
    );
  }

  return (
    <div>
      {/* Global inscription and insurance cards for Patinagem */}
      {isPatinagem && (inscricaoGlobal || seguroGlobal) && (
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Valores Gerais</h3>
          <div className="flex flex-row flex-wrap gap-6 justify-center items-center w-full mb-4">
            {inscricaoGlobal && (
              <div className="w-[200px] h-[200px] bg-yellow-200 rounded-xl px-4 py-4 flex flex-col items-center justify-center shadow border border-yellow-400">
                <span className="text-lg font-semibold text-yellow-900 mb-2">
                  Inscrição
                </span>
                <span className="text-2xl font-bold text-yellow-800 mb-2">
                  {inscricaoGlobal.valor} €
                </span>
                {inscricaoGlobal.observacoes && (
                  <span className="text-xs text-yellow-700 text-center mt-1">
                    {inscricaoGlobal.observacoes}
                  </span>
                )}
              </div>
            )}
            {seguroGlobal && (
              <div className="w-[200px] h-[200px] bg-green-200 rounded-xl px-4 py-4 flex flex-col items-center justify-center shadow border border-green-400">
                <span className="text-lg font-semibold text-green-900 mb-2">
                  Seguro
                </span>
                <span className="text-2xl font-bold text-green-800 mb-2">
                  {seguroGlobal.valor} €
                </span>
                {seguroGlobal.observacoes && (
                  <span className="text-xs text-green-700 text-center mt-1">
                    {seguroGlobal.observacoes}
                  </span>
                )}
              </div>
            )}
          </div>
          <div className="border-b border-gray-300 mb-6"></div>
        </div>
      )}

      <div className="mb-6">
        <div className="flex border-b border-gray-300">
          {escaloes.filter(esc => esc.nome?.toLowerCase() !== 'todos').slice(0, 3).map((esc, idx) => (
            <button
              key={esc.id}
              className={`flex-1 py-3 text-lg font-semibold transition-colors duration-150 ${
                activeTab === idx
                  ? "border-b-4 border-blue-600 text-blue-900 bg-white"
                  : "text-gray-500 bg-gray-100"
              } focus:outline-none`}
              onClick={() => setActiveTab(idx)}
            >
              {esc.nome}
            </button>
          ))}
        </div>
        {escaloes.filter(esc => esc.nome?.toLowerCase() !== 'todos').length > 3 && (
          <div className="flex border-b border-gray-300">
            {escaloes.filter(esc => esc.nome?.toLowerCase() !== 'todos').slice(3).map((esc, idx) => (
              <button
                key={esc.id}
                className={`flex-1 py-3 text-lg font-semibold transition-colors duration-150 ${
                  activeTab === idx + 3
                    ? "border-b-4 border-blue-600 text-blue-900 bg-white"
                    : "text-gray-500 bg-gray-100"
                } focus:outline-none`}
                onClick={() => setActiveTab(idx + 3)}
              >
                {esc.nome}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="p-8 bg-white rounded-xl shadow flex flex-col items-center border border-blue-100">
        {(() => {
          const escaloesVisiveis = escaloes.filter(esc => esc.nome?.toLowerCase() !== 'todos');
          console.log('TabsEscaloes: visiveis.length =', escaloesVisiveis.length, 'activeTab =', activeTab);

          if (escaloesVisiveis.length === 0) {
            // Caso especial: Xadrez não tem escalões — mostramos apenas a mensalidade global se existir
            if (isXadrez) {
              const mensalidadeGlobal = escalaoTodos?.preco_escalao?.find(
                (p: any) => p.tipo?.toLowerCase() === "mensalidade"
              );

              if (mensalidadeGlobal) {
                return (
                  <div className="flex flex-col items-center p-6">
                    <h3 className="text-2xl font-bold mb-2 text-blue-900">Mensalidade</h3>
                    <div className="w-[220px] h-[220px] bg-blue-100 rounded-xl px-4 py-6 flex flex-col items-center justify-center shadow border border-blue-200">
                      <span className="text-3xl font-bold text-blue-800">{mensalidadeGlobal.valor} €</span>
                      {mensalidadeGlobal.observacoes && (
                        <span className="text-xs text-blue-700 text-center mt-2">{mensalidadeGlobal.observacoes}</span>
                      )}
                    </div>
                  </div>
                );
              }

              return (
                <div className="p-6 text-gray-500">Sem preço de mensalidade definido para Xadrez.</div>
              );
            }

            return (
              <div className="p-6 text-gray-500">Nenhum escalão visível.</div>
            );
          }

          const safeIndex = Math.max(0, Math.min(activeTab, escaloesVisiveis.length - 1));
          const esc = escaloesVisiveis[safeIndex];
          const precos = esc?.preco_escalao || [];

          console.log(`\n=== ESCALÃO ATIVO: "${esc?.nome ?? 'undefined'}" (safeIndex=${safeIndex}) ===`);
          console.log('Preços do escalão:', precos);

          // Caso especial: Andebol → Séniores
          if (isAndebol && esc.nome.toLowerCase() === "seniores") {
            console.log('🏐 Renderizando Andebol Seniores (layout especial)');
            return (
              <>
                <h3 className="text-2xl font-bold mb-2 text-blue-900">
                  {esc.nome}
                </h3>
                {esc.descricao && (
                  <p className="mb-2 text-gray-700 text-base text-center">
                    {esc.descricao}
                  </p>
                )}

                <div className="flex flex-row flex-wrap gap-6 justify-center items-center w-full mt-4">
                  {/* Inscrição - 1º ano */}
                  <div className="w-[220px] h-[220px] bg-yellow-200 rounded-xl px-4 py-4 flex flex-col items-center justify-center shadow border border-yellow-400">
                    <span className="text-lg font-semibold text-yellow-900 mb-2">
                      Inscrição (1º ano)
                    </span>
                    <span className="text-xs font-semibold text-yellow-900 mb-2">
                      Seguro Incluído
                    </span>
                    <span className="text-2xl font-bold text-yellow-800 mb-2">
                      215 €
                    </span>
                    <span className="text-xs text-yellow-700 text-center mt-1">
                      Setembro: <strong>95€</strong><br />
                      Outubro: <strong>60€</strong><br />
                      Novembro: <strong>60€</strong>
                    </span>
                  </div>

                  {/* Renovação - anos seguintes */}
                  <div className="w-[220px] h-[220px] bg-purple-200 rounded-xl px-4 py-4 flex flex-col items-center justify-center shadow border border-purple-400">
                    <span className="text-lg text-center font-semibold text-purple-900 mb-2">
                      Renovação<br /> 
                      (anos seguintes)
                    </span>
                    <span className="text-2xl font-bold text-purple-800 mb-2">
                      205 €
                    </span>
                    <span className="text-xs text-purple-700 text-center mt-1">
                      Setembro: <strong>85€</strong><br />
                      Outubro: <strong>60€</strong><br />
                      Novembro: <strong>60€</strong>
                    </span>
                  </div>
                </div>
              </>
            );
          }

          // Caso especial: Patinagem - Mostrar mensalidades em layout especial
          if (isPatinagem) {
            console.log('⛸️ Renderizando Patinagem (layout especial)');
            const mensalidadesPatinagem = precos
              .filter(p => p.tipo?.toLowerCase() === "mensalidade")
              .sort((a, b) => {
                const horasA = a.observacoes?.match(/(\d+)\s*horas?/i);
                const horasB = b.observacoes?.match(/(\d+)\s*horas?/i);
                
                if (horasA && horasB) {
                  const numA = parseInt(horasA[1]);
                  const numB = parseInt(horasB[1]);
                  return numA - numB;
                }
                return 0;
              });
            
            console.log('Mensalidades encontradas:', mensalidadesPatinagem);
            
            return (
              <>
                <h3 className="text-2xl font-bold mb-2 text-blue-900">
                  {esc.nome}
                </h3>
                {esc.descricao && (
                  <p className="mb-2 text-gray-700 text-base text-center">
                    {esc.descricao}
                  </p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                  {mensalidadesPatinagem.map((mensalidade, index) => {
                    return (
                      <div key={index} className="flex flex-col items-center">
                        <h4 className="text-xl font-bold text-blue-900 mb-4">
                          {mensalidade.observacoes || "Mensalidade"}
                        </h4>
                        <div className="w-full bg-blue-100 rounded-xl shadow-md border border-blue-200 overflow-hidden">
                          <div className="bg-blue-200 py-3 text-center">
                            <p className="font-semibold text-blue-900">Mensalidade</p>
                          </div>
                          <div className="p-6 text-center">
                            <p className="text-2xl font-bold text-blue-800">{mensalidade.valor} €</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {mensalidadesPatinagem.length === 0 && (
                  <div className="mt-4 text-xs text-red-600 text-center">
                    <strong>Sem preços de mensalidade para este escalão!</strong>
                  </div>
                )}
                
                {(esc.idade_minima || esc.idade_maxima) && (
                  <div className="mt-6 text-base text-gray-700 text-center">
                    {esc.idade_minima && esc.idade_maxima
                      ? `Idades: ${esc.idade_minima} - ${esc.idade_maxima} anos`
                      : esc.idade_minima
                      ? `A partir dos ${esc.idade_minima} anos`
                      : esc.idade_maxima
                      ? `Até aos ${esc.idade_maxima} anos`
                      : null}
                  </div>
                )}
              </>
            );
          }

          // Comportamento padrão para TODAS as outras modalidades
          console.log('⚙️ Renderizando comportamento padrão');
          
          const mensalidades = precos.filter(
            (p: any) => p.tipo?.toLowerCase() === "mensalidade"
          );
          
          console.log('Mensalidades encontradas:', mensalidades);
          
          // Usar valores do escalão atual OU valores globais
          const inscricaoEscalao = precos.find(
            (p: any) =>
              p.tipo?.toLowerCase() === "inscrição" ||
              p.tipo?.toLowerCase() === "inscricao"
          );
          const renovacaoEscalao = precos.find(
            (p: any) =>
              p.tipo?.toLowerCase() === "renovação" ||
              p.tipo?.toLowerCase() === "renovacao"
          );
          const seguroEscalao = precos.find(
            (p: any) => p.tipo?.toLowerCase() === "seguro"
          );

          console.log('Valores do escalão atual:');
          console.log('  - Inscrição escalão:', inscricaoEscalao);
          console.log('  - Renovação escalão:', renovacaoEscalao);
          console.log('  - Seguro escalão:', seguroEscalao);

          // Usar valores do escalão ou fallback para valores globais
          const inscricao = inscricaoEscalao || inscricaoGlobal;
          const renovacao = renovacaoEscalao || renovacaoGlobal;
          const seguro = seguroEscalao || seguroGlobal;
          
          console.log('Valores finais a usar:');
          console.log('  - Inscrição final:', inscricao);
          console.log('  - Renovação final:', renovacao);
          console.log('  - Seguro final:', seguro);
          
          // Verificar se é veteranos ou seniores para esconder inscrição/seguro
          const isVeteranosOuSeniores = esc.nome.toLowerCase() === "veteranos" || esc.nome.toLowerCase() === "seniores";
          
          console.log('É veteranos ou seniores?', isVeteranosOuSeniores);
          console.log('Deve mostrar inscrição?', inscricao && !isVeteranosOuSeniores);
          console.log('Deve mostrar renovação?', renovacao && !isVeteranosOuSeniores);
          console.log('Deve mostrar seguro?', seguro && !isVeteranosOuSeniores);
          
          return (
            <>
              <h3 className="text-2xl font-bold mb-2 text-blue-900">
                {esc.nome}
              </h3>
              {esc.descricao && (
                <p className="mb-2 text-gray-700 text-base text-center">
                  {esc.descricao}
                </p>
              )}
              <div className="flex flex-row flex-wrap gap-6 justify-center items-center w-full mt-4">
                {/* Mensalidade - SEMPRE mostrar */}
                {mensalidades.length > 0 && (
                  <div className="w-[200px] h-[200px] bg-blue-200 rounded-xl px-4 py-4 flex flex-col items-center justify-center shadow border border-blue-400">
                    <span className="text-lg font-semibold text-blue-900 mb-2">
                      Mensalidade
                    </span>
                    {mensalidades.length === 1 ? (
                      <span className="text-2xl font-bold text-blue-800 mb-2">
                        {mensalidades[0].valor} €
                      </span>
                    ) : (
                      <div className="flex flex-col gap-2 items-center">
                        <span className="text-base font-bold text-blue-800">
                          Feminino: {mensalidades[0]?.valor ?? "-"} €
                        </span>
                        <span className="text-base font-bold text-blue-800">
                          Masculino: {mensalidades[1]?.valor ?? "-"} €
                        </span>
                      </div>
                    )}
                    {esc.nome.toLowerCase() === "seniores" &&
                      mensalidades[0]?.observacoes && (
                        <span className="text-xs text-blue-700 text-center mt-1">
                          {mensalidades[0].observacoes}
                        </span>
                      )}
                    {esc.nome.toLowerCase() === "veteranos" && (
                      <span className="text-xs text-blue-700 text-center mt-1">
                        Preço anual
                      </span>
                    )}
                  </div>
                )}
                
                {/* Inscrição - MOSTRAR EM TODOS, EXCETO veteranos e seniores */}
                {inscricao && !isVeteranosOuSeniores && (
                  <div className="w-[200px] h-[200px] bg-yellow-200 rounded-xl px-4 py-4 flex flex-col items-center justify-center shadow border border-yellow-400">
                    <span className="text-lg font-semibold text-yellow-900 mb-2">
                      Inscrição
                    </span>
                    <span className="text-2xl font-bold text-yellow-800 mb-2">
                      {inscricao.valor} €
                    </span>
                    {inscricao.observacoes && (
                      <span className="text-xs text-yellow-700 text-center mt-1">
                        {inscricao.observacoes}
                      </span>
                    )}
                  </div>
                )}
                
                {/* Renovação - MOSTRAR EM TODOS, EXCETO veteranos e seniores */}
                {renovacao && !isVeteranosOuSeniores && (
                  <div className="w-[200px] h-[200px] bg-purple-200 rounded-xl px-4 py-4 flex flex-col items-center justify-center shadow border border-purple-400">
                    <span className="text-lg font-semibold text-purple-900 mb-2">
                      Renovação
                    </span>
                    <span className="text-2xl font-bold text-purple-800 mb-2">
                      {renovacao.valor} €
                    </span>
                    {renovacao.observacoes && (
                      <span className="text-xs text-purple-700 text-center mt-1">
                        {renovacao.observacoes}
                      </span>
                    )}
                  </div>
                )}
                
                {/* Seguro - MOSTRAR EM TODOS, EXCETO veteranos e seniores */}
                {seguro && !isVeteranosOuSeniores && (
                  <div className="w-[200px] h-[200px] bg-green-200 rounded-xl px-4 py-4 flex flex-col items-center justify-center shadow border border-green-400">
                    <span className="text-lg font-semibold text-green-900 mb-2">
                      Seguro
                    </span>
                    <span className="text-2xl font-bold text-green-800 mb-2">
                      {seguro.valor} €
                    </span>
                    {seguro.observacoes && (
                      <span className="text-xs text-green-700 text-center mt-1">
                        {seguro.observacoes}
                      </span>
                    )}
                  </div>
                )}
              </div>
              
              {precos.length === 0 && (
                <div className="mt-4 text-xs text-red-600 text-center">
                  <strong>Sem preços associados para este escalão!</strong>
                </div>
              )}
              
              {(esc.idade_minima || esc.idade_maxima) && (
                <div className="mt-6 text-base text-gray-700 text-center">
                  {esc.idade_minima && esc.idade_maxima
                    ? `Idades: ${esc.idade_minima} - ${esc.idade_maxima} anos`
                    : esc.idade_minima
                    ? `A partir dos ${esc.idade_minima} anos`
                    : esc.idade_maxima
                    ? `Até aos ${esc.idade_maxima} anos`
                    : null}
                </div>
              )}
            </>
          );
        })()}
      </div>
      
      {isPatinagem && (
        <div className="mt-4 text-base text-blue-700 text-center">
          <strong>Nota:</strong> A época da patinagem é de janeiro a dezembro.
        </div>
      )}
    </div>
  );
}