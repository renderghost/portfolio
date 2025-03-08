import { createContext } from 'react';
import { SectionTheme } from './Section.types';

export const SectionContext = createContext<{ theme: SectionTheme }>({
  theme: 'mono',
});
