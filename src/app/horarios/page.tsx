// src/app/horarios/page.tsx
import LogoRain from '@/components/layout/LogoRain';
import JogosCalendar from '@/components/JogosCalendar';
import { fetchGames } from '@/data/jogo-db'; // Importar a nova função

// Forçar renderização dinâmica para ter sempre dados frescos
export const dynamic = 'force-dynamic'; 

export default async function HorariosPage() {
  // Buscar os dados usando a função abstraída
  const events = await fetchGames('andebol');

  return (
    <main className="relative min-h-screen flex flex-col items-center bg-gradient-to-br from-yellow-50 via-white to-blue-100 overflow-hidden">
      <LogoRain fullScreen={true} count={14} speed={7} />
      
      <div className="relative z-10 w-full max-w-7xl px-4 py-8 md:py-12 mt-20 md:mt-0">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-blue-200 p-4 md:p-8">
          
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 drop-shadow-lg tracking-tight mb-2">
              JOGOS
            </h1>
            <p className="text-xl text-blue-600 font-semibold uppercase tracking-widest">
              Andebol - Época 2025/2026
            </p>
          </div>

          {/* Passar os eventos para o componente cliente */}
          <JogosCalendar events={events} />
          
          <div className="mt-6 text-center text-sm text-gray-500 bg-blue-50 p-3 rounded-lg border border-blue-100">
            * As datas e horários estão sujeitos a alterações. Confirma sempre com o teu treinador.
          </div>
        </div>
      </div>
    </main>
  );
}