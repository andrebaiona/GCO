// src/data/jogo-db.ts
import  prisma  from '@/lib/prisma';
import { addMinutes } from 'date-fns';

export interface GameEvent {
  id: number;
  title: string;
  start: Date;
  end: Date;
  local: string | null;
  escalao: string;
  modalidade: string;
}

/**
 * Busca jogos na base de dados e formata para o calendário.
 * @param modalidadeSlug (Opcional) Filtra por modalidade (ex: 'andebol')
 */
export async function fetchGames(modalidadeSlug?: string): Promise<GameEvent[]> {
  const whereClause = modalidadeSlug 
    ? { modalidades: { slug: modalidadeSlug } } 
    : {};

  const jogos = await prisma.jogo.findMany({
    where: whereClause,
    include: {
      escalao: true,
      modalidades: true,
    },
    orderBy: {
      data: 'asc',
    },
  });

  return jogos.map((jogo) => {
    const dataInicio = new Date(jogo.data);
    const horaJogo = new Date(jogo.hora);
    
    dataInicio.setUTCHours(horaJogo.getUTCHours());
    dataInicio.setUTCMinutes(horaJogo.getUTCMinutes());
    dataInicio.setUTCSeconds(0);

    return {
      id: jogo.id,
      title: `${jogo.visitado} vs ${jogo.visitante}`,
      start: dataInicio,
      end: addMinutes(dataInicio, 90),
      local: jogo.local,
      escalao: jogo.escalao.nome,
      modalidade: jogo.modalidades.nome,
    };
  });
}