import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import { Menu, X } from 'lucide-react';
import React from 'react';

const TopBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="sticky top-0 left-0 z-30 w-full md:w-[calc(100%-256px)] md:ml-64 transition-all bg-neutral-100 dark:bg-neutral-900 shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Breadcrumb />

        {/* Desktop Social Links */}
        <nav className="hidden md:flex space-x-4" aria-label="Social Links">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text dark:text-neutral-100 hover:text-primary dark:hover:text-brand-400"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text dark:text-neutral-100 hover:text-primary dark:hover:text-brand-400"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text dark:text-neutral-100 hover:text-primary dark:hover:text-brand-400"
          >
            Twitter
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text dark:text-neutral-100"
          onClick={toggleMenu}
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Social Links */}
      <nav
        id="mobile-menu"
        className={`md:hidden bg-white dark:bg-neutral-900 shadow-md transition-all ${menuOpen ? 'block' : 'hidden'}`}
        aria-label="Mobile Social Links"
      >
        <ul className="space-y-4 px-4 py-6">
          <li>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-text dark:text-neutral-100 hover:text-primary dark:hover:text-brand-400"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-text dark:text-neutral-100 hover:text-primary dark:hover:text-brand-400"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-text dark:text-neutral-100 hover:text-primary dark:hover:text-brand-400"
            >
              Twitter
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default TopBar;
