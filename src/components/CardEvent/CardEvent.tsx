import { Heading } from '@/components/Heading/Heading';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { cn } from '@/lib/utils';
import React from 'react';
import { cardEventStyles } from './CardEvent.styles';
import { CardEventProps } from './CardEvent.types';

export const CardEvent: React.FC<CardEventProps> = ({
  eventType,
  eventTitle,
  eventDescription,
  eventStartYear,
  eventEndYear,
  eventAffiliation,
  className = '',
}) => (
  <div className={cn(cardEventStyles.wrapper, className)}>
    <div className="flex items-center justify-between">
      <Paragraph size="sm">{eventAffiliation}</Paragraph>
      <Paragraph size="sm">
        {eventStartYear} &ndash; {eventEndYear}
      </Paragraph>
    </div>
    <div className="flex flex-col gap-2">
      <Heading level={3} size="lg">
        {eventTitle}
      </Heading>
      <Paragraph size="md">{eventDescription}</Paragraph>
    </div>
    <Paragraph size="sm">{eventType}</Paragraph>
  </div>
);
