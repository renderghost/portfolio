import { BadgeLanguage } from '@/components/BadgeLanguage/BadgeLanguage';
import { PageFooter } from '@/components/PageFooter/PageFooter';
import { PageHeader } from '@/components/PageHeader/PageHeader';
import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import { SectionPosition } from '@/components/SectionPosition/SectionPosition';
import { SectionSkillCategory } from '@/components/SectionSkillCategory/SectionSkillCategory';
import { useSifaLanguages, useSifaPositions, useSifaSkills } from '@/hooks/atproto';
import { SeoHead } from '@/components/SeoHead/SeoHead';
import { SITE_URL } from '@/components/SeoHead/SeoHead.constants';
import type { JSX } from 'react';
import { Helmet } from 'react-helmet-async';

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: 'Barry Prendergast',
    jobTitle: 'UX Designer, Researcher and Strategist',
    url: 'https://renderg.host/career',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Berlin',
      addressCountry: 'Germany',
    },
    description:
      'UX designer, researcher, and strategist with 20+ years of experience leading teams and delivering complex digital products and services. Specialising in outcome-driven design, rapid prototyping, and rigorous testing to achieve measurable results.',
    knowsAbout: [
      'Outcome-Driven Design',
      'Design Operations',
      'Design Strategy',
      'Design Systems',
      'Human-Centred Design',
      'Information Architecture',
      'Interaction Design',
      'Lean UX',
      'Product Design',
      'Rapid Prototyping',
      'Service Design',
      'Systems Thinking',
      'Usability Testing',
      'User Research',
      'UX Design',
    ],
  },
};

const sectionLabel = 'font-sans font-semibold text-base leading-[24px] text-dimgray ' + 'tracking-[1px] uppercase';

export default function CareerPage(): JSX.Element {
  const { data: positions, loading: positionsLoading, error: positionsError } = useSifaPositions();
  const { data: skillCategories, loading: skillsLoading, error: skillsError } = useSifaSkills();
  const { data: languages, loading: languagesLoading, error: languagesError } = useSifaLanguages();

  const currentPositions = positions?.filter((p) => !p.endedAt) ?? [];
  const pastPositions = positions?.filter((p) => !!p.endedAt) ?? [];

  const loading = positionsLoading || skillsLoading || languagesLoading;
  const error = positionsError ?? skillsError ?? languagesError;

  return (
    <>
      <SeoHead
        title='Career — Barry Prendergast | Outcome-Driven UX Strategy & Design, Berlin'
        description='Career history of Barry Prendergast, UX designer, researcher, and strategist in Berlin. 20+ years leading teams and delivering complex digital products and services through outcome-driven design, rapid prototyping, and rigorous testing.'
        canonical={`${SITE_URL}/career`}
      />
      <Helmet>
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      </Helmet>

      <div className="flex flex-col items-center w-full bg-whitesmoke">
        <PageHeader />

        <div className="flex flex-col gap-32 items-start w-full max-w-[1920px] px-24 pt-32 pb-128">
          <SectionHeader title="My Career" statement="A selection of roles across startups, agencies, and enterprise organisations where I’ve helped teams deliver complex products and services in challenging, fast-moving environments." />
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
              <div className="flex flex-wrap items-start gap-8">
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
