import { usePageTheme } from '@/components/Layout/Layout';
import { cn } from '@/lib/utils';
import React from 'react';
import { buttonBase, buttonVariants } from './Button.styles';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const pageTheme = usePageTheme();

  // Theme-based button colors:
  // Accent: white border, semi-transparent white bg
  // Default: blue border in light mode, white in dark, semi-transparent bg
  const themeClasses = pageTheme === 'accent'
    ? 'border-bones-white bg-bones-white-20 hover:bg-bones-white-30'
    : 'border-bones-blue dark:border-bones-white bg-bones-blue-10 dark:bg-bones-white-10 hover:bg-bones-blue-20 dark:hover:bg-bones-white-20';

  return (
    <button className={cn(buttonBase, buttonVariants[variant], themeClasses, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
