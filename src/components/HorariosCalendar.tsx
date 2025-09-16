"use client";
import React, { useState } from 'react';
import { Calendar, Views, dateFnsLocalizer } from 'react-big-calendar';
import { format } from 'date-fns/format';
import { parse } from 'date-fns/parse';
import { startOfWeek } from 'date-fns/startOfWeek';
import { getDay } from 'date-fns/getDay';
import { pt } from 'date-fns/locale/pt';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = { 'pt': pt };
const localizer = dateFnsLocalizer({
  format: (date: Date, _formatStr: string, _options: any) => {
    if (_formatStr === 'p' || _formatStr === 'Pp' || _formatStr === 'hh:mm a') {
      const h = date.getHours().toString().padStart(2, '0');
      const m = date.getMinutes().toString().padStart(2, '0');
      return `${h}:${m}`;
    }
    return format(date, _formatStr, { locale: pt });
  },
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

export default function HorariosCalendar({ events }: { events: any[] }) {
  const [modalidade, setModalidade] = useState<string | null>(null);
  const defaultDate = new Date();
  // Modalidades e respetivas cores
  const modalidades = [
    {
      nome: 'Ginástica',
      cor: 'bg-gradient-to-r from-blue-600 to-blue-400 border-2 border-blue-700',
      filtro: (t: string) => t.toLowerCase().includes('ginástica'),
    },
    {
      nome: 'Andebol',
      cor: 'bg-gradient-to-r from-green-500 to-green-300 border-2 border-green-600',
      filtro: (t: string) => t.toLowerCase().includes('andebol'),
    },
    {
      nome: 'Patinagem',
      cor: 'bg-gradient-to-r from-orange-400 to-yellow-300 border-2 border-orange-500',
      filtro: (t: string) => t.toLowerCase().includes('patinagem'),
    },
  ];

  // Filtra eventos se houver modalidade selecionada
  const filteredEvents = modalidade
    ? events.filter(e => modalidades.find(m => m.nome === modalidade)?.filtro(e.title))
    : events;

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 via-white to-blue-100 overflow-hidden py-8 px-4">
      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl px-2 md:px-8 py-8 md:py-14 rounded-3xl shadow-2xl bg-gradient-to-br from-white via-blue-50 to-blue-100/80 backdrop-blur-md border-2 border-blue-300">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-blue-900 tracking-tight drop-shadow-xl uppercase text-center">Horários Semanais</h1>
        {/* Botões de filtro por modalidade */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {modalidades.map((m) => (
            <button
              key={m.nome}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-white shadow-md transition-all duration-150 border ${m.cor} ${modalidade === m.nome ? 'scale-105 ring-4 ring-blue-200' : 'opacity-90 hover:scale-105 hover:ring-2 hover:ring-blue-200'}`}
              onClick={() => setModalidade(modalidade === m.nome ? null : m.nome)}
              type="button"
            >
              {m.nome}
            </button>
          ))}
        </div>
        <div className="w-full">
          <Calendar
            localizer={localizer}
            events={filteredEvents}
            defaultView={Views.WEEK}
            views={{ week: true }}
            defaultDate={defaultDate}
            style={{ height: 1100, background: 'transparent', borderRadius: '1.5rem', boxShadow: '0 4px 32px rgba(59,130,246,0.10)', padding: '0.5rem' }}
            min={new Date(1970, 0, 1, 8, 0, 0)}
            max={new Date(1970, 0, 1, 23, 59, 59)}
            step={60}
            timeslots={1}
            popup
            messages={{
              week: 'Semana',
              today: 'Hoje',
              previous: 'Anterior',
              next: 'Seguinte',
              noEventsInRange: 'Sem eventos nesta semana.',
              showMore: (total: number) => `+${total} mais`,
              date: 'Data',
              time: 'Hora',
              event: 'Evento',
              work_week: 'Semana útil',
              agenda: 'Agenda',
              day: 'Dia',
              month: 'Mês',
              allDay: 'Dia inteiro',
              tomorrow: 'Amanhã',
            }}
            className="rounded-2xl border-2 border-blue-200 shadow-lg bg-white/90 text-blue-900 font-medium calendar-gco"
            eventPropGetter={(event) => {
              let bg = 'linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)';
              let border = '2px solid #2563eb';
              if (event.title?.toLowerCase().includes('ginástica')) {
                bg = 'linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)';
                border = '2px solid #2563eb';
              } else if (event.title?.toLowerCase().includes('andebol')) {
                bg = 'linear-gradient(90deg, #22c55e 0%, #4ade80 100%)';
                border = '2px solid #22c55e';
              } else if (event.title?.toLowerCase().includes('patinagem')) {
                bg = 'linear-gradient(90deg, #f59e42 0%, #fbbf24 100%)';
                border = '2px solid #f59e42';
              }
              return {
                style: {
                  background: bg,
                  color: 'white',
                  borderRadius: '1rem',
                  border,
                  fontWeight: 700,
                  boxShadow: '0 4px 16px rgba(59,130,246,0.13)',
                  fontSize: '1.08rem',
                  letterSpacing: '0.01em',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                  cursor: 'pointer',
                  padding: '0.25rem 0.5rem',
                },
                className: 'hover:scale-105 hover:shadow-xl',
              };
            }}
            dayPropGetter={date => {
              const isWeekend = date.getDay() === 0 || date.getDay() === 6;
              return {
                style: {
                  background: isWeekend ? 'rgba(59,130,246,0.07)' : 'rgba(255,255,255,0.95)',
                  borderRadius: '0.5rem',
                },
              };
            }}
            components={{
              toolbar: (props) => (
                <div className="flex flex-col items-center justify-center mb-6 px-2 w-full">
                  <span className="text-2xl md:text-3xl font-extrabold text-indigo-900 drop-shadow-lg tracking-wide text-center w-full bg-white/80 rounded-xl py-2 px-4 shadow-md border border-blue-100">
                    {props.label}
                  </span>
                </div>
              ),
            }}
            toolbar={true}
          />
        </div>
      </div>
    </main>
  );
}