interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const baseStyles = 'inline-block px-3 py-1 rounded-full text-sm';
  const variantStyles =
    variant === 'default'
      ? 'bg-bones-blue/10 text-bones-blue dark:bg-bones-blue/20 dark:text-bones-cyan'
      : 'border border-bones-blue text-bones-blue dark:border-bones-cyan dark:text-bones-cyan';

  return <span className={`${baseStyles} ${variantStyles} ${className}`}>{children}</span>;
}
