import { Link } from '@/components/Link/Link';
import { Tags } from '@/components/Tags/Tags';
import { specializations } from '@/data/specializations';
import type { JSX } from 'react';

/**
 * TL;DR Profile sidebar component
 *
 * @returns JSX element with profile photo and summary information
 */
export default function TLDRProfile(): JSX.Element {
  return (
    <div className="flex flex-col gap-6 bg-bones-blue text-bones-white sticky top-0 md:h-screen md:py-12">
      <div className="flex flex-col gap-6">
        <img
          src="/avatar-square.jpeg"
          alt="Barry Prendergast"
          className="w-32 h-32 md:w-48 md:h-48 aspect-square object-cover"
        />

        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-medium">Barry Prendergast</h1>
          <p className="text-xl opacity-80">Consulting Design Strategist</p>
          <p className="text-xl opacity-80">Berlin, Germany</p>
          <p className="text-xl opacity-80">Since 2008 (17+ years)</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xl font-medium">Specializations</p>
          <Tags tags={specializations} className="flex-wrap" />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xl font-medium">Connect</p>
          <div className="flex flex-col gap-2 text-lg">
            <Link href="https://calendar.app.google/cuYkSrDLca1Wxfqo9" target="_blank" rel="noopener noreferrer">
              Book a meeting
            </Link>
            <Link href="https://linkedin.com/in/barryprendergast" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Link>
            <Link
              href="https://signal.me/#eu/XO_aKC1aE1GZYWdMx7WK7HKGSCfrlpNhlxLGNi774dhiL7qr32BAMrH1BqgChaiM"
              target="_blank"
              rel="noopener noreferrer"
            >
              Signal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
