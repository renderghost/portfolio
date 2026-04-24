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
  name: 'Portfolio by Barry Prendergast',
  description:
    'Case studies in design strategy, product design, and design operations by Barry Prendergast.',
  url: 'https://renderg.host/works',
  author: {
    '@type': 'Person',
    name: 'Barry Prendergast',
    url: 'https://renderg.host',
  },
};

export default function WorksPage(): JSX.Element {
  const caseStudies = caseStudiesData as CaseStudyRecord[];

  return (
    <>
      <SeoHead
        title='Portfolio | Barry Prendergast, UX Designer Berlin'
        description='Case studies in UX strategy, product design, and design operations by Barry Prendergast — independent designer based in Berlin, Germany.'
        canonical={`${SITE_URL}/portfolio`}
      />
      <Helmet>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Helmet>

      <div className='bg-whitesmoke min-h-screen flex flex-col'>
        <PageHeader />

        <main className='flex flex-col gap-32 items-start px-24 pt-32 pb-128 flex-1'>
          <SectionHeader title='My Portfolio' />
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
