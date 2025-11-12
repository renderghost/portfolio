import { CardRole } from '@/components/CardRole/CardRole';
import { Divider } from '@/components/Divider/Divider';
import { Heading } from '@/components/Heading/Heading';
import { Aside, Layout, Main } from '@/components/Layout/Layout';
import { Link } from '@/components/Link/Link';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import Section from '@/components/Section/Section';
import TLDRProfile from '@/components/TLDRProfile/TLDRProfile';
import { useProtopro } from '@/hooks/atproto';
import type { JSX } from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Work page component - displays CV/work history from AT Protocol PDS
 *
 * @returns JSX element with work page content
 */
export default function WorkPage(): JSX.Element {
  const { data: profile, loading, error } = useProtopro();

  // Split jobs into current and past
  const currentJobs = profile?.jobHistory.filter((job) => !job.endDate) || [];
  const pastJobs =
    profile?.jobHistory
      .filter((job) => job.endDate)
      .sort((a, b) => {
        // Sort by end date, newest first
        const dateA = a.endDate ? new Date(a.endDate).getTime() : 0;
        const dateB = b.endDate ? new Date(b.endDate).getTime() : 0;
        return dateB - dateA;
      }) || [];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: 'Barry Prendergast',
      jobTitle: currentJobs[0]?.position || 'Product Designer',
      description: 'Independent product designer and strategist',
      url: 'https://renderg.host/work',
    },
  };

  return (
    <>
      <Helmet>
        <title>Work | Barry Prendergast</title>
        <meta
          name="description"
          content="Independent product designer helping organisations deliver better products through clear thinking, practical design, and meaningful collaboration."
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Helmet>

      <Layout theme="default">
        <Main>
          <div className="flex flex-col gap-16">
            {/* Heading */}
            <Section>
              <Heading level={2} size="base">
                work / <Link href="/">renderg.host</Link>
              </Heading>
            </Section>

            {/* Loading/Error States */}
            {loading && (
              <Section>
                <Paragraph size="2xl">Loading profile...</Paragraph>
              </Section>
            )}

            {error && (
              <Section>
                <Paragraph size="2xl">Error loading profile: {error}</Paragraph>
              </Section>
            )}

            {/* Current Work Section */}
            {!loading && !error && currentJobs.length > 0 && (
              <Section>
                <Heading level={2} size="lg">
                  Current roles
                </Heading>

                <div className="grid grid-cols-1 border-2 border-bones-black-20 dark:border-bones-white-20">
                  {currentJobs.map((job, index) => (
                    <>
                      <CardRole key={`current-${job.company}-${index}`} role={job} />
                      {index < currentJobs.length - 1 && <Divider />}
                    </>
                  ))}
                </div>
              </Section>
            )}

            {/* Past Work Section */}
            {!loading && !error && pastJobs.length > 0 && (
              <Section>
                <Heading level={2} size="lg">
                  Previous roles
                </Heading>

                <div className="grid grid-cols-1 border-2 border-bones-black-20 dark:border-bones-white-20">
                  {pastJobs.map((job, index) => (
                    <>
                      <CardRole key={`past-${job.company}-${index}`} role={job} />
                      {index < pastJobs.length - 1 && <Divider />}
                    </>
                  ))}
                </div>
              </Section>
            )}

            {/* Exit */}
            <Section>
              <Paragraph size="md">
                Return to <Link href="/">renderg.host</Link>
              </Paragraph>
            </Section>
          </div>
        </Main>

        <Aside>
          <TLDRProfile />
        </Aside>
      </Layout>
    </>
  );
}
