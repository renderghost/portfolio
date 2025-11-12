import { cn } from '@/lib/utils';
import React from 'react';
import { listBase, numberStyles } from './OrderedList.styles';
import { OrderedListProps } from './OrderedList.types';

export const OrderedList: React.FC<OrderedListProps> = ({
  children,
  numberStyle = 'decimal',
  className = '',
  ...props
}) => {
  return (
    <ol className={cn(listBase, numberStyles[numberStyle], className)} {...props}>
      {children}
    </ol>
  );
};

export default OrderedList;
