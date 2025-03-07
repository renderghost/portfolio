import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      aria-label="Go to Home"
      className="group flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 dark:focus:ring-yellow-400"
    >
      {/* Placeholder Square Logo */}
      <div className="w-10 h-10 border-2 border-current group-hover:scale-105 transition-transform duration-200 ease-in-out">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="10"
          className="w-full h-full"
          role="img"
          aria-label="Logo"
        >
          <rect x="10" y="10" width="80" height="80" />
        </svg>
      </div>
    </button>
  );
};

export default Logo;
