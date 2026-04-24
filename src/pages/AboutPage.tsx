import { PageFooter } from '@/components/PageFooter/PageFooter';
import { PageHeader } from '@/components/PageHeader/PageHeader';
import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import { SectionImage } from '@/components/SectionImage/SectionImage';
import { SectionQuote } from '@/components/SectionQuote/SectionQuote';
import { SectionReadingList } from '@/components/SectionReadingList/SectionReadingList';
import { SectionText } from '@/components/SectionText/SectionText';
import { SeoHead } from '@/components/SeoHead/SeoHead';
import { SITE_URL } from '@/components/SeoHead/SeoHead.constants';
import type { JSX } from 'react';
import { Helmet } from 'react-helmet-async';

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  mainEntity: {
    '@type': 'Person',
    name: 'Barry Prendergast',
    jobTitle: 'UX Strategist and Designer',
    url: 'https://renderg.host',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Berlin',
      addressCountry: 'Germany',
    },
    description:
      'Independent UX Strategist and Designer helping organisations deliver better products and services through clear thinking, practical design, and meaningful collaboration.',
    sameAs: [
      'https://bsky.app/profile/renderg.host',
      'https://linkedin.com/in/barrymprendergast',
      'https://signal.me/#eu/XO_aKC1aE1GZYWdMx7WK7HKGSCfrlpNhlxLGNi774dhiL7qr32BAMrH1BqgChaiM',
      'https://calendly.com/barry-prendergast',
    ],
    knowsAbout: [
      'Content Design',
      'Design Operations',
      'Design Strategy',
      'Design Systems',
      'DesignOps',
      'Human-Centred Design',
      'Information Architecture',
      'Interaction Design',
      'Lean UX',
      'Product Design',
      'Service Design',
      'Systems Thinking',
      'UI Design',
      'User Experience Design',
      'User Interface Design',
      'UX Design',
    ],
  },
};

export default function AboutPage(): JSX.Element {
  return (
    <>
      <SeoHead
        title='About Barry Prendergast | UX Designer & Strategist, Berlin'
        description='Irish researcher and designer based in Berlin with 20+ years helping organisations close the gap between user needs, technology, and business goals.'
        canonical={`${SITE_URL}/about`}
      />
      <Helmet>
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      </Helmet>

      <div className="flex flex-col items-center w-full bg-whitesmoke">
        <PageHeader />

        <div className="flex flex-col gap-32 items-start w-full max-w-[1920px] px-24 pt-32 pb-128">
          <SectionHeader title="About Me" />
          <SectionImage
            src="/art/portrait/art/colour.jpg"
            alt="A photo of Barry Prendergast"
            caption="Photo credit: Johanna Ehrler"
            usecase='default'
          />
          <SectionQuote
            quote="Design is the process of going from an existing condition to a preferred one."
            attribution="Milton Glaser"
          />
          <SectionText body="Most complex design problems are system problems. The interface is just where we experience them." />
          <SectionText body="Great design operates at every level, from system to interaction to interface, and design decisions at each level shape the result. Successful teams use design as a strategic lever to build innovative products and services, deliver outsized business and user value, and drive sustainable growth." />
          <SectionText body="I started my career as a graphic designer working in print in the 90s, transitioning to UX design in the early 2000s. After nearly two decades working on UX across many domains, the common thread that drives me is helping people with different goals, perspectives, and priorities deliver something worthwhile, spectacular, and coherent." />
          <SectionText body="I help organisations close the gap between what users need, what technology can (and can't) do, and what the business aspires to achieve. Then we build products and services that satisfy all three. I believe nothing useful or long-lasting gets made any other way." />
          <SectionText body="I believe that my role as researcher and designer is to help people understand the status quo, and provide them with the tools, processes and knowledge to make postive and meaningful change. For me, that means having timely conversations, exposing complexity, testing risky assumptions, understanding constraints, and making good decisions collaboratively. I aim to leave every team more connected, informed and capable than when I joined them." />
          <SectionText body="In my spare time I enjoy making art and experimental music, writing articles, and some creative coding. I spend as much time outside with my kids as I can, and I read as widely as I can: design theory, systems thinking, information architecture, history, psychology, science fiction, and the occasional manual for fun." />
          <SectionReadingList />
        </div>

        <PageFooter />
      </div>
    </>
  );
}
