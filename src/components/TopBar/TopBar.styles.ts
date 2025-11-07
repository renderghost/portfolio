export const header =
  'sticky top-0 left-0 z-30 w-full md:w-[calc(100%-256px)] md:ml-64 transition-all bg-neutral-100 dark:bg-neutral-900 shadow-md';

export const container = 'container mx-auto px-4 py-6 flex justify-between items-center';

export const desktopNav = 'hidden md:flex space-x-4';

export const socialLink = 'text-text dark:text-neutral-100 hover:text-primary dark:hover:text-brand-400';

export const mobileMenuButton = 'md:hidden text-text dark:text-neutral-100';

export const getMobileNav = (isOpen: boolean) =>
  `md:hidden bg-white dark:bg-neutral-900 shadow-md transition-all ${isOpen ? 'block' : 'hidden'}`;

export const mobileList = 'space-y-4 px-4 py-6';

export const mobileSocialLink = 'block text-text dark:text-neutral-100 hover:text-primary dark:hover:text-brand-400';
