import React from 'react';
import * as styles from './Layout.styles';
import { LayoutProps } from './Layout.types';

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};

export const Main: React.FC<LayoutProps> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export const Aside: React.FC<LayoutProps> = ({ children }) => {
  return <aside className={styles.aside}>{children}</aside>;
};
