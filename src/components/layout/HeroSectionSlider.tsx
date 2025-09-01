"use client";
import { useState, useEffect } from "react";

interface Button {
  href: string;
  label: string;
  className: string;
}

interface Slide {
  src?: string;
  alt?: string;
  title: string;
  subtitle?: string;
  description?: string;
  buttons: Button[];
}

interface Props {
  slides: Slide[];
}

export default function HeroSectionSlider({ slides }: Props) {
  const [slide, setSlide] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setSlide((prev) => (prev + 1) % slides.length);
        setAnimating(false);
      }, 600);
    }, 8000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const current = slides[slide];

  return (
    <section className="relative bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 text-white py-20 min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div
          className={`transition-all duration-700 ${
            animating ? "opacity-0 translate-x-10" : "opacity-100 translate-x-0"
          }`}
        >
          {slide === 1 || slide === 2 ? (
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 min-h-[400px]">
              <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center items-center">
                <div className="bg-white/10 rounded-xl shadow-lg w-[280px] h-[300px] md:w-[360px] md:h-[440px] flex items-center justify-center">
                  <img
                    src={
                      slide === 1
                        ? current.src
                        : "/530131865_18073306919003286_1218223041355361627_n.jpg"
                    }
                    alt={current.alt}
                    className="object-cover rounded-xl shadow-lg w-full h-full"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{current.title}</h1>
                <p className="text-xl md:text-2xl mb-8 text-blue-100">{current.subtitle}</p>
                <p className="text-lg mb-8 max-w-3xl text-blue-50">{current.description}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  {current.buttons.map((btn, idx) => (
                    <a key={idx} href={btn.href} className={btn.className}>
                      {btn.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            // Slide principal do clube
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <img
                  src={current.src}
                  alt={current.alt}
                  className="h-24 w-24 object-contain mx-auto transition-all duration-1000"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{current.title}</h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">{current.subtitle}</p>
              <p className="text-lg mb-8 max-w-3xl mx-auto text-blue-50">{current.description}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {current.buttons.map((btn, idx) => (
                  <a key={idx} href={btn.href} className={btn.className}>
                    {btn.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
