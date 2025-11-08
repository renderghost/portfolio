import { Button } from '@/components/Button/Button';
import { Link } from '@/components/Link/Link';
import Logo from '@/components/Logo/Logo';
import { Folder, Github, Home, Linkedin, Mail, Menu, Newspaper, User, X } from 'lucide-react';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => location.pathname === path;

  const primaryNav = [
    {
      to: '/',
      label: 'Home',
      icon: <Home size={20} />,
    },
    {
      to: '/about',
      label: 'About',
      icon: <User size={20} />,
    },
    {
      to: '/articles',
      label: 'Articles',
      icon: <Newspaper size={20} />,
    },
    {
      to: '/case-studies',
      label: 'Case Studies',
      icon: <Folder size={20} />,
    },
  ];

  const secondaryNav = [
    {
      href: 'https://linkedin.com',
      label: 'LinkedIn',
      icon: <Linkedin size={20} />,
    },
    {
      href: 'https://Github.com',
      label: 'Github',
      icon: <Github size={20} />,
    },
  ];

  return (
    <>
      {/* Menu Toggle Button */}
      <Button
        variant="label"
        size="normal"
        shape="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={toggleMenu}
        icon={isOpen ? <X size={24} /> : <Menu size={24} />}
        aria-label="Toggle Menu"
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-neutral-950 z-40 transition-transform transform
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:w-20 lg:w-64
        `}
      >
        <div className="flex flex-col h-full justify-between">
          {/* Top Section */}
          <div>
            {/* Logo */}
            <div className="p-4">
              <Logo />
            </div>

            {/* Primary Navigation */}
            <nav className="mt-4 space-y-2">
              <ul>
                {primaryNav.map((item, index) => (
                  <li key={index}>
                    <Button
                      variant={isActive(item.to) ? 'primary' : 'label'}
                      size="normal"
                      shape="label"
                      className="w-full justify-start text-left"
                      onClick={() => {
                        window.location.href = item.to;
                        closeMenu();
                      }}
                      icon={<span className="mr-3">{item.icon}</span>}
                    >
                      <span className="hidden lg:inline">{item.label}</span>
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Bottom Section */}
          <div className="mb-4">
            {/* Secondary Navigation */}
            <nav className="mt-4 space-y-2">
              <ul>
                {secondaryNav.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-neutral-600 hover:text-brand-500 dark:text-neutral-400 dark:hover:text-brand-400"
                    >
                      {item.icon}
                      <span className="ml-2">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact Button */}
            <div className="mt-4">
              <Button
                variant="secondary"
                size="normal"
                className="w-full justify-center"
                onClick={() => {
                  window.location.href = '/contact';
                  closeMenu();
                }}
                icon={<Mail size={20} />}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for Mobile */}
      <div
        className={`fixed inset-0 bg-black/50 z-30 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } md:hidden`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </>
  );
};

export default Sidebar;
