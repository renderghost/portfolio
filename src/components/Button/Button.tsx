import { SectionContext } from '@/components/Section/SectionContext';
import { cn } from '@/lib/utils';
import React, { useContext } from 'react';
import { ButtonStyles } from './Button.styles';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const { theme } = useContext(SectionContext);

  return (
    <button className={cn(ButtonStyles.variants[variant], ButtonStyles.themes[theme], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
