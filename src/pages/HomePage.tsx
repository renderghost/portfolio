import { CardGrid } from '@/components/CardGrid/CardGrid';
import type { CardHomeProps } from '@/components/CardHome/CardHome.types';
import { HomeFooter } from '@/components/HomeFooter/HomeFooter';
import { HomeHeader } from '@/components/HomeHeader/HomeHeader';
import type { JSX } from 'react';
import { Helmet } from 'react-helmet-async';

const CARDS: CardHomeProps[] = [
  {
    overline: 'My Background',
    title: "Hi! 👋 I'm Barry, a strategist, UX designer, mentor and public speaker living in Berlin, Germany.",
    description:
      "For nearly 20 years, I've worked with ambitious organisations to ease their growing pains and solve hard problems through clear conversation, rapid prototyping, and rigorous testing against the right metrics",
    linkLabel: 'Learn about me',
    linkHref: '/about',
    isHero: true,
  },
  {
    overline: 'My Career',
    title: "I've led teams and shipped products and services across publishing, energy, government, pharma, and more.",
    description:
      'From early-stage startups to multinationals, I create the conditions for teams to focus, collaborate, and get to market faster.', //
    linkLabel: 'Check my resume',
    linkHref: '/work',
  },
  {
    overline: 'My Work',
    title: 'I specialise in outcome-driven experience and interface design for complex digital products and services.',
    description:
      'My practice connects product, research, and design to build the strategies, teams, and design systems that help organisations achieve their goals.',
    linkLabel: 'Browse my portfolio',
    linkHref: '/portfolio',
  },
  {
    overline: 'My Writing',
    title: 'I write about design, product, processes, systems, technology & the messy people stuff in between.',
    description:
      'Field notes, opinions, and lessons learned for designers, founders, and product leaders navigating complexity.',
    linkLabel: 'Read my writing',
    linkHref: '/writing',
  },
  {
    overline: 'My Side Projects',
    title: 'I bring the same drive and curiosity to personal projects that I bring to my design work.',
    description:
      'Experiments and side projects spanning music, visual art, writing, and code. No brief, no deadline, and no client but myself. Just curiosity and whatever tools and toys are within reach.',
    linkLabel: 'Explore my projects',
    linkHref: '/portfolio',
  },
  {
    overline: 'My Contacts',
    title:
      "Let's talk about working together to build the right things, in the right way, for the best possible outcomes.",
    description: 'We can talk via Bluesky, LinkedIn, or Mail.',
    linkLabel: 'Get in touch',
    linkHref: 'mailto:barry@renderg.host',
  },
];

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Barry Prendergast',
  jobTitle: 'UX Strategist and Designer',
  url: 'https://renderg.host',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Berlin',
    addressCountry: 'Germany',
  },
  description:
    'Independent product designer helping organisations deliver better products through clear thinking, practical design, and meaningful collaboration.',
  sameAs: [
    'https://bsky.app/profile/renderg.host',
    'https://linkedin.com/in/barrymprendergast',
    'https://signal.me/#eu/XO_aKC1aE1GZYWdMx7WK7HKGSCfrlpNhlxLGNi774dhiL7qr32BAMrH1BqgChaiM',
    `https://calendly.com/barry-prendergast`,
  ],
  // worksFor: {
  //   '@type': 'Organization',
  //   name: 'Thomas Kuhn Foundation',
  //   url: 'https://thomaskuhnfoundation.org/',
  // },
  knowsAbout: [
    'Content Design',
    'Design Operations',
    'Design Strategy',
    'Design Systems',
    'DesignOps',
    'Human-Centred Design',
    'Information Architecture',
    'Interaction Design',
    'Lean UX',
    'Product Design',
    'Service Design',
    'Systems Thinking',
    'UI Design',
    'User Experience Design',
    'User Interface Design',
    'UX Design',
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
