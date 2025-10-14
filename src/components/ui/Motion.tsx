'use client'

import { useInView } from '@/hooks/useInView'
import { ReactNode } from 'react'

interface MotionProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function Motion({ children, className = '', delay = 0 }: MotionProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`transform ${
        isInView
          ? 'translate-y-0 opacity-100'
          : 'translate-y-8 opacity-0'
      } transition duration-1000 ease-out ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

