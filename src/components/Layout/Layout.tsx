import React, { createContext, useContext } from 'react';
import * as styles from './Layout.styles';
import { DEFAULT_THEME } from './Layout.constants';
import { AsideProps, LayoutProps, PageTheme, MainProps } from './Layout.types';
import { Divider } from '@/components/Divider/Divider';

// Context to share page theme with child components
const PageThemeContext = createContext<PageTheme>(DEFAULT_THEME);

export const usePageTheme = () => useContext(PageThemeContext);

export const Layout: React.FC<LayoutProps> = ({ children, theme = DEFAULT_THEME }) => {
  // Split children into Main and Aside
  const childArray = React.Children.toArray(children);
  const mainComponent = childArray.find(
    (child) => React.isValidElement(child) && child.type === Main
  );
  const asideComponent = childArray.find(
    (child) => React.isValidElement(child) && child.type === Aside
  );

  return (
    <PageThemeContext.Provider value={theme}>
      <div className={styles.getLayoutStyles(theme)}>
        {mainComponent}
        {asideComponent && <Divider orientation="vertical" className="hidden md:block" />}
        {asideComponent}
      </div>
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
