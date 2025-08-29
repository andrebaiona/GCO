import { fetchAllModalidades } from "@/data/modalidades-db";
import ModalidadeCard from "@/components/cards/ModalidadeCard";

export default async function ModalidadesSection() {
  const modalidades = await fetchAllModalidades();
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modalidades.map((modalidade: import("@/data/modalidades-db").Modalidade, index: number) => (
            <ModalidadeCard key={index} modalidade={modalidade} />
          ))}
        </div>
      </div>
    </section>
  );
}
