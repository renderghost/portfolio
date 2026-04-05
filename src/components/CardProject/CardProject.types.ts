export type ProjectRole = 'Creator' | 'Contributor' | null;
export type ProjectStatus = 'Open' | 'In Progress' | 'Closed';

export interface CardProjectProps {
  project: {
    title: string;
    description: string;
    thumbnail: string | null;
    projectUrl: string | null;
    sourceUrl: string | null;
    role: ProjectRole;
    hasMyArtwork: boolean;
    category: string;
    status: ProjectStatus;
  };
}
