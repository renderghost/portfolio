export type OgType = 'website' | 'article';

export interface SeoHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogType?: OgType;
  ogImage?: string;
  noIndex?: boolean;
}
