import { Heading } from '@/components/Heading/Heading';
import { Paragraph } from '@/components/Paragraph/Paragraph';
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
      <Paragraph size="sm">{eventAffiliation}</Paragraph>
      <Paragraph size="sm">
        {eventStartYear} &ndash; {eventEndYear}
      </Paragraph>
    </div>
    <div className="flex flex-col gap-2">
      <Heading level={3} size="md">
        {eventTitle}
      </Heading>
      <Paragraph size="md">{eventDescription}</Paragraph>
    </div>
    <Paragraph size="sm">{eventType}</Paragraph>
  </div>
);
