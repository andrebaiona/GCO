import prisma from "@/lib/prisma";
import { Modalidade } from "./modalidades-db";

export interface Event {
    id: number;
    modalidade_id: number;
    local: string | null;
    inicio: string;
    fim: string;
    dia_da_semana: number;
    data_excecao: string | null
    modalidades: Modalidade
}

export async function fetchEventos(): Promise<Event[]> {
    const evento = await prisma.horarios.findMany();

    return evento.map((h: any) => ({
        id: h.id,
        modalidade_id: h.modalidade_id,
        local: h.local ?? null,
        inicio: h.inicio,
        fim: h.fim,
        dia_da_semana: h.dia_da_semana,
        data_excecao: h.data_excecao,
        modalidades: h.modalidades
    }));
}