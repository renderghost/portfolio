import { useEffect, useState } from 'react';
import * as styles from './ThemeToggle.styles';
import {
  ARIA_LABEL,
  ICON_VIEWBOX,
  MEDIA_QUERY_DARK,
  MOON_ICON_PATH,
  STROKE_WIDTH,
  SUN_ICON_PATH,
  THEME_DARK,
  THEME_LIGHT,
  THEME_STORAGE_KEY,
} from './ThemeToggle.constants';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const prefersDark = window.matchMedia(MEDIA_QUERY_DARK).matches;

    if (savedTheme === THEME_DARK || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add(THEME_DARK);
    } else {
      setIsDark(false);
      document.documentElement.classList.remove(THEME_DARK);
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    if (newIsDark) {
      document.documentElement.classList.add(THEME_DARK);
      localStorage.setItem(THEME_STORAGE_KEY, THEME_DARK);
    } else {
      document.documentElement.classList.remove(THEME_DARK);
      localStorage.setItem(THEME_STORAGE_KEY, THEME_LIGHT);
    }
  };

  return (
    <button onClick={toggleTheme} className={styles.button} aria-label={ARIA_LABEL}>
      {isDark ? (
        <svg
          className={styles.icon}
          fill="none"
          stroke="currentColor"
          viewBox={ICON_VIEWBOX}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={STROKE_WIDTH} d={SUN_ICON_PATH} />
        </svg>
      ) : (
        <svg
          className={styles.icon}
          fill="none"
          stroke="currentColor"
          viewBox={ICON_VIEWBOX}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={STROKE_WIDTH} d={MOON_ICON_PATH} />
        </svg>
      )}
    </button>
  );
}
