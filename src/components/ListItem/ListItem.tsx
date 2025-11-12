import { cn } from '@/lib/utils';
import React from 'react';
import { listItemBase, listItemSizes } from './ListItem.styles';
import { ListItemProps } from './ListItem.types';

export const ListItem: React.FC<ListItemProps> = ({ children, size = 'md', className = '', ...props }) => {
  return (
    <li className={cn(listItemBase, listItemSizes[size], className)} {...props}>
      {children}
    </li>
  );
};

export default ListItem;
