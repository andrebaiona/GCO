import Image from 'next/image';

interface TimelineItemProps {
  year: string;
  title: string;
  subtitle: string;
  content: string;
  image: string;
  emoji: string;
  index: number;
}

export default function TimelineItem({
  year,
  title,
  subtitle,
  content,
  image,
  emoji,
  index,
}: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <div className="mb-20 relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full border-4 border-white shadow-lg z-20"></div>
      
      {/* Desktop View */}
      <div className={`hidden lg:flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className="w-1/2 px-8">
          <div className={`${isEven ? 'ml-auto mr-8' : 'mr-auto ml-8'} max-w-lg`}>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative overflow-hidden">
                <Image
                  src={image}
                  alt={`${title} - ${year}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-1/2 px-8">
          <div className={`${isEven ? 'mr-auto ml-8' : 'ml-auto mr-8'} max-w-lg`}>
            <div className="bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-bold text-xl shadow-lg">
                  {emoji} {year}
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-3">
                {title}
              </h2>
              
              <h3 className="text-xl text-blue-600 font-semibold mb-6 italic">
                {subtitle}
              </h3>
              
              <div className="text-gray-700 leading-relaxed space-y-4">
                {content.split('\n\n').map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-base">
                    {paragraph.split('\n').map((line, lIndex) => (
                      <span key={lIndex}>
                        {line}
                        {lIndex < paragraph.split('\n').length - 1 && <br />}
                      </span>  
                    ))}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile View */}
      <div className="lg:hidden">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mt-8 mx-4">
          <div className="relative overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative overflow-hidden">
              <Image
                src={image}
                alt={`${title} - ${year}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                {emoji} {year}
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {title}
            </h2>
            
            <h3 className="text-lg text-blue-600 font-semibold mb-4 italic">
              {subtitle}
            </h3>
            
            <div className="text-gray-700 leading-relaxed space-y-3">
              {content.split('\n\n').map((paragraph, pIndex) => (
                <p key={pIndex} className="text-sm">
                  {paragraph.split('\n').map((line, lIndex) => (
                    <span key={lIndex}>
                      {line}
                      {lIndex < paragraph.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

