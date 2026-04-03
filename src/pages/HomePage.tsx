import { CardGrid } from '@/components/CardGrid/CardGrid';
import type { CardHomeProps } from '@/components/CardHome/CardHome.types';
import { HomeHeader } from '@/components/HomeHeader/HomeHeader';
import { HomeFooter } from '@/components/HomeFooter/HomeFooter';
import type { JSX } from 'react';
import { Helmet } from 'react-helmet-async';

const CARDS: CardHomeProps[] = [
  {
    overline: 'About Me',
    title: "Hi! 👋 I'm Barry, an Irish product strategist and UX designer living in Berlin, Germany.",
    description: "I've been working in design for a little over 20 years.",
    linkLabel: 'Learn more About Me',
    linkHref: '/about',
    isHero: true,
  },
  {
    overline: 'My Writing',
    title: 'I write about academia, design, product, science, systems, technology & the messy stuff in between.',
    description: 'Essays, notes, and half-formed thoughts on the things I care about.',
    linkLabel: 'Read my Writing',
    linkHref: '/writing',
  },
  {
    overline: 'My Career',
    title: 'I work with nonprofits and startups to ease their growing pains, and get to market faster.',
    description: 'I previously worked with Morressier, LEO Pharma, EDF Energy, UK Government, Brandwatch and more.',
    linkLabel: 'Read my Resume',
    linkHref: '/work',
  },
  {
    overline: 'My Work',
    title: 'I specialise in outcome-driven design for complex digital products and services.',
    description:
      'I practice lean product management, user research, and UX design. I build strategies, teams, brands and design systems that work as intended.',
    linkLabel: 'Explore my portfolio',
    linkHref: '/portfolio',
  },
    {
    overline: 'My Interests',
    title: 'I like tinkering with code to make cool things for friends and family.',
    description: 'Side projects, experiments, and things I build just because I can.',
    linkLabel: 'Explore my projects',
    linkHref: '/portfolio',
  },
  {
    overline: 'My Contact Details',
    title: "Let's talk.",
    description: 'Book a meeting, message me on Bluesky or LinkedIn, or drop me an email.',
    linkLabel: 'Get in touch',
    linkHref: 'mailto:barry@renderg.host',
  },
];

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Barry Prendergast',
  jobTitle: 'Consulting Design Strategist',
  url: 'https://renderg.host',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Berlin',
    addressCountry: 'Germany',
  },
  sameAs: [
    'https://bsky.app/profile/renderg.host',
    'https://linkedin.com/in/barryprendergast',
    'https://signal.me/#eu/XO_aKC1aE1GZYWdMx7WK7HKGSCfrlpNhlxLGNi774dhiL7qr32BAMrH1BqgChaiM',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Thomas Kuhn Foundation',
    url: 'https://thomaskuhnfoundation.org/',
  },
  knowsAbout: [
    'Design Strategy',
    'Service Design',
    'Product Design',
    'Systems Thinking',
    'Human-Centred Design',
    'Technology',
    'Science Communication',
  ],
};

export default function HomePage(): JSX.Element {
  return (
    <>
      <Helmet>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      </Helmet>

      <div className="flex flex-col min-h-screen bg-blue isolate">
        {/* <PageHeader usecase='home' className='sticky top-0 z-30' /> */}
        <HomeHeader />
        {/* <CardGrid cards={CARDS} className="z-20 flex-1" /> */}
        <CardGrid cards={CARDS} className="flex-1" />
        {/* <PageFooter className="z-10" /> */}
        <HomeFooter />
      </div>
    </>
  );
}
