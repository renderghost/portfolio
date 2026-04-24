export interface SectionImageProps {
  src: string;
  alt: string;
  caption?: string;
  usecase?: 'full' | 'large' | 'default' | 'small';
  className?: string;
}
