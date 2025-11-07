import { cn } from '@/lib/utils';
import React from 'react';
import { Paragraph } from '../Paragraph/Paragraph';
import { Link } from '../Link/Link';
import { banner } from './Banner.styles';
import { BannerProps } from './Banner.types';

export const Banner: React.FC<BannerProps> = ({ message, linkText, linkUrl, className = '' }) => {
  return (
    <div className={cn(banner, className)} role="banner">
      <div className="flex items-center mx-auto">
        <Paragraph className="text-sm font-normal">
          {message}{' '}
          {linkText && linkUrl && (
            <Link href={linkUrl}>
              {linkText}
            </Link>
          )}
        </Paragraph>
      </div>
    </div>
  );
};
