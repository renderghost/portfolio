import { Heading } from '@/components/Typography/Heading/Heading';
import { Paragraph } from '@/components/Typography/Paragraph/Paragraph';
import { cn } from '@/lib/utils';
import React from 'react';
import { eventStyles } from './Event.styles';
import { EventProps } from './Event.types';

export const Event: React.FC<EventProps> = ({
  eventType,
  eventTitle,
  eventDescription,
  eventStartYear,
  eventEndYear,
  eventAffiliation,
  className = '',
}) => (
  <div className={cn(eventStyles.wrapper, className)}>
    <div className="flex items-center justify-between">
      <Paragraph size="footnote">{eventAffiliation}</Paragraph>
      <Paragraph size="footnote">
        {eventStartYear} &ndash; {eventEndYear}
      </Paragraph>
    </div>
    <div className="flex flex-col gap-2">
      <Heading level={3} style="body-title">
        {eventTitle}
      </Heading>
      <Paragraph size="body">{eventDescription}</Paragraph>
    </div>
    <Paragraph size="footnote">{eventType}</Paragraph>
  </div>
);
