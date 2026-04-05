import { BadgeLanguage } from '@/components/BadgeLanguage/BadgeLanguage';
import { PageFooter } from '@/components/PageFooter/PageFooter';
import { PageHeader } from '@/components/PageHeader/PageHeader';
import { SectionPosition } from '@/components/SectionPosition/SectionPosition';
import { SectionSkillCategory } from '@/components/SectionSkillCategory/SectionSkillCategory';
import { useSifaLanguages, useSifaPositions, useSifaSkills } from '@/hooks/atproto';
import type { JSX } from 'react';
import { Helmet } from 'react-helmet-async';

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: 'Barry Prendergast',
    jobTitle: 'UX Strategist and Designer',
    url: 'https://renderg.host/work',
  },
};

const sectionLabel = 'font-sans font-semibold text-base leading-[24px] text-dimgray ' + 'tracking-[1px] uppercase';

export default function WorkPage(): JSX.Element {
  const { data: positions, loading: positionsLoading, error: positionsError } = useSifaPositions();
  const { data: skillCategories, loading: skillsLoading, error: skillsError } = useSifaSkills();
  const { data: languages, loading: languagesLoading, error: languagesError } = useSifaLanguages();

  const currentPositions = positions?.filter((p) => !p.endedAt) ?? [];
  const pastPositions = positions?.filter((p) => !!p.endedAt) ?? [];

  const loading = positionsLoading || skillsLoading || languagesLoading;
  const error = positionsError ?? skillsError ?? languagesError;

  return (
    <>
      <Helmet>
        <title>Resume | Barry Prendergast</title>
        <meta
          name="description"
          content="Independent product designer helping organisations deliver better products through clear thinking, practical design, and meaningful collaboration."
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      </Helmet>

      <div className="flex flex-col items-center w-full bg-whitesmoke">
        <PageHeader pageTitle="My Resume" />

        <div className="flex flex-col gap-32 items-start w-full max-w-[1920px] px-24 pt-32 pb-128">
          {loading && <p className="font-sans font-medium text-base leading-[28px] text-black">Loading...</p>}

          {error && (
            <p className="font-sans font-medium text-base leading-[28px] text-black">Error loading data: {error}</p>
          )}

          {!loading && !error && currentPositions.length > 0 && (
            <>
              <p className={sectionLabel}>Current Roles</p>
              {currentPositions.map((position, index) => (
                <SectionPosition
                  key={`current-${position.company}-${index}`}
                  company={position.company}
                  title={position.title}
                  description={position.description}
                  employmentType={position.employmentType}
                  startedAt={position.startedAt}
                  endedAt={position.endedAt}
                  location={position.location}
                />
              ))}
            </>
          )}

          {!loading && !error && pastPositions.length > 0 && (
            <>
              <p className={sectionLabel}>Previous Roles</p>
              {pastPositions.map((position, index) => (
                <SectionPosition
                  key={`past-${position.company}-${index}`}
                  company={position.company}
                  title={position.title}
                  description={position.description}
                  employmentType={position.employmentType}
                  startedAt={position.startedAt}
                  endedAt={position.endedAt}
                  location={position.location}
                />
              ))}
            </>
          )}

          {!loading && !error && skillCategories && skillCategories.length > 0 && (
            <>
              <p className={sectionLabel}>Skills</p>
              {skillCategories.map((group) => (
                <SectionSkillCategory key={group.category} category={group.category} skills={group.skills} />
              ))}
            </>
          )}

          {!loading && !error && languages && languages.length > 0 && (
            <>
              <p className={sectionLabel}>Languages</p>
              <div className="flex gap-8 items-start flex-wrap">
                {languages.map((lang) => (
                  <BadgeLanguage key={lang.name} language={lang.name} proficiency={lang.proficiency} />
                ))}
              </div>
            </>
          )}
        </div>

        <PageFooter />
      </div>
    </>
  );
}
