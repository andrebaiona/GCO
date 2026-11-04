import { requireAdmin } from "@/lib/admin/dal";
import { adminHref } from "@/lib/admin/paths";
import ModalidadeForm from "../ModalidadeForm";
import { createModalidade } from "../actions";
import { getFormSuggestions } from "../suggestions";

export default async function NovaModalidadePage() {
  await requireAdmin();
  const { categorias, icones } = await getFormSuggestions();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-blue-900">Nova modalidade</h1>
      <p className="text-sm text-gray-600">Depois de criar, poderá adicionar os escalões e os preços.</p>
      <ModalidadeForm
        action={createModalidade}
        categorias={categorias}
        icones={icones}
        cancelHref={adminHref("modalidades")}
        submitLabel="Criar modalidade"
        initial={{ nome: "", slug: "", icone: "", descricao: "", categoria: "", email: "", ativo: true }}
      />
    </div>
  );
}
