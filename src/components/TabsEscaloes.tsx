"use client";
import { useState } from "react";

type Escalao = {
  id: number;
  nome: string;
  idade_minima?: number | null;
  idade_maxima?: number | null;
  descricao?: string | null;
  preco_escalao?: { tipo: string; valor: number; observacoes?: string | null }[];
  preco_escalaos?: { tipo: string; valor: number; observacoes?: string | null }[];
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
  const escaloesToShow = escaloes;

  return (
    <div>
      {/* Tabs in two rows if more than 5 */}
      <div className="mb-6">
        <div className="flex border-b border-gray-300">
          {escaloes.slice(0, 5).map((esc, idx) => (
            <button
              key={esc.id}
              className={`flex-1 py-3 text-lg font-semibold transition-colors duration-150 ${activeTab === idx ? 'border-b-4 border-blue-600 text-blue-900 bg-white' : 'text-gray-500 bg-gray-100'} focus:outline-none`}
              onClick={() => setActiveTab(idx)}
            >
              {esc.nome}
            </button>
          ))}
        </div>
        {escaloes.length > 5 && (
          <div className="flex border-b border-gray-300">
            {escaloes.slice(5).map((esc, idx) => (
              <button
                key={esc.id}
                className={`flex-1 py-3 text-lg font-semibold transition-colors duration-150 ${activeTab === idx + 5 ? 'border-b-4 border-blue-600 text-blue-900 bg-white' : 'text-gray-500 bg-gray-100'} focus:outline-none`}
                onClick={() => setActiveTab(idx + 5)}
              >
                {esc.nome}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="p-8 bg-white rounded-xl shadow flex flex-col items-center border border-blue-100">
        {(() => {
          const esc = escaloes[activeTab];
          const mensalidade = esc.preco_escalaos?.find((p: any) => p.tipo.toLowerCase() === "mensalidade");
          const inscricao = esc.preco_escalaos?.find((p: any) => p.tipo.toLowerCase() === "inscrição" || p.tipo.toLowerCase() === "inscricao");
          const seguro = esc.preco_escalaos?.find((p: any) => p.tipo.toLowerCase() === "seguro" && p.escalao?.toLowerCase() === "todos");
          return (
            <>
              <h3 className="text-2xl font-bold mb-2 text-blue-900">{esc.nome}</h3>
              {esc.descricao && (
                <p className="mb-2 text-gray-700 text-base text-center">{esc.descricao}</p>
              )}
              <div className="flex flex-row gap-6 w-full mt-4 justify-center">
                {mensalidade && (
                  <div className="flex-1 bg-blue-50 rounded-lg px-4 py-4 flex flex-col items-center border border-blue-200">
                    <span className="text-base font-semibold text-blue-900 mb-1">Mensalidade</span>
                    <span className="text-xl font-bold text-blue-800 mb-1">{mensalidade.valor} €</span>
                    {mensalidade.observacoes && (
                      <span className="text-xs text-blue-700 text-center mt-1">{mensalidade.observacoes}</span>
                    )}
                  </div>
                )}
                {inscricao && (
                  <div className="flex-1 bg-yellow-50 rounded-lg px-4 py-4 flex flex-col items-center border border-yellow-200">
                    <span className="text-base font-semibold text-yellow-900 mb-1">Inscrição</span>
                    <span className="text-xl font-bold text-yellow-800 mb-1">{inscricao.valor} €</span>
                    {inscricao.observacoes && (
                      <span className="text-xs text-yellow-700 text-center mt-1">{inscricao.observacoes}</span>
                    )}
                  </div>
                )}
                {seguro && (
                  <div className="flex-1 bg-green-50 rounded-lg px-4 py-4 flex flex-col items-center border border-green-200">
                    <span className="text-base font-semibold text-green-900 mb-1">Seguro</span>
                    <span className="text-xl font-bold text-green-800 mb-1">{seguro.valor} €</span>
                    {seguro.observacoes && (
                      <span className="text-xs text-green-700 text-center mt-1">{seguro.observacoes}</span>
                    )}
                  </div>
                )}
              </div>
              {(!esc.preco_escalaos || esc.preco_escalaos.length === 0) && (
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
    </div>
  );
}

