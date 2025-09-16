
import HorariosCalendar from '../../components/HorariosCalendar';
import prisma from '@/lib/prisma';

export default async function HorariosPage() {
  const horarios = await prisma.horarios.findMany({ include: { modalidades: true } });
  // Transforma os dados para eventos do calendário
  const events = horarios.map((h) => {
    let startDate: Date;
    let endDate: Date;
    if (h.data_excecao) {
      startDate = new Date(h.data_excecao);
      if (h.inicio) {
        startDate.setHours(new Date(h.inicio).getHours(), new Date(h.inicio).getMinutes());
      }
      endDate = new Date(startDate);
      if (h.fim) {
        endDate.setHours(new Date(h.fim).getHours(), new Date(h.fim).getMinutes());
      }
    } else {
      const now = new Date();
      const day = h.dia_da_semana ?? 1;
      const diff = (day + 7 - now.getDay()) % 7;
      startDate = new Date(now);
      startDate.setDate(now.getDate() + diff);
      if (h.inicio) {
        startDate.setHours(new Date(h.inicio).getHours(), new Date(h.inicio).getMinutes(), 0, 0);
      } else {
        startDate.setHours(0, 0, 0, 0);
      }
      endDate = new Date(startDate);
      if (h.fim) {
        endDate.setHours(new Date(h.fim).getHours(), new Date(h.fim).getMinutes(), 0, 0);
      } else {
        endDate.setHours(startDate.getHours() + 1, startDate.getMinutes(), 0, 0);
      }
    }
    return {
      title: h.modalidades?.nome || 'Modalidade',
      start: startDate,
      end: endDate,
      local: h.local,
    };
  });
  return <HorariosCalendar events={events} />;
}
