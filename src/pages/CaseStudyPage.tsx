import { PageFooter } from '@/components/PageFooter/PageFooter';
import { PageHeader } from '@/components/PageHeader/PageHeader';
import { SectionPitch } from '@/components/SectionPitch/SectionPitch';
import { SectionSkillCategory } from '@/components/SectionSkillCategory/SectionSkillCategory';
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

const sectionWrapper =
  'grid grid-cols-3 2xl:grid-cols-4 gap-x-32 gap-y-32 w-full';
const sectionCol =
  'col-span-3 lg:col-span-2 flex flex-col gap-16 items-start justify-self-stretch self-start';
const bodyStyles =
  'font-sans font-medium text-base leading-[28px] text-black';
const linkStyles =
  'underline underline-offset-2 hover:text-dimgray transition-colors';

function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 1).trimEnd() + '…';
}

function formatSlug(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
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
  const completedYear = new Date(caseStudy.endDate).getFullYear();

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
        <PageHeader pageTitle={caseStudy.title} />

        <main className='flex flex-col gap-32 items-start w-full max-w-[1920px] px-24 pt-32 pb-128'>
          <article className='flex flex-col gap-32 w-full'>

            {/* Meta sentence */}
            <div className={sectionWrapper}>
              <div className={sectionCol}>
                <p className={bodyStyles}>
                  Done in my role as {formatSlug(caseStudy.role)} working with{' '}
                  <a
                    href={caseStudy.affiliationURL}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={linkStyles}
                  >
                    {caseStudy.affiliation}
                  </a>
                  , completed in {completedYear}.
                </p>
              </div>
            </div>

            {/* Skills */}
            {skills.length > 0 && (
              <SectionSkillCategory
                category='Relevant Skills'
                skills={skills.map(formatSlug)}
                usecase='2/3'
              />
            )}

            {/* Summary */}
            <SectionText
              body={caseStudy.summary}
              size='md'
              usecase='2/3'
              showHeading={false}
              showLink={false}
            />

            {/* Body HTML */}
            {hasBody && (
              <div className={sectionWrapper}>
                <div
                  className='col-span-3 lg:col-span-2 prose prose-neutral max-w-none'
                  dangerouslySetInnerHTML={{ __html: caseStudy.body }}
                />
              </div>
            )}

            {/* Pitch embed */}
            <SectionPitch
              embedId={caseStudy.pitchEmbed}
              title={`${caseStudy.title} — Pitch presentation`}
            />
          </article>
        </main>

        <PageFooter />
      </div>
    </>
  );
}
