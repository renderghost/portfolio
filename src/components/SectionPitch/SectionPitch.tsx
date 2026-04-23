import React from 'react';
import { PITCH_BASE_URL } from './SectionPitch.constants';
import {
  aspectWrapper,
  colStyles,
  gridWrapper,
  iframeStyles,
} from './SectionPitch.styles';
import type { SectionPitchProps } from './SectionPitch.types';

const isValidPitchEmbed = (id: string): boolean =>
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(id);

export const SectionPitch: React.FC<SectionPitchProps> = ({
  embedId,
  title = 'Pitch presentation',
}) => {
  if (!isValidPitchEmbed(embedId)) return null;

  return (
    <div className={gridWrapper}>
      <div className={colStyles}>
        <div className={aspectWrapper}>
          <iframe
            src={`${PITCH_BASE_URL}${embedId}`}
            title={title}
            allow='fullscreen'
            className={iframeStyles}
          />
        </div>
      </div>
    </div>
  );
};
