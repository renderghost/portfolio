import React from 'react';
import {
  formatSlug,
  formatYear,
  getColStyles,
} from './SectionTableCaseStudy.constants';
import {
  gridWrapper,
  headingStyles,
  labelStyles,
  linkStyles,
  rowStyles,
  tableWrapper,
  valueStyles,
} from './SectionTableCaseStudy.styles';
import type { SectionTableCaseStudyProps } from './SectionTableCaseStudy.types';

export const SectionTableCaseStudy: React.FC<SectionTableCaseStudyProps> = ({
  affiliation,
  affiliationURL,
  role,
  endDate,
  type,
  usecase = 'default',
}) => {
  return (
    <div className={gridWrapper}>
      <div className={getColStyles(usecase)}>
        <p className={headingStyles}>Details</p>
        <dl className={tableWrapper}>
          <div className={rowStyles}>
            <dt className={labelStyles}>Company</dt>
            <dd>
              <a
                href={affiliationURL}
                target='_blank'
                rel='noopener noreferrer'
                className={linkStyles}
              >
                {affiliation}
              </a>
            </dd>
          </div>
          <div className={rowStyles}>
            <dt className={labelStyles}>Role</dt>
            <dd className={valueStyles}>{formatSlug(role)}</dd>
          </div>

          <div className={rowStyles}>
            <dt className={labelStyles}>Focus</dt>
            <dd className={valueStyles}>{type}</dd>
          </div>
          <div className={rowStyles}>
            <dt className={labelStyles}>Completed</dt>
            <dd className={valueStyles}>{formatYear(endDate)}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
