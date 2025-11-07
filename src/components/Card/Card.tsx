import { cn } from '@/lib/utils';
import React from 'react';
import { Heading } from '../Heading/Heading';
import { Paragraph } from '../Paragraph/Paragraph';
import { BaseCardProps } from './types';

export const Card: React.FC<BaseCardProps> = ({ className, coverImage, badge, meta, title, description, onClick }) => {
  const CardWrapper = onClick ? 'button' : 'div';

  return (
    <CardWrapper
      className={cn(
        'group relative flex flex-col bg-white dark:bg-neutral-800 rounded-lg overflow-hidden transition-all',
        'onClick && cursor-pointer hover:shadow-lg',
        className,
      )}
      onClick={onClick}
    >
      {/* Cover Image */}
      {coverImage && (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-700">
          <img
            src={coverImage}
            alt=""
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col gap-4 p-6">
        {/* Badge + Meta */}
        <div className="flex items-center justify-between gap-4">
          {badge && (
            <span
              className={cn(
                'inline-flex px-3 py-1 text-sm font-medium rounded-full',
                badge.variant === 'primary'
                  ? 'bg-brand-100 text-brand-900 dark:bg-brand-800 dark:text-brand-100'
                  : 'bg-neutral-100 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100',
              )}
            >
              {badge.label}
            </span>
          )}
          {meta && (
            <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
              {meta.company && <span>{meta.company}</span>}
              {meta.company && meta.date && <span>|</span>}
              {meta.date && <span>{meta.date}</span>}
            </div>
          )}
        </div>

        {/* Title */}
        <Heading level={3}>{title}</Heading>
        {/* Description */}
        {description && <Paragraph>{description}</Paragraph>}
      </div>
    </CardWrapper>
  );
};
