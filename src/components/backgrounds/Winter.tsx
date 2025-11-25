"use client";

import React from "react";

type Flake = {
  id: number;
  left: number; 
  size: number;
  opacity: number;
  duration: number;
  delay: number; 
  xMid: number; 
  xEnd: number;
};

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function WinterBackground({ count = 50, inline = false }: { count?: number; inline?: boolean }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const actualCount = inline ? Math.min(count, 20) : count;
  const flakes = React.useMemo<Flake[]>(() => {
    if (!mounted) return [];
    const arr: Flake[] = [];
    for (let i = 0; i < actualCount; i++) {
      const left = random(0, 100); 
      const size = Math.round(random(8, 16));
      const opacity = Number(random(0.2, 0.7).toFixed(2));
      const duration = Number(random(15, 25).toFixed(2));
      const delay = Number((random(-duration, 0)).toFixed(2));
      const xEnd = Number(random(-10, 10).toFixed(2));
      const xMid = Number((xEnd / 2 + random(-6, 6)).toFixed(2));

      arr.push({ id: i, left, size, opacity, duration, delay, xMid, xEnd });
    }
    return arr;
  }, [actualCount, mounted]);

  const containerClass = inline ? "pointer-events-none absolute inset-0 z-0 overflow-hidden" : "pointer-events-none fixed inset-0 z-2 overflow-hidden";

  if (!mounted) {
    return <div aria-hidden className={containerClass} />;
  }

  return (
    <div aria-hidden className={containerClass}>
      <style>{`
        .winter-flake {
          will-change: transform;
        }

        @keyframes fall {
          0% {
            transform: translateX(var(--x0)) translateY(-10vh) scale(var(--s));
            opacity: 0;
          }
          10% {
            opacity: calc(var(--o) * 0.9);
          }
          50% {
            transform: translateX(var(--x1)) translateY(50vh) scale(var(--s));
          }
          100% {
            transform: translateX(var(--x2)) translateY(110vh) scale(var(--s));
            opacity: 0.95;
          }
        }
      `}</style>

      {flakes.map((f) => {
        const style: React.CSSProperties & Record<string, string | number> = {
          left: `${f.left}vw`,
          width: `${f.size}px`,
          height: `${f.size}px`,
          opacity: String(f.opacity),
          ['--x0' as any]: '0vw',
          ['--x1' as any]: `${f.xMid}vw`,
          ['--x2' as any]: `${f.xEnd}vw`,
          ['--s' as any]: (f.size / 12).toFixed(2),
          ['--o' as any]: f.opacity,
          animation: `fall ${f.duration}s linear ${f.delay}s infinite`,
        };

        return (
          <div
            key={f.id}
            className="winter-flake absolute rounded-full bg-white"
            style={style}
          />
        );
      })}
    </div>
  );
}
