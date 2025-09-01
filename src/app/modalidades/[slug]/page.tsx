import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { fetchModalidadeBySlug } from "@/data/modalidades-db";
import { fetchAllModalidadeSlugs } from "@/data/modalidades-db";
import TabsEscaloes from "@/components/TabsEscaloes";


export default async function ModalidadePage(props:any) {
  const params = await props.params;
  const { slug } = params;
  const modalidade = await fetchModalidadeBySlug(slug);

  if (!modalidade) notFound();

  const escalas = modalidade.escalao || [];
  return (
    
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">Início</Link>
            <span>/</span>
            <Link href="/modalidades" className="hover:text-blue-600 transition-colors">Modalidades</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{modalidade.nome}</span>
          </div>
        </nav>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl overflow-hidden mb-10 flex flex-col md:flex-row items-center p-8 gap-8">
          <div className="bg-white rounded-2xl shadow-lg flex items-center justify-center w-32 h-32">
            {modalidade.icone && modalidade.icone.startsWith("/") ? (
              <Image
                src={modalidade.icone || "/default.png"}
                alt={modalidade.nome}
                width={120}
                height={120}
                className="object-contain"
              />
            ) : (
              <span className="text-6xl">{modalidade.icone ?? "🏅"}</span>
            )}
          </div>
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-white drop-shadow-lg">{modalidade.nome}</h1>
            <p className="text-lg md:text-xl text-blue-100 mb-4 font-medium">{modalidade.descricao ?? ""}</p>
            <div className="flex flex-wrap gap-3 items-center mb-2">
              {modalidade.categoria && (
                <span className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full font-semibold shadow">{modalidade.categoria}</span>
              )}
              {modalidade.ativo ? (
                <span className="bg-green-500 px-3 py-1 rounded-full text-white font-semibold shadow flex items-center">
                  ✓ Ativo
                </span>
              ) : (
                <span className="bg-red-500 px-3 py-1 rounded-full text-white font-semibold shadow flex items-center">
                  ⚠ Atualmente sem atividade
                </span>
              )}
            </div>
          </div>
        </section>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-900 p-4 mb-10 rounded-xl shadow">
          <p className="font-semibold text-lg flex items-center">
            É necessário ser sócio para praticar qualquer modalidade no GCO.
          </p>
        </div>

        {(modalidade.slug !== "xadrez" && modalidade.slug !== "andebol" && modalidade.slug !== "hoquei-em-patins") && (
          <section className="bg-white rounded-2xl shadow-lg p-8 mb-10">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Escalões</h2>
            <TabsEscaloes escaloes={modalidade.escalao} />
            {modalidade.slug === "patinagem-artistica" && (
              <div className="mt-4 text-sm text-blue-700">
                <strong>Nota:</strong> A época da patinagem é de <span className="font-bold">janeiro a dezembro</span>.
              </div>
            )}
          </section>
        )}
        {modalidade.slug === "hoquei-em-patins" && (
          <section className="bg-white rounded-2xl shadow-lg p-8 mb-10">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Escalões</h2>
            <ul className="w-full max-w-xl mx-auto flex flex-col gap-4">
              {modalidade.escalao?.map((esc: any) => (
                <li key={esc.id} className="bg-gray-100 rounded-xl px-6 py-4 text-xl font-semibold text-blue-900 shadow text-center">
                  {esc.nome}
                </li>
              ))}
            </ul>
          </section>
        )}
        {modalidade.slug === "andebol" && (
          <section className="bg-white rounded-2xl shadow-lg p-8 mb-10">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Escalões</h2>
            <div className="w-full flex justify-center mb-8">
              <div className="w-full max-w-xl bg-orange-400 rounded-2xl flex items-center justify-center shadow-lg border-4 border-orange-600 py-8">
                <span className="text-2xl font-extrabold text-white drop-shadow-lg">Preços por determinar</span>
              </div>
            </div>
            <ul className="w-full max-w-xl mx-auto flex flex-col gap-4">
              {modalidade.escalao?.map((esc: any) => (
                <li key={esc.id} className="bg-gray-100 rounded-xl px-6 py-4 text-xl font-semibold text-blue-900 shadow text-center">
                  {esc.nome}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const slugs = await fetchAllModalidadeSlugs();
  return slugs.map((modalidade: { slug: string }) => ({ slug: modalidade.slug }));
}
