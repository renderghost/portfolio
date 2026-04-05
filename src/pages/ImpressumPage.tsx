import { PageFooter } from '@/components/PageFooter/PageFooter';
import { PageHeader } from '@/components/PageHeader/PageHeader';
import type { JSX } from 'react';
import { Helmet } from 'react-helmet-async';

export default function ImpressumPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Impressum | Barry Prendergast</title>
        <meta name="description" content="Legal disclosure for renderg.host pursuant to § 5 DDG." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-whitesmoke">
        <PageHeader pageTitle="Impressum" />

        <main className="flex-1 flex flex-col gap-32 px-24 pt-32 pb-128 max-w-[720px]">
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
