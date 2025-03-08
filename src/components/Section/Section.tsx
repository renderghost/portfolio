import { cn } from '@/lib/utils';
import React from 'react';
import { sectionStyles } from './Section.styles';
import { SectionProps } from './Section.types';
import { SectionContext } from './SectionContext';

export const Section: React.FC<SectionProps> = ({ theme = 'mono', children, className = '', ...props }) => {
  return (
    <SectionContext.Provider value={{ theme }}>
      <section className={cn(sectionStyles.base, sectionStyles.themes[theme], className)} {...props}>
        <div className="container flex flex-col gap-16 mx-auto">{children}</div>
      </section>
    </SectionContext.Provider>
  );
};

export default Section;
