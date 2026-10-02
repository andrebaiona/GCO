import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin/dal";
import { adminHref } from "@/lib/admin/paths";
import { normalizeImagePath } from "@/utils/imagePath";
import { CATEGORIAS } from "../../../_lib/categorias";
import NoticiaForm from "../NoticiaForm";
import { updateNoticia } from "../actions";

export default async function EditarNoticiaPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin();
  const { id } = await params;
  const noticiaId = Number(id);
  if (!Number.isInteger(noticiaId) || noticiaId <= 0) notFound();

  const n = await prisma.noticias.findUnique({ where: { id: noticiaId } });
  if (!n) notFound();

  // Keep a legacy free-text category selectable so saving doesn't silently change it.
  const categorias: string[] = [...CATEGORIAS];
  if (n.categoria && !categorias.includes(n.categoria)) categorias.push(n.categoria);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-blue-900">Editar notícia</h1>
      <NoticiaForm
        action={updateNoticia.bind(null, n.id)}
        categorias={categorias}
        cancelHref={adminHref("noticias")}
        submitLabel="Guardar alterações"
        initial={{
          titulo: n.titulo,
          data_publicacao: n.data_publicacao.toISOString().slice(0, 10),
          categoria: n.categoria ?? "",
          autor: n.autor ?? "",
          resumo: n.resumo ?? "",
          conteudo: n.conteudo ?? "",
          imagem: normalizeImagePath(n.imagem) ?? null,
          imagem_extra: normalizeImagePath(n.imagem_extra) ?? null,
        }}
      />
    </div>
  );
}
