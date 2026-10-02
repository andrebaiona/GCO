import { requireAdmin } from "@/lib/admin/dal";
import { adminHref } from "@/lib/admin/paths";
import { CATEGORIAS } from "../../../_lib/categorias";
import NoticiaForm from "../NoticiaForm";
import { createNoticia } from "../actions";

export default async function NovaNoticiaPage() {
  await requireAdmin();
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Lisbon" }).format(new Date());

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-blue-900">Nova notícia</h1>
      <NoticiaForm
        action={createNoticia}
        categorias={[...CATEGORIAS]}
        cancelHref={adminHref("noticias")}
        submitLabel="Publicar notícia"
        initial={{
          titulo: "",
          data_publicacao: today,
          categoria: "",
          autor: "",
          resumo: "",
          conteudo: "",
          imagem: null,
          imagem_extra: null,
        }}
      />
    </div>
  );
}
