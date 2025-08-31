import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { fetchModalidadeBySlug } from "@/data/modalidades-db";
import { fetchAllModalidadeSlugs } from "@/data/modalidades-db";
import TabsEscaloes from "@/components/TabsEscaloes";

interface ModalidadePageProps {
  params: { slug: string };
}

export default async function ModalidadePage({ params }: ModalidadePageProps) {
  const { slug } = params;
  const modalidade = await fetchModalidadeBySlug(slug);
  if (!modalidade) return notFound();

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Início
            </Link>
            <span>/</span>
            <Link href="/modalidades" className="hover:text-blue-600 transition-colors">
              Modalidades
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{modalidade.nome}</span>
          </div>
        </nav>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white relative">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="flex items-center">
                <div
                  className="bg-white rounded-xl mr-6 filter drop-shadow-lg flex items-center justify-center"
                  style={{ width: 100, height: 100 }}
                >
                  {modalidade.icone && modalidade.icone.startsWith("/") ? (
                    <Image
                      src={modalidade.icone || "/default.png"}
                      alt={modalidade.nome}
                      width={150}
                      height={80}
                      className="object-contain"
                    />
                  ) : (
                    <span className="text-6xl">{modalidade.icone}</span>
                  )}
                </div>
                <div>
                  <h1 className="text-4xl font-bold mb-2">
                    {modalidade.nome}
                  </h1>
                  <p className="text-xl text-blue-100 mb-3">
                    {modalidade.descricao}
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="bg-blue-500/30 px-3 py-1 rounded-full">
                      {modalidade.categoria}
                    </span>
                    <span className="bg-blue-500/30 px-3 py-1 rounded-full">
                      A partir dos {modalidade.idade_minima} anos
                    </span>
                    {modalidade.ativo ? (
                      <span className="bg-green-500 px-3 py-1 rounded-full text-white font-medium">
                        ✓ Ativo
                      </span>
                    ) : (
                      <span className="bg-red-500 px-3 py-1 rounded-full text-white font-medium">
                        ⚠ Suspenso
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nota obrigatória de sócio */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-8">
          <p className="font-semibold">É necessário ser sócio para praticar qualquer modalidade no GCO.</p>
        </div>

        {/* Tabs para escalões */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Escalões</h2>
          <TabsEscaloes escalas={modalidade.niveis} modalidade={modalidade} />
          {modalidade.slug === "patinagem-artistica" && (
            <div className="mt-4 text-sm text-blue-700">
              <strong>Nota:</strong> A época da patinagem é de <span className="font-bold">janeiro a dezembro</span>.
            </div>
          )}
        </div>
  {/* ...apenas cabeçalho... */}
      </div>
    </main>
  );
}


export async function generateStaticParams() {
  const slugs = await fetchAllModalidadeSlugs();
  return slugs.map((modalidade: { slug: string }) => ({ slug: modalidade.slug }));
}
