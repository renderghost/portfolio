import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './Logo.styles';
import { ARIA_LABEL, LOGO_ARIA_LABEL, RECT_DIMENSIONS, STROKE_WIDTH, SVG_VIEWBOX } from './Logo.constants';

const Logo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/')} aria-label={ARIA_LABEL} className={styles.button}>
      {/* Placeholder Square Logo */}
      <div className={styles.iconContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={SVG_VIEWBOX}
          fill="none"
          stroke="currentColor"
          strokeWidth={STROKE_WIDTH}
          className={styles.svg}
          role="img"
          aria-label={LOGO_ARIA_LABEL}
        >
          <rect x={RECT_DIMENSIONS.x} y={RECT_DIMENSIONS.y} width={RECT_DIMENSIONS.width} height={RECT_DIMENSIONS.height} />
        </svg>
      </div>
    </button>
  );
};

export default Logo;
