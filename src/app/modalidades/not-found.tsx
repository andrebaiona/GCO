import Link from 'next/link';

export default function ModalidadeNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <img 
            src="/Logo_GCO_Natal.png" 
            alt="GCO Logo" 
            className="h-20 w-auto mx-auto"
          />
        </div>
        
        <div className="mb-8">
          <div className="text-5xl mb-4">🏃‍♂️</div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Modalidade não encontrada
          </h2>
          <p className="text-gray-600 mb-8">
            A modalidade que procura não existe ou não está disponível no momento.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/modalidades"
            className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
          >
            Ver Todas as Modalidades
          </Link>
          
          <Link
            href="/"
            className="bg-white hover:bg-gray-50 text-blue-800 border-2 border-blue-800 px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
          >
            Voltar ao Início
          </Link>
        </div>
      </div>
    </div>
  );
}
