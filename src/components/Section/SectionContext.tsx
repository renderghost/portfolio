// SectionContext is deprecated - components now use PageThemeContext from Layout
// This file is kept for backwards compatibility but should not be used
import { createContext } from 'react';

export const SectionContext = createContext<{ theme: string }>({
  theme: 'default',
});
