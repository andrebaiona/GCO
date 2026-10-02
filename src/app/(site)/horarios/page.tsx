'use client';

import LogoRain from '@/components/layout/LogoRain';
import { useState } from 'react';


  export default function HorariosPage() {
    return (
      <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-white to-blue-100 overflow-hidden">
        <LogoRain fullScreen={true} count={14} speed={7} />
        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-12 rounded-xl shadow-xl bg-white/80 backdrop-blur-md border border-gray-200">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 drop-shadow-lg">Horários</h1>
          <p className="text-lg md:text-xl text-gray-700 font-medium mb-2">Ainda por determinar</p>
          <span className="text-sm text-gray-500">Em breve serão publicados os horários das modalidades / eventos do clube.</span>
        </div>
      </main>
    );
  }