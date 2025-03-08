import { SectionContext } from '@/components/Section/SectionContext';
import { cn } from '@/lib/utils';
import React, { useContext } from 'react';
import { dividerStyles } from './Divider.styles';

export const Divider: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme } = useContext(SectionContext);

  return <hr className={cn(dividerStyles.base, dividerStyles.themes[theme], className)} />;
};
