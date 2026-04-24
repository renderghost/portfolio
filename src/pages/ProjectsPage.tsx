import { CardGridProject } from '@/components/CardGridProject/CardGridProject';
import { PageFooter } from '@/components/PageFooter/PageFooter';
import { PageHeader } from '@/components/PageHeader/PageHeader';
import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import projectsData from '@/data/json/projects.json';
import { SeoHead } from '@/components/SeoHead/SeoHead';
import { SITE_URL } from '@/components/SeoHead/SeoHead.constants';
import type { JSX } from 'react';
import { Helmet } from 'react-helmet-async';
import type {
  CardProjectProps,
  ProjectRole,
  ProjectStatus,
} from '@/components/CardProject/CardProject.types';

interface ProjectRecord {
  title: string;
  description: string;
  thumbnail: string | null;
  projectUrl: string | null;
  sourceUrl: string | null;
  role: ProjectRole;
  hasMyArtwork: boolean;
  category: string;
  status: ProjectStatus;
}

// Display order for known categories; unknown ones sort alphabetically after.
const CATEGORY_ORDER = [
  'Art',
  'Design',
  'Music',
  'Science',
  'Literature',
  'Social Media',
  'Other',
];

function groupByCategory(
  projects: ProjectRecord[],
): { category: string; projects: ProjectRecord[] }[] {
  const map = new Map<string, ProjectRecord[]>();

  for (const project of projects) {
    const key = project.category ?? 'Other';
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(project);
  }

  return [...map.entries()]
    .sort(([a], [b]) => {
      const ai = CATEGORY_ORDER.indexOf(a);
      const bi = CATEGORY_ORDER.indexOf(b);
      const an = ai === -1 ? Infinity : ai;
      const bn = bi === -1 ? Infinity : bi;
      if (an !== bn) return an - bn;
      return a.localeCompare(b);
    })
    .map(([category, projects]) => ({ category, projects }));
}

const sectionLabel =
  'font-sans font-semibold text-base leading-[24px] text-dimgray ' +
  'tracking-[1px] uppercase';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Projects by Barry Prendergast',
  description: 'Design tools and personal projects by Barry Prendergast.',
  url: 'https://renderg.host/projects',
  author: {
    '@type': 'Person',
    name: 'Barry Prendergast',
    url: 'https://renderg.host',
  },
};

export default function ProjectsPage(): JSX.Element {
  const projects = projectsData as ProjectRecord[];
  const groups = groupByCategory(projects);

  return (
    <>
      <SeoHead
        title='Projects | Barry Prendergast, UX Designer Berlin'
        description='Personal design tools and creative projects by Barry Prendergast, UX designer and strategist based in Berlin, Germany.'
        canonical={`${SITE_URL}/projects`}
      />
      <Helmet>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Helmet>

      <div className="bg-whitesmoke min-h-screen flex flex-col">
        <PageHeader />

        <main className="flex flex-col gap-64 items-start px-24 pt-32 pb-128 flex-1">
          <SectionHeader title="My Projects" />
          {groups.length === 0 && (
            <Paragraph size="lg">No projects found.</Paragraph>
          )}

          {groups.map(({ category, projects: groupProjects }) => (
            <section
              key={category}
              className="flex flex-col gap-32 items-start w-full"
            >
              <p className={sectionLabel}>{category}</p>

              <CardGridProject
                cards={groupProjects.map(
                  (p): CardProjectProps => ({
                    project: {
                      title: p.title,
                      description: p.description,
                      thumbnail: p.thumbnail,
                      projectUrl: p.projectUrl,
                      sourceUrl: p.sourceUrl,
                      role: p.role,
                      hasMyArtwork: p.hasMyArtwork,
                      category: p.category,
                      status: p.status,
                    },
                  }),
                )}
              />
            </section>
          ))}
        </main>

        <PageFooter />
      </div>
    </>
  );
}
