interface TextProps {
  variant?: 'body' | 'lead' | 'small';
  children: React.ReactNode;
  className?: string;
}

export default function Text({ variant = 'body', children, className = '' }: TextProps) {
  const baseStyles = 'text-bones-dimgray dark:text-bones-whitesmoke';
  let variantStyles = '';

  switch (variant) {
    case 'lead':
      variantStyles = 'text-xl md:text-2xl mb-6';
      break;
    case 'body':
      variantStyles = 'text-base mb-4';
      break;
    case 'small':
      variantStyles = 'text-sm';
      break;
  }

  return <p className={`${baseStyles} ${variantStyles} ${className}`.trim()}>{children}</p>;
}
