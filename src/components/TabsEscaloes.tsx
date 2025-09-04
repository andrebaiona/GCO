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
  preco_escalaos?: {
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

  function getExtraInfo(
    precos: { tipo?: string; valor?: number; observacoes?: string | null }[]
  ) {
    const info: string[] = [];
    const inscricao = precos.find(
      (p) =>
        p.tipo?.toLowerCase() === "inscrição" ||
        p.tipo?.toLowerCase() === "inscricao"
    );
    if (inscricao) {
      let msg = `Inscrição: ${inscricao.valor} €`;
      if (inscricao.observacoes) msg += ` (${inscricao.observacoes})`;
      info.push(msg);
    }
    const renovacao = precos.find(
      (p) =>
        p.tipo?.toLowerCase() === "renovação" ||
        p.tipo?.toLowerCase() === "renovacao"
    );
    if (renovacao) {
      let msg = `Renovação: ${renovacao.valor} €`;
      if (renovacao.observacoes) msg += ` (${renovacao.observacoes})`;
      info.push(msg);
    }
    const seguro = precos.find((p) => p.tipo?.toLowerCase() === "seguro");
    if (seguro) {
      let msg = `Seguro: ${seguro.valor} €`;
      if (seguro.observacoes) msg += ` (${seguro.observacoes})`;
      info.push(msg);
    }
    return info;
  }

  // Detecta se é página do Andebol (client-only)
  // Use useEffect to avoid SSR/CSR mismatch
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsAndebol(window.location.pathname.includes("/modalidades/andebol"));
    }
  }, []);

  return (
    <div>
      <div className="mb-6">
        <div className="flex border-b border-gray-300">
          {escaloes.slice(0, 3).map((esc, idx) => (
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
        {escaloes.length > 3 && (
          <div className="flex border-b border-gray-300">
            {escaloes.slice(3).map((esc, idx) => (
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
          const esc = escaloes[activeTab];
          const precos = esc.preco_escalao || [];

          // Caso especial: Andebol → Séniores
          if (isAndebol && esc.nome.toLowerCase() === "seniores") {
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

          // 👉 resto do código original (todas as outras modalidades e escalões)
          const mensalidades = precos.filter(
            (p: any) => p.tipo?.toLowerCase() === "mensalidade"
          );
          const inscricao = precos.find(
            (p: any) =>
              p.tipo?.toLowerCase() === "inscrição" ||
              p.tipo?.toLowerCase() === "inscricao"
          );
          const renovacao = precos.find(
            (p: any) =>
              p.tipo?.toLowerCase() === "renovação" ||
              p.tipo?.toLowerCase() === "renovacao"
          );
          const seguro = precos.find(
            (p: any) => p.tipo?.toLowerCase() === "seguro"
          );
          const extraInfo = getExtraInfo(precos);
          const totalInscricaoSeguro =
            inscricao && seguro ? inscricao.valor + seguro.valor : null;
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
                {inscricao && (
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
                {renovacao && (
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
                {seguro && esc.nome.toLowerCase() !== "veteranos" && esc.nome.toLowerCase() !== "seniores" && (
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
    </div>
  );
}

