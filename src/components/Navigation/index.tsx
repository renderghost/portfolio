import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-bones-white dark:bg-bones-black border-b border-bones-whitesmoke dark:border-bones-dimgray">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Home Link */}
          <Link
            to="/"
            className="text-xl font-serif text-bones-black dark:text-bones-white hover:text-bones-blue dark:hover:text-bones-cyan transition-colors"
          >
            BP
          </Link>

          {/* Navigation Links and Theme Toggle */}
          <div className="flex items-center space-x-8">
            <Link
              to="/studies"
              className="text-bones-dimgray dark:text-bones-whitesmoke hover:text-bones-blue dark:hover:text-bones-cyan transition-colors"
            >
              Case Studies
            </Link>
            <Link
              to="/articles"
              className="text-bones-dimgray dark:text-bones-whitesmoke hover:text-bones-blue dark:hover:text-bones-cyan transition-colors"
            >
              Articles
            </Link>
            <Link
              to="/about"
              className="text-bones-dimgray dark:text-bones-whitesmoke hover:text-bones-blue dark:hover:text-bones-cyan transition-colors"
            >
              About
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
