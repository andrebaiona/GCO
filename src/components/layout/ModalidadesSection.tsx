import { fetchAllModalidades } from "@/data/modalidades-db";
import ModalidadeCard from "@/components/cards/ModalidadeCard";

export default async function ModalidadesSection() {
  let modalidades = await fetchAllModalidades();
  modalidades = modalidades.sort((a, b) => {
    if (a.ativo && !b.ativo) return -1;
    if (!a.ativo && b.ativo) return 1;
    return a.nome.localeCompare(b.nome);
  });
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            As Nossas Modalidades
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma variedade de modalidades desportivas para todas as idades e níveis de experiência
          </p>
        </div>
          <div className="flex gap-8 flex-row flex-wrap justify-center items-center">
            {modalidades.map((modalidade, index) => (
              <div className="">
                <ModalidadeCard key={index} modalidade={modalidade} />
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}
