import { Link } from '@/components/Link/Link';
import { PageFooter } from '@/components/PageFooter/PageFooter';
import { PageHeader } from '@/components/PageHeader/PageHeader';
import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import { SeoHead } from '@/components/SeoHead/SeoHead';
import { SITE_URL } from '@/components/SeoHead/SeoHead.constants';
import type { JSX } from 'react';
import { Helmet } from 'react-helmet-async';

const CONTACT_LINKS = [
  {
    label: 'Follow me on Bluesky',
    href: 'https://bsky.app/profile/renderg.host',
  },
  {
    label: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/barrymprendergast/',
  },
  {
    label: 'Book a Meeting',
    href: 'https://calendly.com/barry-prendergast',
  },
  {
    label: 'Send a Mail',
    href: 'mailto:contact@renderg.host',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Barry Prendergast',
  url: 'https://renderg.host/contact',
  mainEntity: {
    '@type': 'Person',
    name: 'Barry Prendergast',
    url: 'https://renderg.host',
  },
};

export default function ContactPage(): JSX.Element {
  return (
    <>
      <SeoHead
        title='Contact Barry Prendergast | UX Designer, Berlin'
        description='Get in touch with Barry Prendergast, independent UX designer and strategist based in Berlin, Germany. Available for freelance projects and consulting.'
        canonical={`${SITE_URL}/contact`}
      />
      <Helmet>
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Helmet>

      <div className="flex flex-col min-h-screen bg-whitesmoke ">
        <PageHeader />

        <main className="flex flex-col flex-1 gap-32 px-24 pt-32 pb-64">
          <SectionHeader title="Contact" />
          {/* Statement */}
          <p className="font-sans font-black text-[40px] leading-[48px] sm:text-[56px] sm:leading-[64px] lg:text-[72px] lg:leading-[80px] xl:text-[96px] xl:leading-[104px] text-black max-w-[1400px]">
            Let&apos;s talk about working together to build the right things, in the right way.
          </p>

          {/* Contact links */}
          <div className="flex flex-col items-start gap-16 pt-64 sm:flex-row sm:gap-32">
            {CONTACT_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                label={link.label}
                size='large'
                color='blue'
              />
            ))}
          </div>
        </main>

        <PageFooter />
      </div>
    </>
  );
}
