'use client'

import { Motion } from '@/components/ui'
import { ReactNode } from 'react'

interface AnimatedWrapperProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function AnimatedWrapper({ children, delay = 0, className = '' }: AnimatedWrapperProps) {
  return (
    <Motion delay={delay}>
      <div className={`animate-fade-in ${className}`}>
        {children}
      </div>
    </Motion>
  )
}

