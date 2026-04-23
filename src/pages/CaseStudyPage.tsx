import { PageFooter } from '@/components/PageFooter/PageFooter';
import { PageHeader } from '@/components/PageHeader/PageHeader';
import { SectionSkillCategory } from '@/components/SectionSkillCategory/SectionSkillCategory';
import { SectionPitchLocked } from '@/components/SectionPitchLocked/SectionPitchLocked';
import { SectionTableCaseStudy } from '@/components/SectionTableCaseStudy/SectionTableCaseStudy';
import { formatSlug } from '@/components/SectionTableCaseStudy/SectionTableCaseStudy.constants';
import { SectionText } from '@/components/SectionText/SectionText';
import caseStudiesData from '@/data/json/casestudies.json';
import type { JSX } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigate, useParams } from 'react-router-dom';

interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  coverImage: string;
  affiliation: string;
  affiliationURL: string;
  type: string;
  body: string;
  pitchEmbed: string;
  published: string;
  startDate: string;
  endDate: string;
  relevantSkills: string[];
  role: string;
  collectionId: string;
  itemId: string;
}

const SITE_URL = 'https://renderg.host';

function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 1).trimEnd() + '…';
}

export default function CaseStudyPage(): JSX.Element {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = (caseStudiesData as CaseStudy[]).find(
    (cs) => cs.slug === slug,
  );

  if (!caseStudy) {
    return <Navigate to='/portfolio' replace />;
  }

  const canonicalUrl = `${SITE_URL}/portfolio/${caseStudy.slug}`;
  const metaDescription = truncate(caseStudy.summary, 160);
  const hasBody = caseStudy.body.trim().length > 0;
  const skills = caseStudy.relevantSkills.filter((s) => s.trim().length > 0);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: caseStudy.title,
    description: metaDescription,
    image: caseStudy.coverImage,
    url: canonicalUrl,
    datePublished: caseStudy.published,
    author: {
      '@type': 'Person',
      name: 'Barry Prendergast',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: 'Barry Prendergast',
    },
    about: {
      '@type': 'Organization',
      name: caseStudy.affiliation,
      url: caseStudy.affiliationURL,
    },
  };

  return (
    <>
      <Helmet>
        <title>{caseStudy.title} | Barry Prendergast</title>
        <meta name='description' content={metaDescription} />
        <link rel='canonical' href={canonicalUrl} />
        <meta property='og:type' content='article' />
        <meta property='og:url' content={canonicalUrl} />
        <meta property='og:title' content={caseStudy.title} />
        <meta property='og:description' content={metaDescription} />
        <meta property='og:image' content={caseStudy.coverImage} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={caseStudy.title} />
        <meta name='twitter:description' content={metaDescription} />
        <meta name='twitter:image' content={caseStudy.coverImage} />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Helmet>

      <div className='flex flex-col items-center w-full bg-whitesmoke'>
        <PageHeader
          pageTitle={caseStudy.title}
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Portfolio', href: '/portfolio' },
          ]}
        />

        <main className='flex flex-col gap-32 items-start w-full max-w-[1920px] px-24 pt-32 pb-128'>
          <article className='flex flex-col w-full gap-32'>
           
            
            {/* Details table */}
            <SectionTableCaseStudy
              affiliation={caseStudy.affiliation}
              affiliationURL={caseStudy.affiliationURL}
              role={caseStudy.role}
              endDate={caseStudy.endDate}
              type={caseStudy.type}
            />
            
             {/* Summary */}
            <SectionText body={caseStudy.summary} />

            {/* Body HTML */}
            {hasBody && (
              <SectionText>
                <div
                  className='prose prose-neutral max-w-none'
                  dangerouslySetInnerHTML={{ __html: caseStudy.body }}
                />
              </SectionText>
            )}

            {/* Pitch embed */}
            {/* <SectionPitch
              embedId={caseStudy.pitchEmbed}
              title={`${caseStudy.title} — Pitch presentation`}
            /> */}

            {/* Locked pitch placeholder */}
            <SectionPitchLocked
              src={caseStudy.coverImage}
              alt={`${caseStudy.title} — request access to view presentation`}
            />

            {/* Skills */}
            {skills.length > 0 && (
              <SectionSkillCategory
                category='Relevant Skills'
                skills={skills.map(formatSlug)}
              />
            )}

          </article>
        </main>

        <PageFooter />
      </div>
    </>
  );
}
