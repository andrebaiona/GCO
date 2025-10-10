
import { fetchNoticias } from "@/data/noticias-db";
import NoticiaCard from "@/components/cards/NoticiaCard";
import Link from "next/link";

export default async function NoticiasSection() {
  const noticias = await fetchNoticias();
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notícias em Destaque
            </h2>
            <p className="text-lg text-gray-600">
              Fique por dentro das últimas novidades do clube
            </p>
          </div>
          <Link
            href="/noticias"
            className="hidden md:block bg-blue-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-900 transition-colors"
          >
            Ver todas as notícias
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {noticias.slice(0, 4).map((noticia, index) => (
            <NoticiaCard
              key={noticia.id}
              noticia={noticia}
              isHighlighted={index === 0}
            />
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link
            href="/noticias"
            className="bg-blue-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-900 transition-colors"
          >
            Ver todas as notícias
          </Link>
        </div>
      </div>
    </section>
  );
}
