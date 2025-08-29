import { notFound } from "next/navigation";
import Link from "next/link";
import { fetchModalidadeBySlug } from "@/data/modalidades-db";

interface ModalidadeEscalaoPageProps {
  params: { slug: string; escalao: string };
}

export default async function ModalidadeEscalaoPage({ params }: ModalidadeEscalaoPageProps) {
  const { slug, escalao } = params;
  const modalidade = await fetchModalidadeBySlug(slug);
  if (!modalidade) return notFound();

  // Aqui podes filtrar/ajustar os dados conforme o escalao
  // Exemplo: encontrar requisitos, preços, horários, equipa, etc, específicos do escalao

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">Início</Link>
            <span>/</span>
            <Link href="/modalidades" className="hover:text-blue-600 transition-colors">Modalidades</Link>
            <span>/</span>
            <Link href={`/modalidades/${slug}`} className="hover:text-blue-600 transition-colors">{modalidade.nome}</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{escalao}</span>
          </div>
        </nav>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white relative">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h1 className="text-3xl font-bold mb-2">{modalidade.nome} - {escalao}</h1>
              <p className="text-xl text-blue-100 mb-3">{modalidade.descricao}</p>
              {/* Aqui podes mostrar info específica do escalao */}
            </div>
          </div>
        </div>

        {/* Exemplo de áreas específicas do escalao */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Preços do Escalão</h2>
            {/* Preços filtrados por escalao */}
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Requisitos do Escalão</h2>
            {/* Requisitos filtrados por escalao */}
          </div>
        </div>
        {/* Adiciona mais áreas conforme necessário */}
      </div>
    </main>
  );
}
