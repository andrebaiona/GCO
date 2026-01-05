import TimelineProgress from './TimelineProgress';
import TimelineItem from './TimelineItem';
import { TimelineItem as TimelineItemType } from '@/data/history';

interface TimelineSectionProps {
  items: TimelineItemType[];
}

export default function TimelineSection({ items }: TimelineSectionProps) {
  return (
    <div id="timeline-section" className="relative py-16">
      <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-1 bg-gray-300 opacity-40"></div>
      <TimelineProgress />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {items.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              title={item.title}
              subtitle={item.subtitle}
              content={item.content}
              image={item.image}
              emoji={item.emoji}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

