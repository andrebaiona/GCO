"use client";
import { useState } from "react";

export default function TabsEscaloes({ escalas, modalidade }: { escalas: string[]; modalidade: any }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div className="flex gap-2 mb-6">
        {escalas.map((escalao: string, idx: number) => (
          <button
            key={escalao}
            className={`px-4 py-2 rounded-lg font-semibold transition-all border-b-2 ${activeTab === idx ? "border-blue-600 text-blue-600 bg-blue-50" : "border-transparent text-gray-600 bg-gray-100"}`}
            onClick={() => setActiveTab(idx)}
          >
            {escalao}
          </button>
        ))}
      </div>
      <div className="p-4 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-bold mb-2 text-blue-800">{escalas[activeTab]}</h3>
        <p className="mb-2 text-gray-700">Aqui podes mostrar info específica do escalão selecionado, como requisitos, preços, horários, equipa, etc.</p>
      </div>
    </div>
  );
}
