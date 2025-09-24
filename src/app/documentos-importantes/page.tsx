"use client";
import { useState, ReactNode } from "react";
import Link from "next/link";

function AccordionSection({ title, children, defaultOpen = false }: { title: string; children: ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-blue-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-5 py-3 text-left font-semibold text-blue-800 hover:bg-blue-50 transition"
      >
        <span>{title}</span>
        <span className="text-sm">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="px-5 pb-4 pt-2 space-y-2 text-sm">{children}</div>}
    </div>
  );
}

export default function DocumentosImportantesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-100 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 text-center drop-shadow">
          Documentação Importante
        </h1>

        <div className="bg-white rounded-2xl shadow-xl border border-blue-200 p-8 space-y-10">
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Estatutos / Regulamentos</h2>
            <Link
              href="/files/pdf/estatutos-regulamento-geral-interno.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Estatutos e Regulamento Geral Interno
            </Link>
          </section>

          <section className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900">Relatórios de Contas / Atividades</h2>

            <AccordionSection title="2024 - 2020" >
              <a href="/files/pdf/relatorios-de-contas/Relatorio-contas-2024.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline block">2024</a>
              <a href="/files/pdf/relatorios-de-contas/Relatorio-de-contas_GCO_2023.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline block">2023</a>
              <a href="/files/pdf/relatorios-de-contas/Relatorio-de-contas_GCO_2022.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline block">2022</a>
              <a href="/files/pdf/relatorios-de-contas/Relatorio-contas-2021.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline block">2021</a>
              <a href="/files/pdf/relatorios-de-contas/GCO-Relatorio-Contas-2020.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline block">2020</a>
            </AccordionSection>

            <AccordionSection title="2019 - 2014">
              <a href="/files/pdf/relatorios-de-contas/relatorio-contas-2019.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline block">2019</a>
              <a href="/files/pdf/relatorios-de-contas/relatorio-contas-2018.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline block">2018</a>
              <a href="/files/pdf/relatorios-de-contas/relatorio-contas-2017.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline block">2017</a>
              <a href="/files/pdf/relatorios-de-contas/relatorio-contas-2016.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline block">2016</a>
              <a href="/files/pdf/relatorios-de-contas/relatorio-contas-2015.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline block">2015</a>
              <a href="/files/pdf/relatorios-de-contas/relatorio-contas-2014.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline block">2014</a>
            </AccordionSection>
          </section>
        </div>

        
      </div>
    </main>
  );
}