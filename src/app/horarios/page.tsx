// src/app/horario/page.tsx
import { fetchEventos, Event } from "@/data/horarios-db";
import Link from "next/link";

const dias = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
const horaInicio = 8;
const horaFim = 23;
const totalMinutos = (horaFim - horaInicio) * 60;

const toMin = (d: Date) => d.getUTCHours() * 60 + d.getUTCMinutes();

// Cores fixas por modalidade
function getColor(modalidade_id: number) {
  switch (modalidade_id) {
    case 1:
      return "bg-green-600 border-green-800";
    case 2:
      return "bg-blue-600 border-blue-800";
    case 3:
      return "bg-purple-600 border-purple-800";
    case 4:
      return "bg-red-600 border-red-800";
    default:
      return "bg-gray-500 border-gray-700";
  }
}

// Converter id em nome
function getNomeModalidade(modalidade_id: number) {
  switch (modalidade_id) {
    case 1:
      return "Andebol";
    case 2:
      return "Ginástica";
    case 3:
      return "Patinagem Artística";
    case 4:
      return "Xadrez";
    default:
      return "Desconhecida";
  }
}

// Função que distribui eventos sobrepostos lado a lado
function distribuirEventos(eventosDia: Event[]) {
  const sorted = [...eventosDia].sort(
    (a, b) => new Date(a.inicio).getTime() - new Date(b.inicio).getTime()
  );
  const colunas: Event[][] = [];

  sorted.forEach((evento) => {
    const inicio = new Date(evento.inicio).getTime();
    const fim = new Date(evento.fim).getTime();

    let colocado = false;
    for (const coluna of colunas) {
      const colide = coluna.some((ev) => {
        const evInicio = new Date(ev.inicio).getTime();
        const evFim = new Date(ev.fim).getTime();
        return inicio < evFim && fim > evInicio;
      });
      if (!colide) {
        coluna.push(evento);
        colocado = true;
        break;
      }
    }
    if (!colocado) {
      colunas.push([evento]);
    }
  });
  return colunas;
}

export default async function HorarioPage({
  searchParams,
}: {
  searchParams?: { modalidade?: string };
}) {
  const eventos: Event[] = await fetchEventos();
  const modalidadeId = searchParams?.modalidade
    ? parseInt(searchParams.modalidade)
    : null;

  const eventosFiltrados = modalidadeId
    ? eventos.filter((e) => e.modalidade_id === modalidadeId)
    : eventos;

  return (
    <div className="w-full h-full bg-blue-50 rounded-lg shadow-md overflow-hidden">
      {/* Botões de filtragem */}
      <div className="flex gap-4 p-3 bg-white border-b border-gray-200 text-sm">
        {[1, 2, 3, 4].map((m) => (
          <Link
            key={m}
            href={`#`}
            className={`px-3 py-1 rounded ${
              modalidadeId === m
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {getNomeModalidade(m)}
          </Link>
        ))}
        <Link
          href="#"
          className={`px-3 py-1 rounded ${
            modalidadeId === null
              ? "bg-green-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Todas
        </Link>
      </div>

      {/* Cabeçalho dos dias */}
      <div className="grid grid-cols-8 border-b border-gray-300 bg-blue-100 font-semibold text-sm">
        <div className="p-2 text-center text-gray-700"></div>
        {dias.map((dia, i) => (
          <div
            key={i}
            className="p-2 text-center text-gray-700 border-l border-gray-300"
          >
            {dia}
          </div>
        ))}
      </div>

      <div className="flex">
        {/* Coluna das horas */}
        <div className="flex flex-col w-16 border-r border-gray-300 bg-gray-50 text-xs text-gray-600">
          {Array.from({ length: horaFim - horaInicio }).map((_, i) => (
            <div
              key={i}
              className="h-16 border-b border-gray-200 flex items-start justify-end pr-1"
            >
              {String(horaInicio + i).padStart(2, "0")}:00
            </div>
          ))}
        </div>

        {/* Colunas dos dias */}
        {dias.map((_, diaIdx) => {
          const eventosDia = eventosFiltrados.filter(
            (e) => e.dia_da_semana === diaIdx
          );
          const grupos = distribuirEventos(eventosDia);

          return (
            <div
              key={diaIdx}
              className="flex-1 relative border-r border-gray-200 bg-white"
            >
              {Array.from({ length: horaFim - horaInicio }).map((_, i) => (
                <div key={i} className="h-16 border-b border-gray-100"></div>
              ))}

              {grupos.map((grupo) =>
                grupo.map((e, idx) => {
                  const inicioMin =
                    toMin(new Date(e.inicio)) - horaInicio * 60;
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
                      className={`absolute text-white text-xs rounded-lg p-2 shadow-md overflow-hidden ${getColor(
                        e.modalidade_id
                      )}`}
                      style={{
                        top: `${top}%`,
                        height: `${height}%`,
                        left: `${(idx / grupo.length) * 100}%`,
                        width: `${100 / grupo.length}%`,
                      }}
                    >
                      <div className="font-bold text-sm truncate">
                        {getNomeModalidade(e.modalidade_id)}
                      </div>
                      <div className="text-[11px]">
                        {formatHora(new Date(e.inicio))} -{" "}
                        {formatHora(new Date(e.fim))}
                      </div>
                      {e.local && (
                        <div className="text-[10px] text-white/80 truncate">
                          {e.local}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
