import Link from "next/link";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin/dal";
import { adminHref } from "@/lib/admin/paths";
import Alert from "../../../_components/Alert";
import ModalidadeForm from "../ModalidadeForm";
import {
  DeleteEscalaoButton,
  DeleteModalidadeButton,
  DeletePrecoButton,
  EscalaoForm,
  PrecoForm,
  TiposPrecoDatalist,
} from "../ItemForms";
import {
  createEscalao,
  createPreco,
  updateEscalao,
  updateModalidade,
  updatePreco,
} from "../actions";
import { getFormSuggestions } from "../suggestions";

const FLASH: Record<string, string> = {
  criada: "Modalidade criada. Adicione agora os escalões e os preços.",
};

const TODOS = "Todos";

function Section({ title, hint, children }: { title: string; hint?: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-xl font-bold text-blue-900">{title}</h2>
        {hint && <p className="text-sm text-gray-600">{hint}</p>}
      </div>
      {children}
    </section>
  );
}

export default async function EditarModalidadePage({
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
    include: {
      escalao: { orderBy: { id: "asc" } },
      preco_escalao: { orderBy: [{ escalao: "asc" }, { tipo: "asc" }, { id: "asc" }] },
      _count: { select: { horario_aulas: true } },
    },
  });
  if (!m) notFound();

  const { categorias, icones } = await getFormSuggestions();
  const escalaoNomes = [TODOS, ...m.escalao.map((e) => e.nome)];
  const escalaoExiste = (nome: string) => escalaoNomes.some((n) => n.trim().toLowerCase() === nome.trim().toLowerCase());

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <Link href={adminHref("modalidades")} className="text-sm text-gray-600 hover:underline">
            ← Modalidades
          </Link>
          <h1 className="text-2xl font-bold text-blue-900">{m.nome}</h1>
        </div>
        <Link
          href={`/modalidades/${m.slug}`}
          target="_blank"
          className="rounded-full border border-blue-800 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-50"
        >
          Ver página pública
        </Link>
      </div>

      {ok && FLASH[ok] && <Alert kind="success">{FLASH[ok]}</Alert>}

      <Section title="Dados da modalidade">
        <ModalidadeForm
          action={updateModalidade.bind(null, m.id)}
          categorias={categorias}
          icones={icones}
          submitLabel="Guardar alterações"
          editingSlug
          initial={{
            nome: m.nome,
            slug: m.slug,
            icone: m.icone ?? "",
            descricao: m.descricao ?? "",
            categoria: m.categoria ?? "",
            email: m.email ?? "",
            ativo: m.ativo,
          }}
        />
      </Section>

      <Section
        title="Escalões"
        hint="Se mudar o nome de um escalão, os preços associados são atualizados automaticamente."
      >
        <div className="space-y-4">
          {m.escalao.map((e) => (
            <div key={e.id} className="rounded-xl bg-white p-5 shadow">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-semibold text-gray-800">{e.nome}</h3>
                <DeleteEscalaoButton id={e.id} modalidadeId={m.id} nome={e.nome} />
              </div>
              <EscalaoForm
                mode="edit"
                action={updateEscalao.bind(null, m.id, e.id)}
                initial={{
                  nome: e.nome,
                  idade_minima: e.idade_minima?.toString() ?? "",
                  idade_maxima: e.idade_maxima?.toString() ?? "",
                  mensalidade: e.mensalidade?.toString() ?? "",
                  descricao: e.descricao ?? "",
                }}
              />
            </div>
          ))}
          {m.escalao.length === 0 && <p className="text-sm text-gray-500">Ainda não há escalões.</p>}

          <div className="rounded-xl border-2 border-dashed border-blue-200 bg-blue-50/40 p-5">
            <h3 className="mb-3 font-semibold text-blue-900">Novo escalão</h3>
            <EscalaoForm
              mode="add"
              action={createEscalao.bind(null, m.id)}
              initial={{ nome: "", idade_minima: "", idade_maxima: "", mensalidade: "", descricao: "" }}
            />
          </div>
        </div>
      </Section>

      <Section
        title="Preços"
        hint={`Use o escalão "${TODOS}" para valores que se aplicam a todos os escalões (ex.: inscrição, seguro).`}
      >
        <TiposPrecoDatalist />
        <div className="space-y-4">
          {m.preco_escalao.map((p) => (
            <div key={p.id} className="rounded-xl bg-white p-5 shadow">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-semibold text-gray-800">
                  {p.escalao} · {p.tipo ?? "—"}
                  {!escalaoExiste(p.escalao) && (
                    <span className="ml-2 rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-semibold text-yellow-800">
                      escalão inexistente
                    </span>
                  )}
                </h3>
                <DeletePrecoButton id={p.id} modalidadeId={m.id} />
              </div>
              <PrecoForm
                mode="edit"
                action={updatePreco.bind(null, m.id, p.id)}
                escaloes={escalaoNomes}
                initial={{
                  escalao: p.escalao,
                  tipo: p.tipo ?? "",
                  valor: p.valor?.toString() ?? "",
                  observacoes: p.observacoes ?? "",
                }}
              />
            </div>
          ))}
          {m.preco_escalao.length === 0 && <p className="text-sm text-gray-500">Ainda não há preços.</p>}

          <div className="rounded-xl border-2 border-dashed border-blue-200 bg-blue-50/40 p-5">
            <h3 className="mb-3 font-semibold text-blue-900">Novo preço</h3>
            <PrecoForm
              mode="add"
              action={createPreco.bind(null, m.id)}
              escaloes={escalaoNomes}
              initial={{ escalao: "", tipo: "", valor: "", observacoes: "" }}
            />
          </div>
        </div>
      </Section>

      <Section title="Horários">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-white p-5 shadow">
          <p className="text-sm text-gray-700">
            {m._count.horario_aulas === 0
              ? "Ainda não há aulas no horário (o calendário não aparece na página pública)."
              : `${m._count.horario_aulas} aulas no horário.`}{" "}
            Edite com pré-visualização do calendário e só publique quando carregar em <strong>Aplicar</strong>.
          </p>
          <Link
            href={adminHref(`modalidades/${m.id}/horarios`)}
            className="rounded-full bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-blue-900 shadow hover:bg-yellow-300"
          >
            Editar horários
          </Link>
        </div>
      </Section>

      <Section title="Zona de perigo">
        <div className="flex items-center justify-between gap-4 rounded-xl border border-red-200 bg-red-50 p-5">
          <p className="text-sm text-red-800">
            Eliminar a modalidade remove também todos os escalões, preços e horários associados.
          </p>
          <DeleteModalidadeButton id={m.id} nome={m.nome} />
        </div>
      </Section>
    </div>
  );
}
