import { PageFooter } from '@/components/PageFooter/PageFooter';
import { PageHeader } from '@/components/PageHeader/PageHeader';
import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import { SectionImage } from '@/components/SectionImage/SectionImage';
import { SectionQuote } from '@/components/SectionQuote/SectionQuote';
import { SectionText } from '@/components/SectionText/SectionText';
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
      'Independent product designer helping organisations deliver better products through clear thinking, practical design, and meaningful collaboration.',
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
      <Helmet>
        <title>About | Barry Prendergast</title>
        <meta
          name="description"
          content="Independent product designer helping organisations deliver better products through clear thinking, practical design, and meaningful collaboration."
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      </Helmet>

      <div className="flex flex-col items-center w-full bg-whitesmoke">
        <PageHeader />

        <div className="flex flex-col gap-32 items-start w-full max-w-[1920px] px-24 pt-32 pb-128">
          <SectionHeader title="About Me" />
          <SectionImage
            src="/art/portrait/art/colour.jpg"
            alt="A photo of Barry Prendergast"
            caption="Photo credit: Johanna Ehrler"
            usecase='large'
          />
          <SectionQuote
            quote="Design is the process of going from an existing condition to a preferred one."
            attribution="Milton Glaser"
          />
          <SectionText body="Most complex design problems are systems problems. The interface is just where we experience them. Great design operates at every level, from system to interaction to interface, and design decisions at each level shape the result. Successful teams use design as a strategic lever to build innovative products, deliver outsized business and user value, and drive sustainable growth." />
          <SectionText body="I started my career as a graphic designer working in print in the 90s, transitioning to UX design in the early 2000s. After more than two decades working on UX across many domains, the common thread that drives me is still the same: helping people with different skills, goals, perspectives, and priorities make something worthwhile, spectacular, and coherent together." />
          <SectionText body="I've spent almost 20 years helping organisations close the gap between what users need, what technology can (and can't) do, and what a business aspires to achieve, then building products and services that satisfy all three. I believe nothing useful or long-lasting gets made any other way." />
          <SectionText body="I believe that my role as a designer is to help people understand the status quo, and provide them with the tools, processes and knowledge to make postive and meaningful change. For me, that means having timely conversations, exposing complexity, testing risky assumptions, understanding constraints, and making good decisions collaboratively. I aim to leave every team more connected, informed and capable than when I joined them." />
          <SectionText body="In my spare time I enjoy making art and experimental music, writing articles, and some creative coding. I spend as much time outside with my kids as I can, and I read as widely as I can: design theory, systems thinking, information architecture, history, psychology, science fiction, and the occasional manual for fun." />
        </div>

        <PageFooter />
      </div>
    </>
  );
}
