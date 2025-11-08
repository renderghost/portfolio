import { useNavigate } from 'react-router-dom';
import * as styles from './BackButton.styles';
import { BUTTON_TEXT, ICON_PATH, ICON_VIEWBOX, STROKE_WIDTH } from './BackButton.constants';

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className={styles.button}>
      <svg
        className={styles.icon}
        fill="none"
        stroke="currentColor"
        viewBox={ICON_VIEWBOX}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={STROKE_WIDTH} d={ICON_PATH} />
      </svg>
      {BUTTON_TEXT}
    </button>
  );
}
