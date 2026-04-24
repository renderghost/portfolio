import { BadgeProject } from '@/components/BadgeProject/BadgeProject';
import { Link } from '@/components/Link/Link';
import React from 'react';
import * as styles from './CardProject.styles';
import type { CardProjectProps } from './CardProject.types';

export const CardProject: React.FC<CardProjectProps> = ({ project }) => {
  return (
    <div className={styles.cardWrapper}>
      {/* Thumbnail */}
      <div className={styles.thumbnailContainer}>
        {project.thumbnail && (
          <img
            src={project.thumbnail}
            alt=""
            className={styles.thumbnail}
          />
        )}
      </div>

      {/* Content */}
      <div className={styles.contentContainer}>
        {/* Badges */}
        {(project.role || project.hasMyArtwork || project.status) && (
          <div className={styles.badgeRow}>
            {project.role && (
              <BadgeProject label={project.role} variant="role" />
            )}
            {project.hasMyArtwork && (
              <BadgeProject label="Creative Works" variant="artwork" />
            )}
            {project.status && (
              <BadgeProject label={project.status} variant="status" />
            )}
          </div>
        )}

        {/* Title */}
        <p className={styles.title}>{project.title}</p>

        {/* Description */}
        {project.description && (
          <p className={styles.description}>{project.description}</p>
        )}

        {/* Links */}
        {(project.projectUrl || project.sourceUrl) && (
          <div className={styles.linksRow}>
            {project.projectUrl && (
              <Link
                href={project.projectUrl}
                label="View the Project"
                icon='right'
                iconChar='↗'
              />
            )}
            {project.sourceUrl && (
              <Link
                href={project.sourceUrl}
                label="View the Source"
                icon='right'
                iconChar='↗'
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
