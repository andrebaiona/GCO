// src/app/horarios/page.tsx
import LogoRain from '@/components/layout/LogoRain';
import Link from 'next/link';

export default function HorariosSelectionPage() {
  
  // Configuração dos botões
  const modalidades = [
    { 
      nome: 'Andebol', 
      slug: 'andebol', 
      ativo: true, 
      desc: 'Escalões de Formação e Séniores',
      color: 'from-blue-600 to-blue-800'
    },
    { 
      nome: 'Ginástica', 
      slug: 'ginastica', 
      ativo: false, 
      desc: 'Classes de Formação e Competição',
      color: 'from-pink-500 to-rose-600'
    },
    { 
      nome: 'Patinagem Artística', 
      slug: 'patinagem-artistica', 
      ativo: false, 
      desc: 'Iniciação e Pré-Competição',
      color: 'from-orange-400 to-orange-600'
    },
    { 
      nome: 'Hóquei em Patins', 
      slug: 'hoquei', 
      ativo: false, 
      desc: 'Escalões de Formação',
      color: 'from-red-600 to-red-800'
    },
    { 
      nome: 'Xadrez', 
      slug: 'xadrez', 
      ativo: false, 
      desc: 'Escola de Xadrez',
      color: 'from-emerald-600 to-emerald-800'
    },
  ];

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 via-white to-blue-100 overflow-hidden p-6">
      <LogoRain fullScreen={true} count={12} speed={8} />
      
      <div className="relative z-10 w-full max-w-5xl">
        
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 drop-shadow-sm tracking-tight mb-4">
            CALENDÁRIOS DOS JOGOS
          </h1>
          <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            Selecione a modalidade para consultar o calendário de jogos e competições da época 2025/2026.
          </p>
        </div>
        {/* Grelha de Botões */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modalidades.map((mod) => (
            mod.ativo ? (
              // Botão ATIVO (Andebol)
              <Link 
                href={`/horarios/${mod.slug}`} 
                key={mod.slug}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border-2 border-transparent hover:border-blue-200"
              >
                <div className={`absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity`}>
                   {/* Podes colocar aqui um ícone grande de fundo se quiseres */}
                </div>
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br ${mod.color} text-white shadow-md`}>
                    {/* Ícone simples ou primeira letra */}
                    <img 
                      src={`/icones-modalidades/${mod.slug}.png`} 
                      alt={mod.nome}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-1 group-hover:text-blue-700 transition-colors">
                    {mod.nome}
                  </h2>
                  <p className="text-sm text-gray-500 font-medium">
                    {mod.desc}
                  </p>
                  <div className="mt-4 flex items-center text-blue-600 font-bold text-sm">
                    Ver Calendário <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ) : (
              // Botão INATIVO
              <div 
                key={mod.slug}
                className="relative overflow-hidden rounded-2xl bg-gray-50 p-6 shadow-md border border-gray-100 opacity-80 cursor-not-allowed grayscale-[0.5]"
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gray-200 text-gray-500 shadow-inner">
                        <img 
                            src={`/icones-modalidades/${mod.slug}.png`} 
                            alt={mod.nome}
                            className="w-8 h-8 object-contain"
                        />
                    </div>
                    <span className="bg-gray-200 text-gray-500 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                      Brevemente
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-400 mb-1">
                    {mod.nome}
                  </h2>
                  <p className="text-sm text-gray-400 font-medium">
                    {mod.desc}
                  </p>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Nota de Rodapé */}
        <div className="mt-12 text-center">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-semibold text-sm hover:underline">
                ← Voltar à página principal
            </Link>
        </div>

      </div>
    </main>
  );
}