import Link from "next/link";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin/dal";
import { adminHref } from "@/lib/admin/paths";
import Alert from "../../../../_components/Alert";
import HorarioEditor from "../../HorarioEditor";
import { applyHorarios } from "../../actions";

export default async function EditarHorariosPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ ok?: string }>;
}) {
  await requireAdmin();
  const { id } = await params;
  const { ok } = await searchParams;
  const modalidadeId = Number(id);
  if (!Number.isInteger(modalidadeId) || modalidadeId <= 0) notFound();

  const m = await prisma.modalidades.findUnique({
    where: { id: modalidadeId },
    select: {
      id: true,
      nome: true,
      slug: true,
      horario_aulas: {
        orderBy: [{ dia_semana: "asc" }, { inicio: "asc" }, { id: "asc" }],
        select: { id: true, dia_semana: true, inicio: true, fim: true, titulo: true, sala: true, cor: true },
      },
    },
  });
  if (!m) notFound();

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <Link href={adminHref(`modalidades/${m.id}`)} className="text-sm text-gray-600 hover:underline">
            ← {m.nome}
          </Link>
          <h1 className="text-2xl font-bold text-blue-900">Horários · {m.nome}</h1>
        </div>
        <Link
          href={`/modalidades/${m.slug}`}
          target="_blank"
          className="rounded-full border border-blue-800 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-50"
        >
          Ver página pública
        </Link>
      </div>

      {ok === "aplicado" && <Alert kind="success">Horário aplicado: já está visível no site para todos.</Alert>}

      {/* The ids change whenever a schedule is applied, which resets the editor to the saved data. */}
      <HorarioEditor
        key={m.horario_aulas.map((a) => a.id).join(",")}
        action={applyHorarios.bind(null, m.id)}
        initial={m.horario_aulas.map((a) => ({
          id: a.id,
          dia_semana: a.dia_semana,
          inicio: a.inicio,
          fim: a.fim,
          titulo: a.titulo,
          sala: a.sala ?? "",
          cor: a.cor,
        }))}
      />
    </div>
  );
}
