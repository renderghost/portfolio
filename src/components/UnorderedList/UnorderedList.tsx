import { cn } from '@/lib/utils';
import React from 'react';
import { bulletStyles, listBase } from './UnorderedList.styles';
import { UnorderedListProps } from './UnorderedList.types';

export const UnorderedList: React.FC<UnorderedListProps> = ({ children, bullet = 'disc', className = '', ...props }) => {
  return (
    <ul className={cn(listBase, bulletStyles[bullet], className)} {...props}>
      {children}
    </ul>
  );
};

export default UnorderedList;
