import { Noticia } from "@/data/noticias-db";
import Link from "next/link";

interface NoticiaCardProps {
  noticia: Noticia;
  isHighlighted?: boolean;
}

export default function NoticiaCard({ noticia, isHighlighted = false }: NoticiaCardProps) {
  const { id, titulo, resumo, conteudo, data, categoria, imagem, autor } = noticia;
  return (
    <article
      className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
        isHighlighted ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
    >
      {imagem && (
      <div className="relative h-48">
        <img
          src={imagem}
          alt={titulo}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {categoria && categoria.trim() !== "" ? categoria : "Sem categoria"}
          </span>
        </div>
      </div>
      )}
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          {data}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {titulo}
        </h3>
        {resumo && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {resumo}
          </p>
        )}
        <Link
          href={`/noticias/${id}`}
          className="inline-flex items-center text-blue-800 font-semibold hover:text-blue-600 transition-colors"
        >
          Ler mais
          <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

