import { ReactNode } from 'react'
import { Text } from '.'

interface CardProps {
  children: ReactNode
  className?: string
}

interface CardImageProps {
  src: string
  alt: string
  className?: string
}

interface CardContentProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <article className={`bg-bones-whitesmoke dark:bg-bones-dimgray rounded-lg overflow-hidden ${className}`}>
      {children}
    </article>
  )
}

export function CardImage({ src, alt, className = '' }: CardImageProps) {
  return (
    <div className="aspect-video overflow-hidden">
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
      />
    </div>
  )
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  )
}

