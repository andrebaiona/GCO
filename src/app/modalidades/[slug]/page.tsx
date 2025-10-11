import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { fetchModalidadeBySlug, fetchAllModalidadeSlugs } from "@/data/modalidades-db";
import TabsEscaloes from "@/components/TabsEscaloes";
import NoticiaCard from "@/components/cards/NoticiaCard";
import { fetchNoticias } from "@/data/noticias-db";
import { fetchPrecosPorModalidade } from "@/data/modalidades-db";
import React from 'react';
import type { FC } from "react";


const globals = {
  days: ['2.ª', '3.ª', '4.ª', '5.ª', '6.ª', 'Sábado', 'Domingo'],
  startHour: '09:00',
  endHour: '21:30',
  slotMinutes: 30,
  timezone: 'Europe/Lisbon'
  };

const schedule_patinagem = [
  { day: '2.ª', start: '17:00', end: '19:00', title: 'Iniciação | Pré-Competição | Competição', room: 'Casal do Rato', color: 'var(--blue-400)' },
  { day: '3.ª', start: '17:00', end: '18:00', title: 'Iniciação | Pré-C. | Competição', room: 'GCO', color: 'var(--blue-400)' },
  { day: '3.ª', start: '18:00', end: '19:00', title: 'Preparação Física', room: 'GCO', color: 'var(--yellow-500)' },
  { day: '3.ª', start: '18:00', end: '19:00', title: 'Minis', room: 'GCO', color: 'var(--blue-900)' },
  { day: '3.ª', start: '19:00', end: '20:00', title: 'Iniciação | Pré-C. | Competição', room: 'GCO', color: 'var(--blue-400)' },
  { day: '3.ª', start: '20:00', end: '20:30', title: 'Competição', room: '', color: 'var(--blue-500)' },
  { day: '4.ª', start: '17:00', end: '19:00', title: 'Iniciação | Pré-Competição | Competição', room: 'Casal do Rato', color: 'var(--blue-400)' },
  { day: '5.ª', start: '17:00', end: '18:00', title: 'Iniciação | Pré-C. | Competição', room: 'GCO', color: 'var(--blue-400)' },
  { day: '5.ª', start: '18:00', end: '19:00', title: 'Preparação Física', room: 'GCO', color: 'var(--yellow-500)' },
  { day: '5.ª', start: '18:00', end: '19:00', title: 'Minis', room: 'GCO', color: 'var(--blue-900)' },
  { day: '5.ª', start: '19:00', end: '20:00', title: 'Iniciação | Pré-C. | Competição', room: 'GCO', color: 'var(--blue-400)' },
  { day: '5.ª', start: '20:00', end: '20:30', title: 'Competição', room: '', color: 'var(--blue-500)' },
  { day: '6.ª', start: '17:00', end: '19:00', title: 'Iniciação | Pré-C. | Competição', room: 'Casal do Rato', color: 'var(--blue-400)' },
  { day: 'Sábado', start: '12:00', end: '13:00', title: 'Minis', room: 'GCO', color: 'var(--blue-900)' },
  { day: 'Sábado', start: '13:00', end: '14:00', title: 'Pré-Competição | Competição', room: 'GCO', color: 'var(--blue-400)' },
  { day: 'Sábado', start: '14:00', end: '15:00', title: 'Iniciação', room: 'GCO', color: 'var(--blue-500)' },
  { day: 'Domingo', start: '10:30', end: '11:30', title: 'Solo Dance', room: 'GCO', color: 'green' },
  { day: 'Domingo', start: '11:30', end: '12:30', title: 'Solo Dance', room: 'GCO', color: 'green' },
  { day: 'Domingo', start: '12:30', end: '13:30', title: 'Solo Dance', room: 'GCO', color: 'green' }
];

const schedule_ginastica = [
  { day: '2.ª', start: '17:00', end: '20:00', title: 'Competição', room: '', color: 'var(--blue-900)' },
  { day: '2.ª', start: '17:30', end: '18:15', title: 'Infantil', room: '', color: 'var(--blue-400)' },
  { day: '2.ª', start: '18:15', end: '19:00', title: 'Formativa I', room: '', color: 'var(--blue-500)' },
  { day: '2.ª', start: '19:00', end: '20:00', title: 'Pré-Competição', room: '', color: 'var(--blue-700)' },
  { day: '4.ª', start: '17:00', end: '21:00', title: 'Competição', room: '', color: 'var(--blue-900)' },
  { day: '4.ª', start: '17:30', end: '18:15', title: 'Infantil', room: '', color: 'var(--blue-400)' },
  { day: '4.ª', start: '18:15', end: '19:00', title: 'Formativa II', room: '', color: 'var(--blue-600)' },
  { day: '4.ª', start: '19:00', end: '20:00', title: 'Pré-Competição', room: '', color: 'var(--blue-700)' },
  { day: '6.ª', start: '17:45', end: '20:00', title: 'Competição', room: '', color: 'var(--blue-900)' },
  { day: '6.ª', start: '17:45', end: '18:30', title: 'Formativa(II)', room: '', color: 'var(--blue-600)' },
  { day: '6.ª', start: '18:15', end: '19:00', title: 'Formativa(I)', room: '', color: 'var(--blue-500)' },
  { day: '6.ª', start: '19:00', end: '20:00', title: 'Pré-Competição', room: '', color: 'var(--blue-700)' },
  { day: 'Sábado', start: '09:00', end: '12:00', title: 'Competição', room: '', color: 'var(--blue-900)' }
];

type Event = {
day: string;
start: string;
end: string;
title: string;
room?: string;
color?: string;
};


function timeToMinutes(t: string) {
const [h, m] = t.split(':').map(Number);
return h * 60 + m;
}


type CalendarProps = {
  events: Event[];
};

const Calendar: FC<CalendarProps> = ({ events }) => {
  const { days, startHour, endHour, slotMinutes } = globals;
  const startMin = timeToMinutes(startHour);
  const endMin = timeToMinutes(endHour);
  const totalSlots = Math.ceil((endMin - startMin) / slotMinutes);
  const slotHeight = 40;

  // Agrupar eventos por dia
  const eventsByDay: Record<string, Event[]> = {};
  for (const d of days) eventsByDay[d] = [];
  for (const ev of events) {
    if (!eventsByDay[ev.day]) eventsByDay[ev.day] = [];
    eventsByDay[ev.day].push(ev);
  }

function distributeColumns(events: Event[]) {
  if (!events.length) return [];
  const sorted = [...events].sort((a, b) => timeToMinutes(a.start) - timeToMinutes(b.start));
  const columns: Event[][] = [];

  sorted.forEach(ev => {
    let placed = false;
    for (const col of columns) {
      const lastInCol = col[col.length - 1];
      if (timeToMinutes(ev.start) >= timeToMinutes(lastInCol.end)) {
        col.push(ev);
        placed = true;
        break;
      }
    }
    if (!placed) columns.push([ev]);
  });

  const positioned: Array<Event & { left: number; width: number }> = [];
  columns.forEach((col, colIndex) => {
    const width = 100 / columns.length;
    col.forEach(ev => {
      positioned.push({
        ...ev,
        left: colIndex * width,
        width,
      });
    });
  });

  return positioned;
}


  return (
    <section className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 mb-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4 sm:mb-6 text-center sm:text-left">
        Horário de Treinos
      </h2>

      <div className="overflow-x-auto overflow-y-hidden rounded-xl">
        <div className="grid grid-cols-[80px_repeat(7,minmax(180px,1fr))] sm:grid-cols-[80px_repeat(7,minmax(200px,1fr))] md:grid-cols-[80px_repeat(7,minmax(220px,1fr))] gap-[1px] sm:gap-2 min-w-[1300px]">
          <div />
          {days.map(d => (
            <div key={d} className="text-center font-semibold text-[11px] sm:text-[13px] md:text-[14px] text-blue-800 py-1 border-b border-blue-50">{d}</div>
          ))}

          <div className="flex flex-col text-[9px] sm:text-[11px] text-gray-600 border-r border-blue-200">
            {Array.from({ length: totalSlots }).map((_, i) => {
              const mins = startMin + i * slotMinutes;
              const hh = String(Math.floor(mins / 60)).padStart(2, "0");
              const mm = String(mins % 60).padStart(2, "0");
              return (
                <div key={i} className="h-10 sm:h-10 md:h-12 text-right pr-2 border-b border-blue-50 flex items-center justify-end" style={{ height: slotHeight }}>
                  {`${hh}:${mm}`}
                </div>
              );
            })}
          </div>

          {days.map(d => {
            const positioned = distributeColumns(eventsByDay[d]);
            return (
              <div key={d} className="relative border-l border-blue-200" style={{ minHeight: totalSlots * slotHeight }}>
                {Array.from({ length: totalSlots }).map((_, i) => (
                  <div key={i} className="border-b border-blue-50" style={{ height: slotHeight }} />
                ))}

                {positioned.map((ev, idx) => {
                  const top = ((timeToMinutes(ev.start) - startMin) / slotMinutes) * slotHeight;
                  const height = ((timeToMinutes(ev.end) - timeToMinutes(ev.start)) / slotMinutes) * slotHeight;
                  return (
                    <div key={idx} className="absolute rounded-md sm:rounded-lg p-[2px] sm:p-2 text-[8px] sm:text-[10px] md:text-xs text-white shadow-md"
                      style={{ top: `${top}px`, height: `${height}px`, left: `${ev.left}%`, width: `${ev.width}%`, backgroundColor: ev.color }}>
                      <div className="font-semibold text-[9px] sm:text-[10px] md:text-[11px] leading-tight">{ev.title}</div>
                      <div className="hidden sm:block text-[8px] sm:text-[9px] text-yellow-100">{ev.room}</div>
                      <div className="text-[7px] sm:text-[8px] md:text-[9px] opacity-80">{ev.start} — {ev.end}</div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};




// === PÁGINA PRINCIPAL ===
export default async function ModalidadePage(props: any) {
  const params = await props.params;
  const { slug } = params;
  const modalidade = await fetchModalidadeBySlug(slug);

  if (!modalidade) notFound();

  const noticias = await fetchNoticias(100);
  const normalize = (str: string) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const noticiasModalidade = noticias
    .filter(
      noticia =>
        noticia.categoria &&
        normalize(noticia.categoria) === normalize(modalidade.nome)
    )
    .slice(0, 2);

  let escalas = modalidade.escalao || [];

  // Ordenar escalões especificamente para patinagem
  if (slug === 'patinagem-artistica') {
    escalas = escalas.sort((a, b) => {
      const ordemPatinagem = [
        { pattern: "minis", order: 1 },
        { pattern: "iniciação", order: 2 },
        { pattern: "iniciacao", order: 2 },
        { pattern: "pré-competição", order: 3 },
        { pattern: "pre-competição", order: 3 },
        { pattern: "pre-competicao", order: 3 },
        { pattern: "competição", order: 4 },
        { pattern: "competicao", order: 4 }
      ];

      const nomeA = a.nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[-\\s]/g, "").trim();
      const nomeB = b.nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[-\\s]/g, "").trim();

      const findOrder = (nome: string) => {
        for (const item of ordemPatinagem) {
          const pattern = item.pattern.replace(/[-\\s]/g, "").trim();
          if (nome.includes(pattern)) return item.order;
        }
        return 999;
      };

      const orderA = findOrder(nomeA);
      const orderB = findOrder(nomeB);
      if (orderA !== orderB) return orderA - orderB;
      return a.id - b.id;
    });
  }

  const precos = await fetchPrecosPorModalidade(modalidade.id);
  const precosPorEscalao: { [escalao: string]: Array<{ tipo: string, valor: number, observacoes: string }> } = {};

  precos.forEach(preco => {
    const escalaoNormalizado = preco.escalao.trim();
    if (!precosPorEscalao[escalaoNormalizado]) {
      precosPorEscalao[escalaoNormalizado] = [];
    }
    precosPorEscalao[escalaoNormalizado].push({
      tipo: preco.tipo ?? "",
      valor: preco.valor !== null ? Number(preco.valor) : 0,
      observacoes: preco.observacoes ?? ""
    });
  });

  const escaloesComPrecos = escalas.map(escalao => {
    const escalaoNormalizado = escalao.nome.trim();
    const precosDoEscalao = precosPorEscalao[escalaoNormalizado] || [];
    return { ...escalao, preco_escalao: precosDoEscalao };
  });

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">Início</Link>
            <span>/</span>
            <Link href="/modalidades" className="hover:text-blue-600 transition-colors">Modalidades</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{modalidade.nome}</span>
          </div>
        </nav>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl overflow-hidden mb-10 flex flex-col md:flex-row items-center p-8 gap-8">
          <div className="bg-white rounded-2xl shadow-lg flex items-center justify-center w-32 h-32">
            {modalidade.icone && modalidade.icone.startsWith("/") ? (
              <Image
                src={modalidade.icone || "/default.png"}
                alt={modalidade.nome}
                width={120}
                height={120}
                className="object-contain"
              />
            ) : (
              <span className="text-6xl">{modalidade.icone ?? "🏅"}</span>
            )}
          </div>
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-white drop-shadow-lg">{modalidade.nome}</h1>
            <p className="text-lg md:text-xl text-blue-100 mb-4 font-medium">{modalidade.descricao ?? ""}</p>
          </div>
        </section>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-900 p-4 mb-10 rounded-xl shadow">
          <p className="font-semibold text-lg flex items-center">
            É necessário ser sócio para praticar qualquer modalidade no GCO.
          </p>
        </div>

        {(modalidade.slug !== "xadrez" && modalidade.slug !== "hoquei-em-patins") && (
          <section className="bg-white rounded-2xl shadow-lg p-8 mb-10">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Escalões</h2>
            <TabsEscaloes escaloes={escaloesComPrecos} />
          </section>
        )}

        {modalidade.slug === "hoquei-em-patins" && (
          <section className="bg-white rounded-2xl shadow-lg p-8 mb-10">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Escalões</h2>
            <ul className="w-full max-w-xl mx-auto flex flex-col gap-4">
              {[...modalidade.escalao].sort((a, b) => {
                const ordem = [
                  "Manitas/Bâmbis/Minis",
                  "Sub-14", "Sub/14",
                  "Sub-16 M", "Sub-16 F",
                  "Sub-18",
                  "Seniores",
                  "Veteranos"
                ];
                const nomeA = a.nome.toLowerCase();
                const nomeB = b.nome.toLowerCase();
                const idxA = ordem.findIndex(o => nomeA.includes(o.toLowerCase()));
                const idxB = ordem.findIndex(o => nomeB.includes(o.toLowerCase()));
                if (idxA !== -1 && idxB !== -1) return idxA - idxB;
                if (idxA !== -1) return -1;
                if (idxB !== -1) return 1;
                return a.id - b.id;
              }).map((esc: any) => (
                <li key={esc.id} className="bg-gray-100 rounded-xl px-6 py-4 text-xl font-semibold text-blue-900 shadow text-center">
                  {esc.nome}
                </li>
              ))}
            </ul>
          </section>
        )}

        {(slug === "patinagem-artistica" || slug === "ginastica") && (
          <Calendar events={slug === "patinagem-artistica" ? schedule_patinagem : schedule_ginastica} />
        )}


        <section className="bg-white rounded-2xl shadow-lg p-8 mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Notícias de {modalidade.nome}
          </h2>
          {noticiasModalidade.length === 0 ? (
            <p className="text-gray-500">Ainda não existem notícias para esta modalidade.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {noticiasModalidade.map((noticia) => (
                <NoticiaCard key={noticia.id} noticia={noticia} />
              ))}
            </div>
          )}
          <div className="mt-6 text-right">
            <Link
              href="/noticias"
              className="text-blue-700 hover:underline font-semibold"
            >
              Ver todas as notícias
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const slugs = await fetchAllModalidadeSlugs();
  return slugs.map((modalidade: { slug: string }) => ({ slug: modalidade.slug }));
}
