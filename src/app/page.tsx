import Link from "next/link";
import HeroSection from "@/components/layout/HeroSection";
import ModalidadesSection from "@/components/layout/ModalidadesSection";
import NoticiasSection from "@/components/layout/NoticiasSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSection />
      <ModalidadesSection />
      <NoticiasSection />
      
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Junte-se à Nossa Equipa
          </h2>
          <p className="text-xl text-blue-800 mb-8 max-w-2xl mx-auto">
            Venha fazer parte da família GCO e desenvolva o seu potencial desportivo connosco
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/inscricoes"
              className="bg-blue-800 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-900 transition-colors"
            >
              Inscreva-se Agora
            </Link>
            <Link
              href="mailto:geral@gcodivelas.pt"
              className="border-2 border-blue-800 text-blue-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800 hover:text-white transition-colors"
            >
              Contactar Tryouts
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
