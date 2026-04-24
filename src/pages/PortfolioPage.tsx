import { CardGridCaseStudy } from '@/components/CardGridCaseStudy/CardGridCaseStudy';
import { PageFooter } from '@/components/PageFooter/PageFooter';
import { PageHeader } from '@/components/PageHeader/PageHeader';
import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import caseStudiesData from '@/data/json/casestudies.json';
import { SeoHead } from '@/components/SeoHead/SeoHead';
import { SITE_URL } from '@/components/SeoHead/SeoHead.constants';
import type { JSX } from 'react';
import { Helmet } from 'react-helmet-async';

interface CaseStudyRecord {
  slug: string;
  title: string;
  summary: string;
  coverImage: string;
  affiliation: string;
  type: string;
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'UX Case Studies — Barry Prendergast',
  description:
    'A collection of UX case studies demonstrating outcome-driven design for complex digital products and services, including strategy, research, prototyping, and delivery.',
  url: 'https://renderg.host/portfolio',
  author: {
    '@type': 'Person',
    name: 'Barry Prendergast',
    url: 'https://renderg.host',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Berlin',
      addressCountry: 'Germany',
    },
    sameAs: [
      'https://bsky.app/profile/renderg.host',
      'https://linkedin.com/in/barrymprendergast',
      'https://signal.me/#eu/XO_aKC1aE1GZYWdMx7WK7HKGSCfrlpNhlxLGNi774dhiL7qr32BAMrH1BqgChaiM',
      'https://calendly.com/barry-prendergast',
    ],
    knowsAbout: [
      'Outcome-Driven Design',
      'Design Operations',
      'Design Strategy',
      'Design Systems',
      'Human-Centred Design',
      'Information Architecture',
      'Interaction Design',
      'Lean UX',
      'Product Design',
      'Rapid Prototyping',
      'Service Design',
      'Systems Thinking',
      'Usability Testing',
      'User Research',
      'UX Design',
    ],
  },
};

export default function WorksPage(): JSX.Element {
  const caseStudies = caseStudiesData as CaseStudyRecord[];

  return (
    <>
      <SeoHead
        title='Portfolio — Barry Prendergast | Outcome-Driven UX Case Studies, Berlin'
        description='UX case studies by Barry Prendergast, Berlin-based designer, researcher, and strategist. Real-world examples of solving complex product and service problems through outcome-driven design, rapid prototyping, rigorous testing and measurable results.'
        canonical={`${SITE_URL}/portfolio`}
      />
      <Helmet>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Helmet>

      <div className='flex flex-col min-h-screen bg-whitesmoke'>
        <PageHeader />

        <main className='flex flex-col items-start flex-1 max-w-[1920px] px-24 pt-24 gap-24 pb-128'>
          <SectionHeader title='My Portfolio' statement='Case studies from across publishing, energy, government, pharma, startups, and enterprise organisations, focused on solving complex product and service problems through outcome-driven design.' />
          <CardGridCaseStudy
            cards={caseStudies.map((cs) => ({
              caseStudy: {
                slug: cs.slug,
                title: cs.title,
                summary: cs.summary,
                coverImage: cs.coverImage,
                affiliation: cs.affiliation,
                type: cs.type,
              },
            }))}
          />
        </main>

        <PageFooter />
      </div>
    </>
  );
}
