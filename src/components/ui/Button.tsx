import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  href?: string
  external?: boolean
  disabled?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  external = false,
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bones-blue dark:focus:ring-bones-cyan disabled:opacity-50 disabled:cursor-not-allowed'
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  const variantStyles = {
    primary: 'bg-bones-blue text-white hover:bg-bones-blue/90 dark:bg-bones-cyan dark:text-bones-black dark:hover:bg-bones-cyan/90',
    secondary: 'bg-bones-blue/10 text-bones-blue hover:bg-bones-blue/20 dark:bg-bones-cyan/10 dark:text-bones-cyan dark:hover:bg-bones-cyan/20',
    outline: 'border-2 border-bones-blue text-bones-blue hover:bg-bones-blue/10 dark:border-bones-cyan dark:text-bones-cyan dark:hover:bg-bones-cyan/10',
  }

  const styles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`

  if (href) {
    const linkProps = external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {}

    return external ? (
      <a href={href} className={styles} {...linkProps}>
        {children}
      </a>
    ) : (
      <Link href={href} className={styles}>
        {children}
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={styles}
      type="button"
    >
      {children}
    </button>
  )
}

