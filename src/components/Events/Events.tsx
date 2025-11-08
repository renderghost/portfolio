import { cn } from '@/lib/utils';
import React from 'react';
import { Event } from './Event';
import { eventsStyles } from './Events.styles';
import { EventsProps } from './Events.types';

export const Events: React.FC<EventsProps> = ({ items, className = '' }) => (
  <div className={cn(eventsStyles.wrapper, className)}>
    {items.map((item) => (
      <Event
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
