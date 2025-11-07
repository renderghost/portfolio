interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

export default function Heading({ level = 1, children, className = '' }: HeadingProps) {
  const baseStyles = 'font-serif text-bones-black dark:text-bones-white';
  let sizeStyles = '';

  switch (level) {
    case 1:
      sizeStyles = 'text-4xl md:text-6xl mb-4';
      break;
    case 2:
      sizeStyles = 'text-3xl md:text-4xl mb-4';
      break;
    case 3:
      sizeStyles = 'text-2xl md:text-3xl mb-3';
      break;
    case 4:
      sizeStyles = 'text-xl md:text-2xl mb-2';
      break;
    case 5:
      sizeStyles = 'text-lg md:text-xl mb-2';
      break;
    case 6:
      sizeStyles = 'text-base md:text-lg mb-2';
      break;
  }

  const Component = `h${level}` as keyof JSX.IntrinsicElements;

  return <Component className={`${baseStyles} ${sizeStyles} ${className}`.trim()}>{children}</Component>;
}
