import { Link } from '@/components/Link/Link';
import type { JSX } from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Main home page component
 *
 * @returns JSX element with homepage content
 */
export default function HomePage(): JSX.Element {
  const jsonLd = {
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

  return (
    <>
      <Helmet>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Helmet>

      <main className="min-h-screen bg-bones-blue text-bones-white">
        {/* CSS Grid Container */}
        <div className="grid min-h-screen grid-cols-1 gap-8 p-12 max-w-prose">
          {/* Main Content using Flexbox */}
          <section className="flex flex-col justify-center col-span-1">
            <div className="flex flex-col gap-12 text-left">
              <h1 className="text-6xl font-medium">
                Hi! 👋 I&apos;m Barry Prendergast, a design strategist living in Berlin, Germany.
              </h1>

              <p className="text-6xl font-medium">
                I <Link href="/about">specialise</Link> in <em>outcome</em>-driven design strategy, practice, and
                systems for digital products and services.
              </p>

              <p className="text-6xl font-medium">
                I{' '}
                <Link href="https://www.linkedin.com/in/barrymprendergast/details/experience/" target="_blank">
                  work
                </Link>{' '}
                with nonprofits and startups to ease their growing pains, and to market faster.
              </p>

              <p className="text-6xl font-medium">
                I{' '}
                <Link href="https://renderghost.leaflet.pub/" target="_blank">
                  write
                </Link>{' '}
                about about academia, design, product, science, systems, technology & the messy in-betweens.
              </p>

              <p className="text-6xl font-medium">
                I&apos;m a fellow of the{' '}
                <Link href="https://thomaskuhnfoundation.org/" target="_blank">
                  Thomas Kuhn Foundation
                </Link>
                , supporting new ways to understand scientific knowledge.
              </p>

              <p className="text-6xl font-medium">
                <Link href="https://cal.com/renderghost" target="_blank" rel="noopener noreferrer">
                  Book a meeting
                </Link>{' '}
                with me or let&apos;s talk first on{' '}
                <Link href="https://bsky.app/profile/renderg.host" target="_blank" rel="noopener noreferrer">
                  Bluesky
                </Link>{' '}
                ,{' '}
                <Link href="https://linkedin.com/in/barryprendergast" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </Link>
                , or{' '}
                <Link
                  href="https://signal.me/#eu/XO_aKC1aE1GZYWdMx7WK7HKGSCfrlpNhlxLGNi774dhiL7qr32BAMrH1BqgChaiM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Signal
                </Link>
                .
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
