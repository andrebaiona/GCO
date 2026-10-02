import Link from "next/link";
import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin/dal";
import { adminHref } from "@/lib/admin/paths";
import { normalizeImagePath } from "@/utils/imagePath";
import Alert from "../../_components/Alert";
import DeleteNoticiaButton from "./DeleteNoticiaButton";

const FLASH: Record<string, string> = {
  criada: "Notícia criada e publicada.",
  atualizada: "Alterações guardadas.",
  eliminada: "Notícia eliminada.",
};

function formatDate(d: Date): string {
  return d.toISOString().slice(0, 10).split("-").reverse().join("/");
}

export default async function AdminNoticiasPage({
  searchParams,
}: {
  searchParams: Promise<{ ok?: string }>;
}) {
  await requireAdmin();
  const { ok } = await searchParams;

  const noticias = await prisma.noticias.findMany({
    orderBy: [{ data_publicacao: "desc" }, { id: "desc" }],
    select: { id: true, titulo: true, data_publicacao: true, categoria: true, imagem: true },
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-blue-900">Notícias</h1>
        <Link
          href={adminHref("noticias/nova")}
          className="rounded-full bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-blue-900 shadow hover:bg-yellow-300"
        >
          + Nova notícia
        </Link>
      </div>

      {ok && FLASH[ok] && <Alert kind="success">{FLASH[ok]}</Alert>}

      <div className="overflow-x-auto rounded-xl bg-white shadow-lg">
        <table className="w-full text-left text-sm">
          <thead className="bg-blue-50 text-blue-900">
            <tr>
              <th className="px-4 py-3">Imagem</th>
              <th className="px-4 py-3">Data</th>
              <th className="px-4 py-3">Título</th>
              <th className="px-4 py-3">Categoria</th>
              <th className="px-4 py-3 text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {noticias.map((n) => {
              const img = normalizeImagePath(n.imagem);
              return (
                <tr key={n.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2">
                    {img ? (
                      <img src={img} alt="" className="h-12 w-20 rounded object-cover" />
                    ) : (
                      <div className="h-12 w-20 rounded bg-gray-100" />
                    )}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-600">{formatDate(n.data_publicacao)}</td>
                  <td className="px-4 py-2 font-medium">{n.titulo}</td>
                  <td className="px-4 py-2 text-gray-600">{n.categoria ?? "—"}</td>
                  <td className="px-4 py-2">
                    <div className="flex items-center justify-end gap-1">
                      <Link
                        href={`/noticias/${n.id}`}
                        target="_blank"
                        className="rounded-full px-3 py-1 text-sm text-gray-600 hover:bg-gray-100"
                      >
                        Ver
                      </Link>
                      <Link
                        href={adminHref(`noticias/${n.id}`)}
                        className="rounded-full px-3 py-1 text-sm font-semibold text-blue-800 hover:bg-blue-50"
                      >
                        Editar
                      </Link>
                      <DeleteNoticiaButton id={n.id} titulo={n.titulo} />
                    </div>
                  </td>
                </tr>
              );
            })}
            {noticias.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-gray-500">
                  Ainda não há notícias.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
