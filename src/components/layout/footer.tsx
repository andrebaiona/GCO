import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const modalidades = [
    { name: 'Ginástica', href: '/modalidades/ginastica' },
    { name: 'Patinagem Artística', href: '/modalidades/patinagem-artistica' },
    { name: 'Andebol', href: '/modalidades/andebol' },
    { name: 'Hóquei em Patins', href: '/modalidades/hoquei-patins' },
    { name: 'Xadrez', href: '/modalidades/xadrez' },
  ];

  const linksSociais = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/GINASIOCLUBEODIVELAS/?locale=pt_PT',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/gco_odivelas/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5 5 0 1 1 0 10a5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7zm5.25.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" />
        </svg>
      )
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg p-1">
                <img
                  src="/GCO-LOGO-noBG.png"
                  alt="Ginásio Clube de Odivelas Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Ginásio Clube de Odivelas
                </h3>
                <p className="text-sm text-gray-300">Desporto e Cultura</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Com sede em Odivelas, o clube dedica-se à promoção da prática desportiva e cultural, 
              oferecendo diversas modalidades para todas as idades.
            </p>
            
            <div className="flex space-x-4">
              {linksSociais.map((social, idx) => (
                  <a
                  key={social.name + '-' + idx}
                  href={social.href}
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                  aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  {social.icon}
                  </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Modalidades</h3>
            <ul className="space-y-2">
              {modalidades.slice(0, 5).map((modalidade, idx) => (
                <li key={modalidade.name + '-' + idx}>
                  <Link
                    href={modalidade.href}
                    className="text-gray-300 hover:text-yellow-400 text-sm transition-colors"
                  >
                    {modalidade.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/modalidades"
                  className="text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors"
                >
                  Ver todas →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/horarios"
                  className="text-gray-300 hover:text-yellow-400 text-sm transition-colors"
                >
                  Horários
                </Link>
              </li>
              <li>
                <Link
                  href="/inscricoes"
                  className="text-gray-300 hover:text-yellow-400 text-sm transition-colors"
                >
                  Inscrições
                </Link>
              </li>
              <li>
                <Link
                  href="/noticias"
                  className="text-gray-300 hover:text-yellow-400 text-sm transition-colors"
                >
                  Notícias
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contactos</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-gray-300 text-sm">
                      Rua Tomás José Olaio,
                      2675-453, Odivelas
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <p className="text-gray-300 text-sm">+351 219 326 546</p>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <p className="text-gray-300 text-sm">geral@gcodivelas.pt</p>
              </div>

              <div className="mt-4">
                <Link
                  href="/contactos"
                  className="inline-flex items-center px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Contactar-nos
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Ginásio Clube de Odivelas. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;