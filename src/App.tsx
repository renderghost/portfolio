import AboutPage from '@/pages/AboutPage';
import HomePage from '@/pages/HomePage';
import WorksPage from '@/pages/WorksPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

/**
 * Main App component with routing.
 *
 * @returns Main application JSX element
 */
const App: React.FC = () => {
  return (
    <div id="app" className="min-h-screen bg-bones-blue text-bones-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/works" element={<WorksPage />} />
        {/* <Route path="/articles" element={<Articles />} /> */}
        {/* <Route path="/studies" element={<Studies />} /> */}
      </Routes>
    </div>
  );
};

export default App;
