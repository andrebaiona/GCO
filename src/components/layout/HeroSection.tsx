"use client";
import { calcularIdadeClube } from "@/utils/idadeClube";
import { useEffect, useState } from "react";
import { fetchNoticias } from "@/data/noticias-db";

const heroSlides = [
  {
    src: "/GCO-LOGO-noBG.png",
    alt: "Ginásio Clube de Odivelas",
    title: "Ginásio Clube de Odivelas",
    subtitle: ` 47 anos de tradição desportiva e cultural`,
    description:
      "Com sede em Odivelas, o clube dedica-se a promover a prática de diversas modalidades desportivas, como a Ginástica, o Andebol, o Hóquei Patins, a Patinagem Artística e Xadrez.",
    buttons: [
      {
        href: "/inscricoes",
        label: "Inscreva-se já",
        className:
          "bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors",
      },
      {
        href: "/modalidades",
        label: "As Nossas Modalidades",
        className:
          "border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors",
      },
    ],
  },
  
  {
    title: "Inscrições Abertas",
    subtitle: "Junte-se à família GCO!",
    description:
      "Inscreva-se nas nossas modalidades desportivas e faça parte do clube!",
    buttons: [
      {
        href: "/inscricoes",
        label: "Ver Detalhes",
        className:
          "bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors",
      },
    ],
  },
];

export default function HeroSection() {

  const idade = calcularIdadeClube(new Date(1978, 4, 5));
  const [slide, setSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [slides, setSlides] = useState(heroSlides);

  useEffect(() => {
    const carregarNoticias = async () => {
      try {
        const noticias = await fetchNoticias({ limit: 1, order: "desc" });

        if (Array.isArray(noticias) && noticias.length > 0) {
          const noticia = noticias[0];
          setSlides((slides) => {
            const updated = [...slides];
            updated[1] = {
              src: noticia.imagem || "/Screenshot2025-09-01at00.45.10.png",
              alt: "Última Notícia",
              title: "Última Notícia",
              subtitle: noticia.titulo,
              description: noticia.resumo,
              buttons: [
                {
                  href: `/noticias/${noticia.id}`,
                  label: "Ver Notícia",
                  className:
                    "bg-blue-400 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-300 transition-colors",
                },
              ],
            };
            return updated;
          });
        }
      } catch (error) {
        console.error("Erro a carregar notícias:", error);
      }
    };

    carregarNoticias();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setSlide((prev) => (prev + 1) % slides.length);
        setAnimating(false);
      }, 600); // duração da animação
    }, 8000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const current = slides[slide];
  const isNoticia = slide === 1;

  return (
    <section className="relative bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 text-white py-20 min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div
          className={`transition-all duration-700 ${
            animating ? "opacity-0 translate-x-10" : "opacity-100 translate-x-0"
          }`}
        >
          {isNoticia ? (
            // slide da notícia
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
              <div className="bg-white/10 rounded-xl shadow-lg w-[320px] h-[340px] md:w-[420px] md:h-[440px] flex items-center justify-center">
                <img
                  src={current.src}
                  alt={current.alt}
                  className="object-cover rounded-xl shadow-lg w-full h-full"
                />
              </div>
              <div className="w-full md:w-1/2 text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {current.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-blue-100">
                  {current.subtitle}
                </p>
                <p className="text-lg mb-8 max-w-3xl text-blue-50">
                  {current.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  {current.buttons.map((btn, idx) => (
                    <a key={idx} href={btn.href} className={btn.className}>
                      {btn.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ) : slide === 2 ? (
            // slide das inscrições
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 min-h-[400px]">
              <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center items-center">
                <div className="bg-white/10 rounded-xl shadow-lg w-[280px] h-[300px] md:w-[360px] md:h-[440px] flex items-center justify-center">
                  <img
                    src="/530131865_18073306919003286_1218223041355361627_n.jpg"
                    alt="Inscrições GCO"
                    className="object-cover rounded-xl shadow-lg w-full h-full"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {current.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-blue-100">
                  {current.subtitle}
                </p>
                <p className="text-lg mb-8 max-w-3xl text-blue-50">
                  {current.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  {current.buttons.map((btn, idx) => (
                    <a key={idx} href={btn.href} className={btn.className}>
                      {btn.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            // slide principal
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <img
                  src={current.src}
                  alt={current.alt}
                  className="h-24 w-24 object-contain mx-auto transition-all duration-1000"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {current.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                {current.subtitle}
              </p>
              <p className="text-lg mb-8 max-w-3xl mx-auto text-blue-50">
                {current.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {current.buttons.map((btn, idx) => (
                  <a key={idx} href={btn.href} className={btn.className}>
                    {btn.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}