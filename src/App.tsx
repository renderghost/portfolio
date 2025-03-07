import About from '@/pages/About';
import Articles from '@/pages/Articles';
import Home from '@/pages/Home';
import Studies from '@/pages/Studies';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/article" element={<Articles />} />
        <Route path="/study" element={<Studies />} />
      </Routes>
    </div>
  );
};

export default App;
