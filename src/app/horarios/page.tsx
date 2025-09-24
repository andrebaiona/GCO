// src/app/horario/page.tsx
import { fetchEventos, Event } from "@/data/horarios-db";

const dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const horaInicio = 8;
const horaFim = 23;
const totalMinutos = (horaFim - horaInicio) * 60;

const toMin = (d: Date) => d.getUTCHours() * 60 + d.getUTCMinutes();

export default async function HorarioPage() {
  const eventos: Event[] = await fetchEventos();

  return (
    <div className="flex border border-gray-300">
      {/* Coluna das horas */}
      <div className="flex flex-col border-r border-gray-300">
        {Array.from({ length: horaFim - horaInicio }).map((_, i) => (
          <div key={i} className="h-16 border-b border-gray-300 text-right pr-2">
            {String(horaInicio + i).padStart(2, "0")}:00
          </div>
        ))}
      </div>

      {/* Colunas dos dias */}
      {dias.map((_, diaIdx) => (
        <div key={diaIdx} className="flex-1 relative border-r border-gray-300">
          {/* Linhas de fundo */}
          {Array.from({ length: horaFim - horaInicio }).map((_, i) => (
            <div key={i} className="h-16 border-b border-gray-300"></div>
          ))}

          {/* Eventos */}
          {eventos
            .filter(e => e.dia_da_semana === diaIdx)
            .map(e => {
              const inicioMin = toMin(new Date(e.inicio)) - horaInicio * 60;
              const fimMin = toMin(new Date(e.fim)) - horaInicio * 60;
              const top = (inicioMin / totalMinutos) * 100;
              const height = ((fimMin - inicioMin) / totalMinutos) * 100;

              const formatHora = (d: Date) =>
                String(d.getUTCHours()).padStart(2, "0") +
                ":" +
                String(d.getUTCMinutes()).padStart(2, "0");

              return (
                <div
                  key={e.id}
                  className="absolute left-1 right-1 bg-blue-500 text-white text-xs rounded p-1 shadow"
                  style={{ top: `${top}%`, height: `${height}%` }}
                >
                  <div className="font-bold">{e.modalidade_id}</div>
                  <div>{formatHora(new Date(e.inicio))} - {formatHora(new Date(e.fim))}</div>
                  <div className="text-[10px]">{e.local ?? ""}</div>
                </div>
              );
            })}
        </div>
      ))}
    </div>
  );
}
