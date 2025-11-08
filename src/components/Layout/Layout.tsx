import React, { createContext, useContext } from 'react';
import * as styles from './Layout.styles';
import { DEFAULT_THEME } from './Layout.constants';
import { AsideProps, LayoutProps, PageTheme, MainProps } from './Layout.types';

// Context to share page theme with child components
const PageThemeContext = createContext<PageTheme>(DEFAULT_THEME);

export const usePageTheme = () => useContext(PageThemeContext);

export const Layout: React.FC<LayoutProps> = ({ children, theme = DEFAULT_THEME }) => {
  return (
    <PageThemeContext.Provider value={theme}>
      <div className={styles.getLayoutStyles(theme)}>{children}</div>
    </PageThemeContext.Provider>
  );
};

export const Main: React.FC<MainProps> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export const Aside: React.FC<AsideProps> = ({ children }) => {
  const theme = usePageTheme();
  return <aside className={styles.getAsideStyles(theme)}>{children}</aside>;
};
