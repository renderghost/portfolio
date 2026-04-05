import AboutPage from '@/pages/AboutPage';
import HomePage from '@/pages/HomePage';
import ProjectsPage from '@/pages/ProjectsPage';
import WorksPage from '@/pages/PortfolioPage';
import WorkPage from '@/pages/WorkPage';
import WritingPage from '@/pages/WritingPage';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

/**
 * Main App component with routing.
 *
 * @returns Main application JSX element
 */
const App: React.FC = () => {
  // Set dark mode based on system preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateTheme = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    // Set initial theme
    updateTheme(mediaQuery);

    // Listen for changes
    mediaQuery.addEventListener('change', updateTheme);

    return () => mediaQuery.removeEventListener('change', updateTheme);
  }, []);

  return (
    <div id="app" className="min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        {/* <Route path="/studies" element={<Studies />} /> */}
      </Routes>
    </div>
  );
};

export default App;
