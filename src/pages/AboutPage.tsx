import { CardRole } from '@/components/CardRole/CardRole';
import { Divider } from '@/components/Divider/Divider';
import { Heading } from '@/components/Heading/Heading';
import { Aside, Layout, Main } from '@/components/Layout/Layout';
import { Link } from '@/components/Link/Link';
import { ListItem } from '@/components/ListItem/ListItem';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import Section from '@/components/Section/Section';
import TLDRProfile from '@/components/TLDRProfile/TLDRProfile';
import { UnorderedList } from '@/components/UnorderedList/UnorderedList';
import jobsData from '@/data/json/jobs.json';
import type { JSX } from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * About page component
 *
 * @returns JSX element with about page content
 */
export default function AboutPage(): JSX.Element {
  // Get latest 5 jobs sorted by end date
  const latestJobs = jobsData
    .sort((a, b) => {
      const dateA = b.endDate ? new Date(b.endDate).getTime() : Date.now();
      const dateB = a.endDate ? new Date(a.endDate).getTime() : Date.now();
      return dateA - dateB;
    })
    .slice(0, 5);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'Person',
      name: 'Barry Prendergast',
      jobTitle: 'Product Designer',
      description:
        'Independent product designer helping organisations deliver better products through clear thinking, practical design, and meaningful collaboration.',
      url: 'https://renderg.host/about',
      sameAs: [
        'https://bsky.app/profile/renderg.host',
        'https://linkedin.com/in/barryprendergast',
        'https://signal.me/#eu/XO_aKC1aE1GZYWdMx7WK7HKGSCfrlpNhlxLGNi774dhiL7qr32BAMrH1BqgChaiM',
      ],
    },
  };

  return (
    <>
      <Helmet>
        <title>About | Barry Prendergast</title>
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
            <Heading level={2} size="md">
              about / <Link href="/">renderg.host</Link>
            </Heading>

            {/* Hero Section*/}
            <Section className="flex flex-col">
              <Paragraph size="2xl">
                I&apos;m an independent designer helping organisations deliver better products and services through
                clear thinking, practical design, and meaningful collaboration.
              </Paragraph>
              <Paragraph size="xl">
                I&apos;ve spent over 15 years building measurably successful things in complex domains, from scientific
                publishing and medical devices, to energy infrastructure and government services, and more.
              </Paragraph>
            </Section>

            {/* What I Do Section*/}
            <Section className="flex flex-col">
              <Heading level={2} size="xl">
                What I do...
              </Heading>

              <Heading level={3} size="md">
                For Customers & Users
              </Heading>

              <UnorderedList bullet="angle">
                <ListItem>Build autonomy-driven products that people can easily master</ListItem>
                <ListItem>Connect people to help them work better, together</ListItem>
                <ListItem>Create interactions that feel obvious and reassuring</ListItem>
                <ListItem>Design efficient usable interfaces that respect people&apos;s time</ListItem>
                <ListItem>Simplify complexity so users can get things done, faster</ListItem>
              </UnorderedList>

              <Heading level={3} size="md">
                For Business
              </Heading>

              <UnorderedList bullet="angle">
                <ListItem>Connect design decisions to leading metrics that drive growth</ListItem>
                <ListItem>Get to market faster by testing risky product assumptions early</ListItem>
                <ListItem>Increase adoption and retention by simplifying complexity</ListItem>
                <ListItem>Reduce support costs with self-service user experiences</ListItem>
                <ListItem>Streamline engineering overheads with lean iteration</ListItem>
              </UnorderedList>

              <Heading level={3} size="md">
                For Products & Services
              </Heading>

              <UnorderedList bullet="angle">
                <ListItem>Build prototypes that answer key questions before development</ListItem>
                <ListItem>Create scalable, maintainable design systems</ListItem>
                <ListItem>Test designs with real users to guide confident decisions</ListItem>
                <ListItem>Translate business goals into measurable design outcomes</ListItem>
                <ListItem>Turn complex workflows into clear, usable interfaces</ListItem>
              </UnorderedList>

              <Heading level={3} size="md">
                For Stakeholders & Teams
              </Heading>

              <UnorderedList bullet="angle">
                <ListItem>Coach teams to make confident, informed design choices</ListItem>
                <ListItem>Create healthy feedback loops that strengthen outcomes</ListItem>
                <ListItem>Define design processes that support collaboration and progress</ListItem>
                <ListItem>Establish research practices that directly inform decisions</ListItem>
                <ListItem>Write lightweight docs teams refer to every day</ListItem>
              </UnorderedList>
            </Section>

            <Section>
              <Heading level={2} size="lg">
                Currently
              </Heading>

              <div className="flex flex-col gap-6">
                <Paragraph size="lg">Freelancing as a ____</Paragraph>
                {/* TODO: Add CTA to /Contact page when ready */}

                <Paragraph size="lg">
                  I&apos;m a fellow of the{' '}
                  <Link href="https://thomaskuhnfoundation.org/" target="_blank" rel="noopener noreferrer">
                    Thomas Kuhn Foundation
                  </Link>
                  , supporting new ways to understand scientific knowledge.
                </Paragraph>

                <Paragraph size="lg">
                  <Link href="/writing">Read my Blog</Link>
                </Paragraph>

                <Paragraph size="lg">I&apos;m building tools for the ATprotocol</Paragraph>

                <Paragraph size="lg">
                  <Link href="/writing">Read my Blog</Link>
                </Paragraph>
              </div>
            </Section>
            <Section>
              <Heading level={2} size="lg">
                Recent Work
              </Heading>

              <div className="grid grid-cols-1 border-2 border-bones-black-20 dark:border-bones-white-20">
                {latestJobs.map((job, index) => {
                  const startYear = new Date(job.startDate).getFullYear();
                  const endYear = job.endDate ? new Date(job.endDate).getFullYear() : 'Present';
                  const dateRange = startYear === endYear ? `${startYear}` : `${startYear}–${endYear}`;

                  return (
                    <>
                      <CardRole
                        key={job.slug}
                        role={{
                          title: job.title,
                          company: job.client,
                          subtitle: job.summary,
                          date: dateRange,
                          // coverImage: job.cover,
                          slug: job.slug,
                        }}
                      />
                      {index < latestJobs.length - 1 && <Divider />}
                    </>
                  );
                })}
              </div>

              {/* TODO: Add link to Resume when ready */}
              {/* TODO: Add CTA to /Contact page when ready */}
            </Section>
            <Section>
              <Heading level={2} size="lg">
                How I Work
              </Heading>

              <Paragraph size="lg">My approach is straightforward and outcome-focused.</Paragraph>

              <UnorderedList bullet="disc">
                <ListItem>I start by understanding users and the problems they face</ListItem>
                <ListItem>I design and prototype quickly to validate ideas early</ListItem>
                <ListItem>I measure results and refine based on evidence</ListItem>
                <ListItem>I document decisions to help teams move with clarity</ListItem>
                <ListItem>I build systems that continue to work well beyond my involvement</ListItem>
              </UnorderedList>

              <Paragraph size="lg">
                <Link href="/writing">Read my Blog</Link>
              </Paragraph>
            </Section>
            <Section>
              <Heading level={2} size="lg">
                What Drives Me
              </Heading>

              <Paragraph size="lg">
                <strong>At work:</strong> Designing with purpose. Creating products that respect users&apos; time and
                intelligence. Collaborating with teams that value clarity, curiosity, and progress.
              </Paragraph>

              <Paragraph size="lg">
                <strong>Outside work:</strong> Learning continuously—currently exploring systems thinking and
                information architecture. Making experimental music when the kids are asleep. Reading everything from
                technical manuals to science fiction.
              </Paragraph>
            </Section>
            <Section>
              <Heading level={2} size="lg">
                Work With Me
              </Heading>

              <Paragraph size="lg">I collaborate with organisations that:</Paragraph>

              <UnorderedList bullet="disc">
                <ListItem>Are tackling meaningful challenges</ListItem>
                <ListItem>Value clarity, purpose, and long-term impact</ListItem>
                <ListItem>See design as a driver of business value</ListItem>
                <ListItem>Want to build better ways of working, not just better interfaces</ListItem>
              </UnorderedList>

              {/* TODO: Add CTA to /Contact page when ready */}
            </Section>
            <Paragraph size="lg">
              <Link href="/">← Back to home</Link>
            </Paragraph>
          </div>
        </Main>

        <Aside>
          <TLDRProfile />
        </Aside>
      </Layout>
    </>
  );
}
