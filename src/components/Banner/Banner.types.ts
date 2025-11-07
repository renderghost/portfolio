export interface BannerProps {
  message: string;
  linkText?: string;
  linkUrl?: string;
  onClose?: () => void;
  className?: string;
}
