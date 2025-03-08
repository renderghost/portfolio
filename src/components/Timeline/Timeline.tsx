import { Heading } from '@/components/Typography/Heading/Heading';
import { Paragraph } from '@/components/Typography/Paragraph/Paragraph';
import { cn } from '@/lib/utils';
import React from 'react';
import { timelineStyles } from './Timeline.styles';
import { TimelineProps } from './Timeline.types';

export const Timeline: React.FC<TimelineProps> = ({ items, className }) => {
  return (
    <ol className={cn(timelineStyles.wrapper, className)}>
      {items.map((item, idx) => (
        <li key={idx} className={timelineStyles.item}>
          <div className="flex items-center">
            <span className={timelineStyles.indicator}></span>
            <span className={timelineStyles.date}>{item.date}</span>
          </div>
          <div className={timelineStyles.contentWrapper}>
            <Heading level={4} style="footnote-title" className={timelineStyles.title}>
              {item.title}
            </Heading>
            <Paragraph size="footnote" className={timelineStyles.description}>
              {item.description}
            </Paragraph>
          </div>
        </li>
      ))}
    </ol>
  );
};
