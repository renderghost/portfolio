import { cn } from '@/lib/utils';
import React from 'react';
import { Paragraph } from '../Typography/Paragraph/Paragraph';
import { bannerStyles } from './Banner.styles';
import { BannerProps, BannerTheme } from './Banner.types';

export const Banner: React.FC<BannerProps> = ({ message, linkText, linkUrl, theme = 'yellow', className = '' }) => {
  const themeClass = bannerStyles.themes[theme as BannerTheme]; // Ensure TypeScript knows it's a valid key

  return (
    <div className={cn(bannerStyles.base, themeClass, className)} role="banner">
      <div className="flex items-center mx-auto">
        <Paragraph className="text-sm font-normal">
          {message}{' '}
          {linkText && linkUrl && (
            <a
              href={linkUrl}
              className="inline font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
            >
              {linkText}
            </a>
          )}
        </Paragraph>
      </div>
    </div>
  );
};
