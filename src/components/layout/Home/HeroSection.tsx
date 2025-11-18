import { calcularIdadeClube } from "@/utils/idadeClube";
import { fetchNoticias } from "@/data/noticias-db";
import HeroSectionSlider from "./HeroSectionSlider";

export default async function HeroSection() {
  const idade = calcularIdadeClube(new Date(1978, 4, 5));
  const todasNoticias = await fetchNoticias();

  const noticiasOrdenadas = todasNoticias
    .filter(n => n.data && n.data.trim() !== "")
    .sort((a, b) => (a.data < b.data ? 1 : -1));

  const ultimaNoticia = noticiasOrdenadas[0] ?? null;

  const slides = [
    {
      src: "/GCO-LOGO-noBG.png",
      alt: "Ginásio Clube de Odivelas",
      title: "Ginásio Clube de Odivelas",
      subtitle: `${idade} anos de tradição desportiva e cultural`,
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
    ultimaNoticia
      ? {
          src: ultimaNoticia.imagem || "/fallback.png",
          alt: "Última Notícia",
          title: "Última Notícia",
          subtitle: ultimaNoticia.titulo,
          description: ultimaNoticia.resumo,
          buttons: [
            {
              href: `/noticias/${ultimaNoticia.id}`,
              label: "Ver Notícia",
              className:
                "bg-blue-400 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-300 transition-colors",
            },
          ],
        }
      : {
          src: "/fallback.png",
          alt: "Carregando notícia...",
          title: "Carregando notícia...",
          subtitle: "",
          description: "",
          buttons: [],
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
      src: "/530131865_18073306919003286_1218223041355361627_n.jpg",
      alt: "Inscrições GCO",
    },
  ];

  return <HeroSectionSlider slides={slides} />;
}
