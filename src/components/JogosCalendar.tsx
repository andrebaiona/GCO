"use client";
import React from 'react';
import { Calendar, Views, dateFnsLocalizer } from 'react-big-calendar';
import { format } from 'date-fns/format';
import { parse } from 'date-fns/parse';
import { startOfWeek } from 'date-fns/startOfWeek';
import { getDay } from 'date-fns/getDay';
import { pt } from 'date-fns/locale/pt';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Configuração de Locale
const locales = { 'pt': pt };
const localizer = dateFnsLocalizer({
  format: (date: Date, _formatStr: string, _options: any) => format(date, _formatStr, { locale: pt }),
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }), // Semana começa à Segunda
  getDay,
  locales,
});

// Definição das Cores
const COLORS = {
  MINIS: { bg: 'linear-gradient(135deg, #facc15 0%, #eab308 100%)', border: '#ca8a04', label: 'Minis' },
  SUB14: { bg: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', border: '#1d4ed8', label: 'Sub-14' },
  SUB16: { bg: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)', border: '#be185d', label: 'Sub-16 Fem' },
  SUB18: { bg: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', border: '#047857', label: 'Sub-18 Masc' },
  SENIORES: { bg: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', border: '#b91c1c', label: 'Séniores' },
  DEFAULT: { bg: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)', border: '#374151', label: 'Outros' }
};

// Função "inteligente" para descobrir a cor baseada no nome
const getStyleForEscalao = (nomeRaw: string) => {
  if (!nomeRaw) return COLORS.DEFAULT;
  
  const nome = nomeRaw.toUpperCase().trim();

  if (nome.includes('MINI')) return COLORS.MINIS;
  if (nome.includes('14')) return COLORS.SUB14;
  if (nome.includes('16')) return COLORS.SUB16;
  if (nome.includes('18')) return COLORS.SUB18;
  if (nome.includes('SENIOR') || nome.includes('SÉNIOR')) return COLORS.SENIORES;
  
  return COLORS.DEFAULT;
};

// Componente visual de cada evento no calendário
function GameEventCard({ event }: { event: any }) {
  return (
    <div className="flex flex-col h-full w-full overflow-hidden text-xs">
      <div className="font-bold leading-tight tracking-wide truncate">
         {format(event.start, 'HH:mm')} - {event.escalao}
      </div>
      <div className="text-[10px] mt-0.5 font-medium leading-tight line-clamp-2">
        {event.title}
      </div>
      {event.local && (
        <div className="text-[9px] italic opacity-90 truncate mt-1">
          📍 {event.local}
        </div>
      )}
    </div>
  );
}

export default function JogosCalendar({ events }: { events: any[] }) {
  const defaultDate = new Date(); 

  return (
    <div className="w-full h-full">
       <style jsx global>{`
        .rbc-month-view { border-radius: 1rem; border: none; }
        .rbc-header { padding: 8px; font-weight: 700; color: #1e3a8a; font-size: 0.9rem; text-transform: uppercase; }
        .rbc-off-range-bg { background: #f8fafc; }
        .rbc-today { background: #eff6ff; }
        .rbc-event { padding: 2px !important; }
        .rbc-month-row { overflow: visible; } 
      `}</style>

      {/* Legenda de Cores */}
      <div className="flex flex-wrap gap-3 justify-center mb-6">
        {Object.values(COLORS).map((style) => (
          style.label !== 'Outros' && (
            <div key={style.label} className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100">
              <span className="w-3 h-3 rounded-full" style={{ background: style.bg }}></span>
              <span className="text-xs font-bold text-gray-600">{style.label}</span>
            </div>
          )
        ))}
      </div>

      <Calendar
        localizer={localizer}
        events={events}
        defaultView={Views.MONTH}
        views={['month', 'agenda']}
        defaultDate={defaultDate}
        style={{ height: 1500 }} 
        popup
        culture='pt'
        messages={{
          week: 'Semana',
          today: 'Hoje',
          previous: 'Anterior',
          next: 'Seguinte',
          noEventsInRange: 'Sem jogos marcados.',
          showMore: (total: number) => `+${total} jogos`,
          date: 'Data',
          time: 'Hora',
          event: 'Jogo',
          agenda: 'Lista',
          day: 'Dia',
          month: 'Mês',
          allDay: 'Dia todo',
          tomorrow: 'Amanhã',
        }}
        className="rounded-2xl border-2 border-blue-200 shadow-xl bg-white/95 text-blue-900 font-medium p-2 md:p-4"
        eventPropGetter={(event) => {
          // Usa a nova função de detecção
          const styleConfig = getStyleForEscalao(event.escalao);
          
          return {
            style: {
              background: styleConfig.bg,
              borderColor: styleConfig.border,
              borderWidth: '1px',
              borderStyle: 'solid',
              color: 'white',
              borderRadius: '0.4rem',
              fontSize: '0.75rem',
              minHeight: '40px',
            },
            className: 'hover:brightness-110 transition-all cursor-pointer shadow-sm',
          };
        }}
        components={{
          toolbar: (props) => (
            <div className="flex flex-col md:flex-row items-center justify-between mb-6 px-2 gap-4">
              <div className="flex gap-2">
                <button onClick={() => props.onNavigate('PREV')} className="px-3 py-1.5 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 text-sm shadow">Anterior</button>
                <button onClick={() => props.onNavigate('TODAY')} className="px-3 py-1.5 bg-white text-blue-600 border border-blue-200 rounded-lg font-bold hover:bg-blue-50 text-sm shadow">Hoje</button>
                <button onClick={() => props.onNavigate('NEXT')} className="px-3 py-1.5 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 text-sm shadow">Seguinte</button>
              </div>
              <span className="text-xl md:text-2xl font-extrabold text-indigo-900 uppercase tracking-tight">
                {props.label}
              </span>
              <div className="flex gap-2">
                 <button onClick={() => props.onView('month')} className={`px-3 py-1.5 rounded-lg font-bold text-sm transition shadow ${props.view === 'month' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}>Mês</button>
                 <button onClick={() => props.onView('agenda')} className={`px-3 py-1.5 rounded-lg font-bold text-sm transition shadow ${props.view === 'agenda' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}>Lista</button>
              </div>
            </div>
          ),
          event: GameEventCard,
        }}
      />
    </div>
  );
}