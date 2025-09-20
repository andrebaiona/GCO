
import HorariosCalendar from '../../components/HorariosCalendar';
import prisma from '@/lib/prisma';

export default async function HorariosPage() {
  const horarios = await prisma.$queryRaw<{
    id: number;
    modalidade_id: number;
    local: string | null;
    inicio: Date;
    fim: Date;
    dia_da_semana: number;
    data_excecao: Date | null;
    modalidade_nome: string;
  }[]>`SELECT h.id,
           h.modalidade_id,
           COALESCE(h.local, '') AS local,
           h.inicio,
           h.fim,
           h.dia_da_semana,
           h.data_excecao,
           m.nome AS modalidade_nome
    FROM horarios h
    JOIN modalidades m ON m.id = h.modalidade_id`;
  const events = horarios.map((h) => {
    const inicioRaw = h.inicio ? new Date(h.inicio) : null;
    const fimRaw = h.fim ? new Date(h.fim) : null;

    const now = new Date();
    const targetWeekday = h.dia_da_semana; 
    const jsCurrent = now.getDay();
    const diff = (targetWeekday + 7 - jsCurrent) % 7;
    const baseDate = new Date(now);
    baseDate.setHours(0, 0, 0, 0);
    baseDate.setDate(now.getDate() + diff);

    const startDate = new Date(baseDate);
    if (inicioRaw) {
      startDate.setHours(inicioRaw.getUTCHours(), inicioRaw.getUTCMinutes(), 0, 0);
    }

    const endDate = new Date(baseDate);
    if (fimRaw) {
      endDate.setHours(fimRaw.getUTCHours(), fimRaw.getUTCMinutes(), 0, 0);
    } else if (inicioRaw) {
      endDate.setHours(startDate.getHours(), startDate.getMinutes(), 0, 0);
    } else {
      endDate.setHours(startDate.getHours(), 0, 0, 0);
    }

    if (h.data_excecao) {
      const exc = new Date(h.data_excecao);
      startDate.setFullYear(exc.getFullYear(), exc.getMonth(), exc.getDate());
      endDate.setFullYear(exc.getFullYear(), exc.getMonth(), exc.getDate());
    }

    return {
  title: h.modalidade_nome || 'Modalidade',
      start: startDate,
      end: endDate,
  local: h.local ,
    };
  });
  return <HorariosCalendar events={events} />;
}
