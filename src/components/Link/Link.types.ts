export type LinkColor = 'blue' | 'white' | 'black';
export type LinkSize = 'base' | 'large';
export type LinkIcon = 'left' | 'right' | 'none';

export interface LinkProps {
  href: string;
  label: string;
  color?: LinkColor;
  size?: LinkSize;
  icon?: LinkIcon;
  iconChar?: string;
  className?: string;
  wrap?: boolean;
}
