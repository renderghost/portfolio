import React from 'react';
import { Link } from '@/components/Link/Link';
import { DEFAULT_LINK_HREF, DEFAULT_LINK_LABEL } from './SectionText.constants';
import {
  bodyStyles,
  getColStyles,
  getHeadingStyles,
  gridWrapper,
} from './SectionText.styles';
import type { SectionTextProps } from './SectionText.types';

export const SectionText: React.FC<SectionTextProps> = ({
  body,
  heading,
  showHeading = true,
  showLink = true,
  linkLabel = DEFAULT_LINK_LABEL,
  linkHref = DEFAULT_LINK_HREF,
  size = 'md',
  usecase = 'full',
}) => {
  return (
    <div className={gridWrapper}>
      <div className={getColStyles(usecase)}>
        {showHeading && heading && (
          <p className={getHeadingStyles(size)}>{heading}</p>
        )}
        <p className={bodyStyles}>{body}</p>
        {showLink && (
          <Link
            href={linkHref}
            label={linkLabel}
            usecase='default'
            hasLeftIcon={false}
            hasRightIcon={true}
          />
        )}
      </div>
    </div>
  );
};
