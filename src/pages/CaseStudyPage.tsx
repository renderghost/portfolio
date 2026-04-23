import { PageFooter } from '@/components/PageFooter/PageFooter';
import { PageHeader } from '@/components/PageHeader/PageHeader';
import { SectionPitch } from '@/components/SectionPitch/SectionPitch';
import { SectionText } from '@/components/SectionText/SectionText';
import { Tags } from '@/components/Tags/Tags';
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

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
}

function formatSlug(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const sectionWrapper =
  'grid grid-cols-3 2xl:grid-cols-4 gap-x-32 gap-y-32 w-full';
const sectionCol =
  'col-span-3 lg:col-span-2 flex flex-col gap-16 items-start justify-self-stretch self-start';
const metaLabelStyles =
  'font-sans font-semibold text-[12px] leading-[20px] tracking-[0.5px] uppercase text-dimgray whitespace-nowrap';
const metaValueStyles =
  'font-sans font-medium text-base leading-[28px] text-black';
const metaLinkStyles =
  'font-sans font-medium text-base leading-[28px] text-black underline underline-offset-2 hover:text-dimgray transition-colors';

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
        <PageHeader pageTitle={caseStudy.title} />

        <main className='flex flex-col gap-32 items-start w-full max-w-[1920px] px-24 pt-32 pb-128'>
          <article className='flex flex-col gap-32 w-full'>

            {/* Front matter */}
            <div className={sectionWrapper}>
              <div className={sectionCol}>
                <dl className='grid grid-cols-[auto_1fr] gap-x-24 gap-y-12 w-full'>
                  <dt className={metaLabelStyles}>Affiliation</dt>
                  <dd>
                    <a
                      href={caseStudy.affiliationURL}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={metaLinkStyles}
                    >
                      {caseStudy.affiliation}
                    </a>
                  </dd>

                  <dt className={metaLabelStyles}>Role</dt>
                  <dd className={metaValueStyles}>
                    {formatSlug(caseStudy.role)}
                  </dd>

                  <dt className={metaLabelStyles}>From</dt>
                  <dd className={metaValueStyles}>
                    {formatDate(caseStudy.startDate)}
                  </dd>

                  <dt className={metaLabelStyles}>Until</dt>
                  <dd className={metaValueStyles}>
                    {formatDate(caseStudy.endDate)}
                  </dd>

                  {skills.length > 0 && (
                    <>
                      <dt className={metaLabelStyles}>Skills</dt>
                      <dd>
                        <Tags tags={skills.map(formatSlug)} />
                      </dd>
                    </>
                  )}
                </dl>
              </div>
            </div>

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
