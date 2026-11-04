/** Weekly schedule vocabulary shared by the admin editor and the public calendar. */

/** Index = horario_aulas.dia_semana. Labels match the public calendar columns. */
export const DIAS_SEMANA = ["2.ª", "3.ª", "4.ª", "5.ª", "6.ª", "Sábado", "Domingo"] as const;

/** Allowed block colours (stored as CSS values; the admin only offers these). */
export const CORES_HORARIO = [
  { value: "var(--blue-400)", label: "Azul claro" },
  { value: "var(--blue-500)", label: "Azul" },
  { value: "var(--blue-600)", label: "Azul médio" },
  { value: "var(--blue-700)", label: "Azul escuro" },
  { value: "var(--blue-900)", label: "Azul marinho" },
  { value: "var(--yellow-500)", label: "Amarelo" },
  { value: "green", label: "Verde" },
] as const;

export const COR_PADRAO = CORES_HORARIO[0].value;

export const HORA_RE = /^([01]\d|2[0-3]):[0-5]\d$/;

export function horaParaMinutos(t: string): number {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

export type AulaHorario = {
  id: number;
  dia_semana: number;
  inicio: string;
  fim: string;
  titulo: string;
  sala: string | null;
  cor: string;
};
