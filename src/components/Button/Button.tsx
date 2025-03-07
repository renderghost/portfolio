import { cn } from '@/lib/utils';
import React from 'react';
import {
  buttonBaseStyles,
  buttonShapeStyles,
  buttonSizeStyles,
  buttonVariantStyles,
  hoverAnimation,
} from './Button.styles';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'normal',
  shape = 'label',
  children,
  icon,
  className,
  ...props
}) => {
  const variantStyles = buttonVariantStyles[variant];
  const sizeStyles = buttonSizeStyles[size];
  const shapeStyles = buttonShapeStyles[shape];
  const hoverEffect = variant !== 'label' ? hoverAnimation : '';

  return (
    <button className={cn(buttonBaseStyles, sizeStyles, variantStyles, shapeStyles, hoverEffect, className)} {...props}>
      {shape === 'icon' && icon ? (
        <span className="inline-flex items-center justify-center">{icon}</span>
      ) : (
        <span>{children}</span>
      )}
    </button>
  );
};
