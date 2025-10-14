import { Motion, Card, CardContent, Badge } from '@/components/ui'

export function LoadingCard() {
  return (
    <Card className="h-full animate-pulse">
      <div className="bg-bones-blue/10 dark:bg-bones-cyan/10 aspect-video" />
      <CardContent>
        <div className="h-6 w-24 bg-bones-blue/10 dark:bg-bones-cyan/10 rounded-full mb-4" />
        <div className="h-8 w-3/4 bg-bones-blue/10 dark:bg-bones-cyan/10 rounded mb-3" />
        <div className="h-4 w-full bg-bones-blue/10 dark:bg-bones-cyan/10 rounded mb-2" />
        <div className="h-4 w-2/3 bg-bones-blue/10 dark:bg-bones-cyan/10 rounded mb-4" />
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-6 w-16 bg-bones-blue/10 dark:bg-bones-cyan/10 rounded-full" />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export function LoadingArticle() {
  return (
    <div className="border-l-4 border-bones-blue/20 dark:border-bones-cyan/20 pl-6 py-4 animate-pulse">
      <div className="h-8 w-3/4 bg-bones-blue/10 dark:bg-bones-cyan/10 rounded mb-3" />
      <div className="h-4 w-full bg-bones-blue/10 dark:bg-bones-cyan/10 rounded mb-2" />
      <div className="h-4 w-1/2 bg-bones-blue/10 dark:bg-bones-cyan/10 rounded" />
    </div>
  )
}

export function LoadingGrid({ count, Component, className }: { count: number; Component: React.ComponentType; className?: string }) {
  return (
    <div className={`animate-fade-in ${className}`}>
      {[...Array(count)].map((_, i) => (
        <Motion key={i} delay={i * 100}>
          <Component />
        </Motion>
      ))}
    </div>
  )
}

