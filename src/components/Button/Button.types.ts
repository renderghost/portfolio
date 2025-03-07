import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'label';
export type ButtonSize = 'small' | 'normal' | 'large';
export type ButtonShape = 'label' | 'icon';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  children?: ReactNode;
  icon?: ReactNode;
}
