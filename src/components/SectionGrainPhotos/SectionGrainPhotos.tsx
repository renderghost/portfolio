import { CardGrainPhoto } from '@/components/CardGrainPhoto/CardGrainPhoto';
import { Link } from '@/components/Link/Link';
import { useGrainPhotos } from '@/hooks/atproto';
import React from 'react';
import { GRAIN_PHOTOS_LIMIT, GRAIN_URL } from './SectionGrainPhotos.constants';
import * as styles from './SectionGrainPhotos.styles';
import type { SectionGrainPhotosProps } from './SectionGrainPhotos.types';

export const SectionGrainPhotos: React.FC<SectionGrainPhotosProps> = () => {
  const { data: photos, loading, error } = useGrainPhotos(GRAIN_PHOTOS_LIMIT);

  if (error) return null;

  return (
    <div className={styles.gridWrapper}>
      <div className={styles.colInner}>
        <h2 className={styles.h2Styles}>My Photos on Grain</h2>

        {loading && <p className={styles.loadingStyles}>Loading photos…</p>}

        {!loading && photos && photos.length > 0 && (
          <div className={styles.photoGrid}>
            {photos.map((photo) => (
              <CardGrainPhoto
                key={photo.uri}
                src={photo.blobUrl}
                alt={photo.alt}
              />
            ))}
          </div>
        )}

        {!loading && (
          <Link
            href={GRAIN_URL}
            label='View all my photos on Grain'
            icon='right'
            iconChar='↗'
          />
        )}
      </div>
    </div>
  );
};
