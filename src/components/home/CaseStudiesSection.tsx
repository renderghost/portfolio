'use client'

import { Suspense } from 'react'
import { Heading, Button, Motion } from '@/components/ui'
import AnimatedWrapper from '@/components/ui/AnimatedWrapper'
import { LoadingCard, LoadingGrid } from './LoadingStates'
import CaseStudiesGrid from './grids/CaseStudiesGrid'

export default function CaseStudiesSection() {
  return (
    <section className="mb-16">
      <Motion>
        <div className="flex items-center justify-between mb-8">
          <Suspense fallback={
            <LoadingGrid 
              count={3} 
              Component={LoadingCard} 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
            />
          }>
            <AnimatedWrapper>
              <CaseStudiesGrid />
            </AnimatedWrapper>
          </Suspense>
