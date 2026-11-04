"use client";

import { useState } from "react";
import Link from "next/link";
import HorarioCalendar, { type Event } from "@/components/HorarioCalendar";

export type HorarioModalidade = {
  id: number;
  nome: string;
  slug: string;
  events: Event[];
};

/** One calendar, switched between modalidades with tabs. */
export default function HorariosTabs({ modalidades }: { modalidades: HorarioModalidade[] }) {
  const [activeId, setActiveId] = useState(modalidades[0]?.id);
  const active = modalidades.find((m) => m.id === activeId) ?? modalidades[0];
  if (!active) return null;

  return (
    <div>
      <div role="tablist" aria-label="Modalidades" className="mb-6 flex flex-wrap justify-center gap-2">
        {modalidades.map((m) => {
          const selected = m.id === active.id;
          return (
            <button
              key={m.id}
              role="tab"
              type="button"
              id={`tab-${m.id}`}
              aria-selected={selected}
              aria-controls="horario-painel"
              onClick={() => setActiveId(m.id)}
              className={`rounded-full px-5 py-2 text-sm font-semibold shadow transition-colors ${
                selected ? "bg-blue-800 text-white" : "bg-white text-blue-900 hover:bg-blue-50"
              }`}
            >
              {m.nome}
            </button>
          );
        })}
      </div>

      <div id="horario-painel" role="tabpanel" aria-labelledby={`tab-${active.id}`}>
        <HorarioCalendar
          events={active.events}
          title={
            <Link href={`/modalidades/${active.slug}`} className="hover:text-blue-600 transition-colors">
              Horário de {active.nome}
            </Link>
          }
        />
      </div>
    </div>
  );
}
