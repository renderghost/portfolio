import { Link } from '@/components/Link/Link';
import type { JSX } from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Works page component
 *
 * @returns JSX element with works page content
 */
export default function WorksPage(): JSX.Element {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Works by Barry Prendergast',
    description: 'Case studies and projects by Barry Prendergast, design strategist.',
    url: 'https://renderg.host/works',
  };

  const caseStudies = [
    { id: 1, title: 'Democratising insightful decision making across organisations', company: 'Brandwatch' },
    { id: 2, title: 'Building a professional community for scientists', company: 'Morressier' },
    { id: 3, title: 'Scaling a platform design system', company: 'Morressier' },
    { id: 4, title: 'Designing dermatology as a digital service', company: 'LEO Pharma' },
    { id: 5, title: 'Reducing energy waste at home', company: 'EDF Energy' },
    { id: 6, title: 'Defining the product strategy for eco shopping', company: 'MyGoodPlanet' },
    { id: 7, title: 'Improving the recruitment experience for design candidates', company: 'Morressier' },
    { id: 8, title: 'Scaling product design feedback', company: 'Morressier' },
    { id: 9, title: 'Streamlining immigration services', company: 'UK Home Office' },
    { id: 10, title: 'Creating data-driven insights for enterprises', company: 'Brandwatch' },
    { id: 11, title: 'Launching scalable design systems', company: 'Pure360' },
    { id: 12, title: 'Building inclusive gaming experiences', company: 'Mediatonic' },
    { id: 13, title: 'Enhancing smart energy platforms', company: 'EDF Energy' },
    { id: 14, title: 'Designing for scientific publishing', company: 'Morressier' },
    { id: 15, title: 'Supporting sustainable shopping decisions', company: 'MyGoodPlanet' },
    { id: 16, title: 'Developing enterprise software solutions', company: 'Schlumberger' },
  ];

  return (
    <>
      <Helmet>
        <title>Works | Barry Prendergast</title>
        <meta
          name="description"
          content="Case studies and projects by Barry Prendergast, showcasing design strategy and product design work."
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Helmet>

      <main className="min-h-screen bg-bones-blue text-bones-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              href="#"
              className="flex flex-col justify-start items-start p-8 border border-bones-white/10 hover:bg-bones-white/5 transition-colors overflow-hidden aspect-square"
            >
              <span className="text-5xl font-medium leading-tight">{study.title}</span>
              <span className="text-2xl opacity-60 mt-2">{study.company}</span>
            </Link>
          ))}
          <Link
            href="/"
            className="flex flex-col justify-start items-start p-8 border border-bones-white/10 hover:bg-bones-white/5 transition-colors col-span-1 sm:col-span-2 xl:col-span-3"
          >
            <span className="text-6xl font-medium">← Back to Home</span>
          </Link>
        </div>
      </main>
    </>
  );
}
