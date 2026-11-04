import type { FC } from "react";

const globals = {
  days: ['2.ª', '3.ª', '4.ª', '5.ª', '6.ª', 'Sábado', 'Domingo'],
  startHour: '09:00',
  endHour: '21:30',
  slotMinutes: 30,
  timezone: 'Europe/Lisbon'
  };

export type Event = {
id?: number;
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
  /** Admin preview: highlights this event and makes blocks clickable. */
  selectedId?: number | null;
  onSelect?: (id: number) => void;
};

const HorarioCalendar: FC<CalendarProps> = ({ events, selectedId, onSelect }) => {
  const { days, startHour, endHour, slotMinutes } = globals;
  // Default window, widened (in whole slots) when the admin schedules something outside it.
  const startMin = Math.min(
    timeToMinutes(startHour),
    Math.floor(Math.min(...events.map(e => timeToMinutes(e.start))) / slotMinutes) * slotMinutes,
  );
  const endMin = Math.max(
    timeToMinutes(endHour),
    Math.ceil(Math.max(...events.map(e => timeToMinutes(e.end))) / slotMinutes) * slotMinutes,
  );
  const totalSlots = Math.ceil((endMin - startMin) / slotMinutes);
  const slotHeight = 40;

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
                    <div key={ev.id ?? idx}
                      onClick={onSelect && ev.id !== undefined ? () => onSelect(ev.id as number) : undefined}
                      className={`absolute rounded-md sm:rounded-lg p-[2px] sm:p-2 text-[8px] sm:text-[10px] md:text-xs text-white shadow-md ${onSelect ? 'cursor-pointer' : ''} ${selectedId !== undefined && selectedId !== null && ev.id === selectedId ? 'ring-4 ring-yellow-400 z-10' : ''}`}
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

export default HorarioCalendar;
