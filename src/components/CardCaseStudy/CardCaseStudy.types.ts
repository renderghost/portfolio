export interface CardCaseStudyProps {
  caseStudy: {
    slug: string;
    title: string;
    summary: string;
    coverImage: string;
    affiliation: string;
    type: string;
    yearEnded?: string;
  };
}
