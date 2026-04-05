import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

/**
 * Hook to track element visibility using Intersection Observer
 *
 * @param options - Configuration options
 * @param options.threshold - Percentage of element that must be visible (0-1)
 * @param options.triggerOnce - Whether to stop observing after first intersection
 * @param options.rootMargin - Margin around the root element
 * @returns Object with ref to attach to element and isInView boolean
 *
 * @example
 * ```tsx
 * const { ref, isInView } = trackVisibility({ threshold: 0.5, triggerOnce: true });
 * return <div ref={ref}>{isInView ? 'Visible!' : 'Hidden'}</div>;
 * ```
 */
export function useTrackVisibility<T extends HTMLElement = HTMLElement>({
  threshold = 0.1,
  triggerOnce = true,
  rootMargin = '0px',
}: UseInViewOptions = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, triggerOnce, rootMargin]);

  return { ref, isInView };
}

export { useTrackVisibility as useInView };
