import { cn } from '@/lib/utils';
import React from 'react';
import { CardEvent } from '@/components/CardEvent/CardEvent';
import { eventsStyles } from './Events.styles';
import { EventsProps } from './Events.types';

export const Events: React.FC<EventsProps> = ({ items, className = '' }) => (
  <div className={cn(eventsStyles.wrapper, className)}>
    {items.map((item) => (
      <CardEvent
        key={item.eventTitle}
        eventType={item.eventType}
        eventTitle={item.eventTitle}
        eventDescription={item.eventDescription}
        eventStartYear={item.eventStartYear}
        eventEndYear={item.eventEndYear}
        eventAffiliation={item.eventAffiliation}
      />
    ))}
  </div>
);
