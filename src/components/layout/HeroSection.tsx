import { calcularIdadeClube } from "@/utils/idadeClube";
import { fetchNoticias } from "@/data/noticias-db";
import HeroSectionSlider from "./HeroSectionSlider";

export default async function HeroSection() {
  const idade = calcularIdadeClube(new Date(1978, 4, 5));
  const noticias = await fetchNoticias({ limit: 1, order: "desc" });

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
    noticias.length > 0
      ? {
          src: noticias[0].imagem || "/fallback.png",
          alt: "Última Notícia",
          title: "Última Notícia",
          subtitle: noticias[0].titulo,
          description: noticias[0].resumo,
          buttons: [
            {
              href: `/noticias/${noticias[0].id}`,
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
    },
  ];

  return <HeroSectionSlider slides={slides} />;
}
