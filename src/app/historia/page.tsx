import HistoriaHeroSection from '@/components/layout/História/HeroSection';
import TimelineSection from '@/components/layout/História/TimelineSection';
import ApoiosSection from '@/components/layout/História/ApoiosSection';
import { timelineItems, apoios } from '@/data/history';

export default function HistoriaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
      <HistoriaHeroSection />
      <TimelineSection items={timelineItems} />
      <ApoiosSection apoios={apoios} />
      <div className="h-20 bg-gradient-to-r from-blue-100 to-blue-50"></div>
    </div>
  );
}
