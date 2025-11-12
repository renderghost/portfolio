import { cn } from '@/lib/utils';
import React from 'react';
import { section } from './Section.styles';
import { SectionProps } from './Section.types';

export const Section: React.FC<SectionProps> = ({ children, className = '', ...props }) => {
  return (
    <section className={cn(section, className)} {...props}>
      <div className="container flex flex-col gap-8 mx-auto">{children}</div>
    </section>
  );
};

export default Section;
