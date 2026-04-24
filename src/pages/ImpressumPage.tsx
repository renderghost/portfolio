import { PageFooter } from '@/components/PageFooter/PageFooter';
import { PageHeader } from '@/components/PageHeader/PageHeader';
import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import { SeoHead } from '@/components/SeoHead/SeoHead';
import { SITE_URL } from '@/components/SeoHead/SeoHead.constants';
import type { JSX } from 'react';

export default function ImpressumPage(): JSX.Element {
  return (
    <>
      <SeoHead
        title='Impressum | Barry Prendergast'
        description='Legal disclosure for renderg.host pursuant to § 5 DDG.'
        canonical={`${SITE_URL}/impressum`}
        noIndex
      />

      <div className="min-h-screen flex flex-col bg-whitesmoke">
        <PageHeader />

        <main className="flex-1 flex flex-col gap-32 px-24 pt-32 pb-128 max-w-[720px]">
          <SectionHeader title="Impressum" />
          <section className="flex flex-col gap-8">
            <p className="font-sans font-black text-base leading-[24px] text-black">Angaben gemäß § 5 DDG</p>
            <p className="font-sans font-regular text-base leading-[28px] text-black">
              Barry Prendergast
              <br />
              Friedrich-Engels-Straße 11
              <br />
              15537 Grünheide (Mark)
              <br />
              Deutschland
            </p>
          </section>

          <section className="flex flex-col gap-8">
            <p className="font-sans font-black text-base leading-[24px] text-black">Kontakt</p>
            <p className="font-sans font-regular text-base leading-[28px] text-black">
              E-Mail:{' '}
              <a href="mailto:contact@renderg.host" className="underline underline-offset-4">
                contact@renderg.host
              </a>
            </p>
          </section>

          <section className="flex flex-col gap-8">
            <p className="font-sans font-black text-base leading-[24px] text-black">Umsatzsteuer-ID</p>
            <p className="font-sans font-regular text-base leading-[28px] text-black">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: DE325048686
            </p>
          </section>

          <section className="flex flex-col gap-8">
            <p className="font-sans font-black text-base leading-[24px] text-black">Berufsbezeichnung</p>
            <p className="font-sans font-regular text-base leading-[28px] text-black">Freiberuflicher Designer</p>
          </section>
        </main>

        <PageFooter />
      </div>
    </>
  );
}
