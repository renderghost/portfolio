export const paragraphStyles = {
  base: 'font-dm-sans',
  sizes: {
    body: 'text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl leading-snug sm:leading-snug md:leading-normal lg:leading-normal xl:leading-relaxed',
    blockquote: 'italic text-8xl md:text-7xl sm:text-6xl',
    byline:
      'font-medium text-1xl sm:text-1xl md:text-1xl lg:text-2xl xl:text-2xl leading-snug sm:leading-snug md:leading-normal lg:leading-normal xl:leading-normal',
    caption: 'font-medium text-sm md:text-base',
    display:
      'font-black text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl leading-tight sm:leading-tight md:leading-tight lg:leading-none xl:leading-none',
    footnote: 'text-lg md:text-base sm:text-sm',
    label:
      'font-medium text-1xl sm:text-1xl md:text-1xl lg:text-2xl xl:text-2xl leading-snug sm:leading-snug md:leading-normal lg:leading-normal xl:leading-normal',
    lede: 'italic text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl leading-snug sm:leading-snug md:leading-normal lg:leading-normal xl:leading-relaxed',
    billboard: 'font-medium text-6xl leading-tight',
  },
} as const;
