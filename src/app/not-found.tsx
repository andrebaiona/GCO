import Link from 'next/link';
import LogoRain from '@/components/layout/LogoRain';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col justify-center items-center px-4 relative overflow-hidden">
      <LogoRain fullScreen={true} count={15} speed={8} />
      
      <div className="max-w-md w-full text-center relative z-10">
        <div className="mb-8">
          <img 
            src="/GCO-LOGO-noBG.png" 
            alt="GCO Logo" 
            className="h-32 w-auto mx-auto drop-shadow-lg"
          />
        </div>
        
        <div className="mb-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h1 className="text-6xl font-bold text-blue-800 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Página não encontrada
            </h2>
            <p className="text-gray-600 mb-4">
              A página que procura não existe ou foi movida para outro local.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center shadow-md"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Ir para Início
              </Link>
              
              <Link
                href="/modalidades"
                className="bg-white hover:bg-gray-50 text-blue-800 border-2 border-blue-800 px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center shadow-md"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Ver Modalidades
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-t border-gray-200/50">
            <p className="text-sm text-gray-600 mb-4 font-medium">Pode também visitar:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/contactos" className="text-blue-600 hover:text-blue-800 hover:underline font-medium transition-colors">
                Contactos
              </Link>
              <Link href="/horarios" className="text-blue-600 hover:text-blue-800 hover:underline font-medium transition-colors">
                Horários
              </Link>
              <Link href="/noticias" className="text-blue-600 hover:text-blue-800 hover:underline font-medium transition-colors">
                Notícias
              </Link>
              <Link href="/historia" className="text-blue-600 hover:text-blue-800 hover:underline font-medium transition-colors">
                História
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
