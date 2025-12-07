interface ApoiosSectionProps {
  apoios: string[];
}

export default function ApoiosSection({ apoios }: ApoiosSectionProps) {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <span className="mr-3">🤝</span>
            Apoios Institucionais
          </h2>
          <p className="text-xl mb-8 opacity-90 italic">
            Gratidão a quem caminha ao nosso lado
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <p className="text-lg mb-6 leading-relaxed">
              O crescimento e continuidade do clube só têm sido possíveis com o apoio de várias entidades e instituições, às quais deixamos o nosso profundo agradecimento:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {apoios.map((apoio, index) => (
                <div key={index} className="bg-white/20 rounded-lg p-4 hover:bg-white/30 transition-colors duration-300">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-white font-medium">{apoio}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

