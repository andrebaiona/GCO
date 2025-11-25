'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setIsMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const modalidades = [
    { name: 'Andebol', href: '/modalidades/andebol' },
    { name: 'Ginástica', href: '/modalidades/ginastica' },
    { name: 'Patinagem Artística', href: '/modalidades/patinagem-artistica' },
    { name: 'Xadrez', href: '/modalidades/xadrez' },
    { name: 'Hóquei em Patins', href: '/modalidades/hoquei-em-patins' },
  ];

  const clube = [
    { name: 'História', href: '/historia' },
    { name: 'Ser Sócio', href: '/ser_socio' },
    { name: 'Contactos', href: '/contactos' },
    { name: 'Documentos Importantes', href: '/documentos-importantes' },
    { name: 'Orgãos Sociais', href: '/orgaos_sociais' }
  ];

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav
      ref={navbarRef}
      className="bg-gray-900 shadow-lg border-b-4 border-blue-800 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src="/Logo_GCO_Natal.png"
                  alt="Ginásio Clube de Odivelas Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-white">
                  Ginásio Clube de Odivelas
                </h1>
                <p className="text-sm text-gray-200">Instituição de Utilidade Pública</p>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-yellow-200 font-medium transition-colors"
            >
              Início
            </Link>
            <Link
              href="/noticias"
              className="text-white hover:text-yellow-200 font-medium transition-colors"
            >
              Notícias
            </Link>
            <div className="relative">
              <button
                onClick={() => toggleDropdown('clube')}
                className="text-white hover:text-yellow-200 font-medium transition-colors flex items-center"
              >
                Clube
                <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {activeDropdown === 'clube' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  {clube.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => toggleDropdown('modalidades')}
                className="text-white hover:text-yellow-200 font-medium transition-colors flex items-center"
              >
                Modalidades
                <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {activeDropdown === 'modalidades' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  {modalidades.map((modalidade) => (
                    <Link
                      key={modalidade.name}
                      href={modalidade.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {modalidade.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/horarios"
              className="text-white hover:text-yellow-200 font-medium transition-colors"
            >
              Horários
            </Link>
            <Link
              href="/inscricoes"
              className="bg-blue-800 text-white px-6 py-2 rounded-full hover:bg-blue-900 transition-colors font-medium"
            >
              Inscrições
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-800 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-800 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>

              <div className="px-3 py-2">
                <button
                  onClick={() => toggleDropdown('modalidades-mobile')}
                  className="flex justify-between items-center w-full text-left text-gray-700 hover:text-blue-800"
                >
                  Modalidades
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {activeDropdown === 'modalidades-mobile' && (
                  <div className="mt-2 pl-4 space-y-1">
                    {modalidades.map((modalidade) => (
                      <Link
                        key={modalidade.name}
                        href={modalidade.href}
                        className="block py-1 text-sm text-gray-600 hover:text-blue-800"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setActiveDropdown(null);
                        }}
                      >
                        {modalidade.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="px-3 py-2">
                <button
                  onClick={() => toggleDropdown('clube-mobile')}
                  className="flex justify-between items-center w-full text-left text-gray-700 hover:text-blue-800"
                >
                  Clube
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {activeDropdown === 'clube-mobile' && (
                  <div className="mt-2 pl-4 space-y-1">
                    {clube.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block py-1 text-sm text-gray-600 hover:text-blue-800"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setActiveDropdown(null);
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/horarios"
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-800 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Atletas
              </Link>
              

              <Link
                href="/horarios"
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-800 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Horários
              </Link>

              <Link
                href="/noticias"
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-800 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Notícias
              </Link>

              <Link
                href="/inscricoes"
                className="block mx-3 my-2 px-4 py-2 bg-blue-800 text-white text-center rounded-full hover:bg-blue-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Inscrições
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;