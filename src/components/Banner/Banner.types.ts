import { bannerStyles } from './Banner.styles';

export type BannerTheme = keyof typeof bannerStyles.themes;

export interface BannerProps {
  message: string;
  linkText?: string;
  linkUrl?: string;
  theme?: BannerTheme;
  onClose?: () => void;
  className?: string;
}
