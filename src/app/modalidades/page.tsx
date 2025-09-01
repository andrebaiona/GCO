import { fetchAllModalidades } from "@/data/modalidades-db";
import ModalidadeCard from "@/components/cards/ModalidadeCard";

export default async function ModalidadesPage() {
  const modalidades = await fetchAllModalidades();
  // Ordena alfabeticamente, exceto hoquei-em-patins que fica em último
  const modalidadesOrdenadas = [
    ...modalidades
      .filter(m => m.slug !== "hoquei-em-patins")
      .sort((a, b) => a.nome.localeCompare(b.nome)),
    ...modalidades.filter(m => m.slug === "hoquei-em-patins")
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Modalidades GCO
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra as diferentes modalidades desportivas que oferecemos no Ginásio Clube de Odivelas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modalidadesOrdenadas.map((modalidade) => (
            <ModalidadeCard key={modalidade.slug} modalidade={modalidade} />
          ))}
        </div>
      </div>
    </main>
  );
}
