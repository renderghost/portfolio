import { PageFooter } from '@/components/PageFooter/PageFooter';
import { PageHeader } from '@/components/PageHeader/PageHeader';
import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import { SectionGrainPhotos } from '@/components/SectionGrainPhotos/SectionGrainPhotos';
import { SectionReadingList } from '@/components/SectionReadingList/SectionReadingList';
import { SeoHead } from '@/components/SeoHead/SeoHead';
import { SITE_URL } from '@/components/SeoHead/SeoHead.constants';
import type { JSX } from 'react';

export default function InterestsPage(): JSX.Element {
  return (
    <>
      <SeoHead
        title='Interests — Barry Prendergast | UX Designer & Strategist, Berlin'
        description='What Barry Prendergast reads, thinks about, and finds worth exploring — from design theory and systems thinking to history, science fiction, and everything in between.'
        canonical={`${SITE_URL}/interests`}
      />

      <div className="flex flex-col items-center w-full bg-whitesmoke">
        <PageHeader />

        <div className="flex flex-col gap-32 items-start w-full max-w-[1920px] px-24 pt-24 pb-128">
          <SectionHeader
            title="Interests"
            statement="What I read, think about, and find worth exploring — from design theory and systems thinking to history, psychology, science fiction, and the occasional technical manual read purely for fun."
          />
          <SectionGrainPhotos />
          <SectionReadingList />
        </div>

        <PageFooter />
      </div>
    </>
  );
}
