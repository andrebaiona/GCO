import HorariosTabs from "@/components/HorariosTabs";
import { fetchHorariosTodasModalidades } from "@/data/modalidades-db";
import { DIAS_SEMANA } from "@/lib/horarios";

// Schedules are published from the admin ("Aplicar"), which revalidates on demand; this is only a safety net.
// Keep it long: every regeneration queries Neon and keeps its compute awake (free-plan CU-hours).
export const revalidate = 86400;

export default async function HorariosPage() {
  const modalidades = await fetchHorariosTodasModalidades();

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-8 text-center">Horários</h1>

        {modalidades.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
            <p className="text-lg md:text-xl text-gray-700 font-medium mb-2">Ainda por determinar</p>
            <span className="text-sm text-gray-500">
              Em breve serão publicados os horários das modalidades / eventos do clube.
            </span>
          </div>
        ) : (
          <HorariosTabs
            modalidades={modalidades.map((m) => ({
              id: m.id,
              nome: m.nome,
              slug: m.slug,
              events: m.horario_aulas.map((h) => ({
                id: h.id,
                day: DIAS_SEMANA[h.dia_semana],
                start: h.inicio,
                end: h.fim,
                title: h.titulo,
                room: h.sala ?? "",
                color: h.cor,
              })),
            }))}
          />
        )}
      </div>
    </main>
  );
}
