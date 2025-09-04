'use client';

import React from 'react';
import Image from 'next/image';

interface Sponsor {
  id: number;
  name: string;
  logo: string;
  website?: string;
}

const SponsorsSection = () => {
  const sponsors: Sponsor[] = [
    { id: 1, name: 'AGP Auto', logo: '/sponsors_img/images (1).png', website: 'https://agpauto.pt/?doing_wp_cron=1753376086.5354089736938476562500' },
    { id: 2, name: 'Contas Soltas', logo: '/sponsors_img/logo-net-empregos.jpg', website: 'https://www.facebook.com/p/Contas-Soltas-100057547206888/' },
    { id: 3, name: 'Janellux', logo: '/sponsors_img/images.png', website: 'https://www.facebook.com/p/Janellux-Lda-100036607254417/' },
    { id: 4, name: 'Lord Of Light', logo: '/sponsors_img/LL-LORD-OF-LIGHT.png', website: 'https://lordoflight.pt/' },
    { id: 5, name: 'Luís Almeida', logo: '/sponsors_img/LuisAlmeida.png', website: 'https://www.facebook.com/LuisAlmeidaconsultorimobiliario' },
    { id: 6, name: 'António Paixão', logo: '/sponsors_img/Antonio_Paixao.jpg', website: '#' },
    { id: 7, name: 'AutoFornence', logo: '/sponsors_img/AutoFornence.jpeg', website: 'https://www.facebook.com/people/A-Oficina-Auto-Fornence/100063656738968/' },
    { id: 8, name: 'CED', logo: '/sponsors_img/CED.bmp', website: '#' },
    { id: 9, name: 'Decor Gesso', logo: '/sponsors_img/DecorGesso.png', website: 'https://www.facebook.com/people/Decorgesso-Lda/100009899102416/' },
    { id: 10, name: 'D Dinis', logo: '/sponsors_img/El Rei D Dinis.jpeg', website: 'https://elreiddinis.pt/' },
    { id: 11, name: 'Farmácia Gonçalves', logo: '/sponsors_img/Farmacia Goncalves.jpg', website: 'https://www.farmaciagoncalves.com.pt/' },
    { id: 12, name: 'Favorita 2', logo: '/sponsors_img/favorita2.png', website: '#' },
    { id: 13, name: 'Lara Coffee', logo: '/sponsors_img/Lara Coffee.jpeg', website: 'https://www.facebook.com/gerallaracoffee/' },
    { id: 14, name: 'Simplefy', logo: '/sponsors_img/Simplefy.jpg', website: 'https://www.simplefy.pt/pt' },
    { id: 15, name: 'MFTN', logo: '/sponsors_img/mftn.jpg', website: '#' },
    { id: 16, name: 'Simplefy', logo: '/sponsors_img/xd_logo-1-3129999812.png', website: 'https://www.xdsoftware.com/xdgc/unlimited.php' }
  ];

  const allSponsors = [...sponsors, ...sponsors];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-12 border-t border-blue-200 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-800 mb-3">
            Os Nossos Parceiros
          </h2>
          <p className="text-blue-600 text-lg">
            Agradecemos o apoio dos nossos patrocinadores
          </p>
        </div>
        <div className="sponsors-wrapper overflow-hidden relative">
          <div className="sponsors-track flex animate-scroll">
            {allSponsors.map((sponsor, index) => (
              <div
                key={`${sponsor.id}-${index}`}
                className="flex-shrink-0 mx-4 group cursor-pointer"
                onClick={() =>
                  sponsor.website &&
                  sponsor.website !== '#' &&
                  window.open(sponsor.website, '_blank')
                }
              >
                <div className="bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 border-2 border-blue-100 group-hover:border-yellow-400 w-36 h-24 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-100 group-hover:to-yellow-100">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={120}
                    height={60}
                    className="object-contain group-hover:scale-110 transition-transform duration-300 max-w-full max-h-full drop-shadow-sm"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-blue-50 via-blue-100 to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-blue-50 via-blue-100 to-transparent pointer-events-none z-10"></div>

        <div className="flex justify-center mt-8">
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 via-yellow-400 to-blue-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
