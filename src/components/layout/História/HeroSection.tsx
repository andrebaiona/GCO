import LogoRain from '@/components/layout/LogoRain';
import { calcularIdadeClube } from '@/utils/idadeClube';

export default function HistoriaHeroSection() {
  const idade = calcularIdadeClube(new Date(1978, 4, 5));

  return (
    <div className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20 relative z-3">
      <LogoRain />
      <LogoRain />
      <LogoRain />
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          A NOSSA HISTÓRIA
        </h1>
        <div className="flex items-center justify-center space-x-4 text-2xl font-semibold">
          <span className="text-yellow-400">1978</span>
          <span>•</span>
          <span className="text-yellow-400">2025</span>
        </div>
        <p className="text-xl mt-4 opacity-90">
          {idade} anos de paixão, dedicação e conquistas
        </p>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-white rounded-full"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-yellow-400 rounded-full"></div>
      </div>
    </div>
  );
}

