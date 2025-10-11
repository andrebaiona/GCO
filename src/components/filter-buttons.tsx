"use client";

import { useState } from "react";
import { Noticia } from "@/data/noticias-db";
import NoticiaCard from "./cards/NoticiaCard";

const CATEGORIAS = [
  "todas",
  "clube",
  "Andebol",
  "Ginástica",
  "Patinagem",
  "Xadrez",
  "Hoquei"
];

type NoticiasFilterProps = {
  noticias: Noticia[];
};

export default function NoticiasFilter({ noticias }: NoticiasFilterProps) {
  const [activeFilter, setActiveFilter] = useState<string>("todas");

  const filteredNoticias =
    activeFilter === "todas"
      ? noticias
      : noticias.filter(
          noticia =>
            noticia.categoria &&
            noticia.categoria.toLowerCase() === activeFilter.toLowerCase()
        );

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {CATEGORIAS.map((categoria) => (
          <button
            key={categoria}
            onClick={() => setActiveFilter(categoria)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === categoria
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            } transition-colors duration-200`}
          >
            {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredNoticias.map((noticia) => (
          <NoticiaCard key={noticia.id} noticia={noticia} />
        ))}
      </div>
    </>
  );
}