export default function LoadingSpinner({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-spin rounded-full border-2 border-bones-blue/20 border-t-bones-blue dark:border-bones-cyan/20 dark:border-t-bones-cyan h-5 w-5 ${className}`} />
  )
}

