import Link from "next/link";
import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin/dal";
import { adminHref } from "@/lib/admin/paths";
import Alert from "../../_components/Alert";
import { DeleteModalidadeButton } from "./ItemForms";

const FLASH: Record<string, string> = {
  eliminada: "Modalidade eliminada.",
};

export default async function AdminModalidadesPage({
  searchParams,
}: {
  searchParams: Promise<{ ok?: string }>;
}) {
  await requireAdmin();
  const { ok } = await searchParams;

  const modalidades = await prisma.modalidades.findMany({
    orderBy: [{ ativo: "desc" }, { nome: "asc" }],
    select: {
      id: true,
      nome: true,
      slug: true,
      categoria: true,
      ativo: true,
      _count: { select: { escalao: true, preco_escalao: true } },
    },
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-blue-900">Modalidades</h1>
        <Link
          href={adminHref("modalidades/nova")}
          className="rounded-full bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-blue-900 shadow hover:bg-yellow-300"
        >
          + Nova modalidade
        </Link>
      </div>

      {ok && FLASH[ok] && <Alert kind="success">{FLASH[ok]}</Alert>}

      <div className="overflow-x-auto rounded-xl bg-white shadow-lg">
        <table className="w-full text-left text-sm">
          <thead className="bg-blue-50 text-blue-900">
            <tr>
              <th className="px-4 py-3">Nome</th>
              <th className="px-4 py-3">Categoria</th>
              <th className="px-4 py-3">Escalões</th>
              <th className="px-4 py-3">Preços</th>
              <th className="px-4 py-3">Estado</th>
              <th className="px-4 py-3 text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {modalidades.map((m) => (
              <tr key={m.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 font-medium">{m.nome}</td>
                <td className="px-4 py-2 text-gray-600">{m.categoria ?? "—"}</td>
                <td className="px-4 py-2 text-gray-600">{m._count.escalao}</td>
                <td className="px-4 py-2 text-gray-600">{m._count.preco_escalao}</td>
                <td className="px-4 py-2">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      m.ativo ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {m.ativo ? "Ativa" : "Inativa"}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center justify-end gap-1">
                    <Link
                      href={`/modalidades/${m.slug}`}
                      target="_blank"
                      className="rounded-full px-3 py-1 text-sm text-gray-600 hover:bg-gray-100"
                    >
                      Ver
                    </Link>
                    <Link
                      href={adminHref(`modalidades/${m.id}`)}
                      className="rounded-full px-3 py-1 text-sm font-semibold text-blue-800 hover:bg-blue-50"
                    >
                      Editar
                    </Link>
                    <DeleteModalidadeButton id={m.id} nome={m.nome} />
                  </div>
                </td>
              </tr>
            ))}
            {modalidades.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                  Ainda não há modalidades.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
