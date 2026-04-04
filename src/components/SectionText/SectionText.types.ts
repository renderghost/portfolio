export interface SectionTextProps {
  body: string;
  heading?: string;
  showHeading?: boolean;
  showLink?: boolean;
  linkLabel?: string;
  linkHref?: string;
  size?: 'md' | 'lg';
  usecase?: 'full' | '2/3';
  className?: string;
}
