import { Heading } from '@/components/Heading/Heading';
import { Aside, Layout, Main } from '@/components/Layout/Layout';
import { Link } from '@/components/Link/Link';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import TLDRProfile from '@/components/TLDRProfile/TLDRProfile';
import type { JSX } from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * About page component
 *
 * @returns JSX element with about page content
 */
export default function AboutPage(): JSX.Element {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'Person',
      name: 'Barry Prendergast',
      jobTitle: 'Consulting Design Strategist',
      description:
        'Design strategist helping ambitious organisations get better products to market faster by focusing on the metrics that matter.',
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
          content="Design strategist helping ambitious organisations get better products to market faster through outcome-driven design."
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Helmet>

      <Layout theme="default">
        <Main>
          <div className="flex flex-col gap-12">
            <Heading level={1} style="page">
              About Me
            </Heading>
            <Paragraph size="billboard">
              I help ambitious organisations get better products to market faster by focusing on the metrics that
              matter.
            </Paragraph>

            <Paragraph size="billboard">
              I believe that great design comes from <em>bold ideas</em>, timely conversations with the right people,
              and rigorous testing against the right metrics in lean, iterative cycles.
            </Paragraph>

            <Paragraph size="billboard">
              I&apos;m a fellow of the{' '}
              <Link href="https://thomaskuhnfoundation.org/" target="_blank">
                Thomas Kuhn Foundation
              </Link>
              , supporting new ways to understand scientific knowledge.
            </Paragraph>

            <Paragraph size="billboard">
              I try to tackle the hardest problems by listening closely, communicating clearly and collaborating openly
              by default.
            </Paragraph>

            <Paragraph size="billboard">
              My design approach balances <em>strategic clarity</em> with research and design excellence, while
              responding to the everchanging needs of an agile product team.
            </Paragraph>

            <Paragraph size="billboard">
              I help teams to cut through distractions, to adapt when things don&apos;t go to plan, and to stay focused
              on what matters most—to the teams and their customers alike.
            </Paragraph>

            <Heading level={2} style="section">
              I <Link href="#">specialise</Link> in three areas.
            </Heading>

            <Paragraph size="billboard">
              <em>Design Strategy</em>: Aligning key business metrics with unmet user needs. I translate business goals
              into actionable product and design objectives, ensuring every design decision drives meaningful success.
            </Paragraph>

            <Paragraph size="billboard">
              <em>Product Design</em>: Hands-on design and prototyping to validate bets and improve user experiences. I
              combine research, usability, and rapid prototyping to de-risk product decisions and refine solutions over
              time through continuous iteration.
            </Paragraph>

            <Paragraph size="billboard">
              <em>Design Operations</em>: Optimising the tools, rituals, and metrics that nurture great design culture.
              I streamline workflows, remove friction, and embed scalable design practices that empower teams to move
              fast without compromising quality.
            </Paragraph>

            <Paragraph size="billboard">
              Since 2008, I&apos;ve worked with organisations including{' '}
              <Link href="https://www.morressier.com/" target="_blank">
                Morressier
              </Link>
              ,{' '}
              <Link href="https://www.leo-pharma.com/" target="_blank">
                LEO Pharma
              </Link>
              ,{' '}
              <Link href="https://www.edfenergy.com/" target="_blank">
                EDF Energy
              </Link>
              ,{' '}
              <Link href="https://www.gov.uk/government/organisations/home-office" target="_blank">
                UK Home Office
              </Link>
              ,{' '}
              <Link href="https://www.brandwatch.com/" target="_blank">
                Brandwatch
              </Link>
              , and{' '}
              <Link href="https://mediatonicgames.com/" target="_blank">
                Mediatonic
              </Link>
              —from scientific publishing to pharmaceuticals, energy to government, consumer intelligence to gaming.
            </Paragraph>

            <Paragraph size="billboard">
              <Link href="https://calendar.app.google/cuYkSrDLca1Wxfqo9" target="_blank" rel="noopener noreferrer">
                Book our first meeting
              </Link>
              , connect on{' '}
              <Link href="https://linkedin.com/in/barryprendergast" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </Link>
              , or message me on{' '}
              <Link
                href="https://signal.me/#eu/XO_aKC1aE1GZYWdMx7WK7HKGSCfrlpNhlxLGNi774dhiL7qr32BAMrH1BqgChaiM"
                target="_blank"
                rel="noopener noreferrer"
              >
                Signal
              </Link>
              .
            </Paragraph>

            <Paragraph size="billboard">
              <Link href="/">← Back to Home</Link>
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
