export interface BaseCardNoteProps {
  className?: string;
  coverImage?: string;
  badge?: {
    label: string;
    variant?: 'primary' | 'secondary';
  };
  meta?: {
    company?: string;
    date?: string;
    subtitle?: string;
  };
  title: string;
  description?: string;
  onClick?: () => void;
}

export interface Study {
  name: string;
  summary: string;
  coverImage: string;
  type: string;
  endDate: string;
  company: string;
  slug: string;
}
