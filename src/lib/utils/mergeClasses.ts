import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges class names using clsx and tailwind-merge
 * Combines multiple class values and resolves Tailwind CSS conflicts
 *
 * @param inputs - Class values to merge (strings, objects, arrays)
 * @returns Merged class string with Tailwind conflicts resolved
 *
 * @example
 * ```tsx
 * mergeClasses('px-4', 'px-2') // => 'px-2' (later wins)
 * mergeClasses('text-red-500', condition && 'text-blue-500') // => conditional classes
 * ```
 */
export function mergeClasses(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Legacy export for backward compatibility
export { mergeClasses as cn };
