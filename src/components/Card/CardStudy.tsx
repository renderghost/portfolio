import { Card } from '@/components/Card/Card';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface CardStudyProps {
  caseStudy: {
    name: string;
    summary: string;
    coverImage: string;
    type: string;
    endDate: string;
    company: string;
    slug: string;
  };
}

export const CardStudy: React.FC<CardStudyProps> = ({ caseStudy }) => {
  const navigate = useNavigate();

  return (
    <Card
      coverImage={caseStudy.coverImage}
      badge={{
        label: caseStudy.type,
        variant: 'primary',
      }}
      meta={{
        company: caseStudy.company,
        date: new Date(caseStudy.endDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }),
      }}
      title={caseStudy.name}
      description={caseStudy.summary}
      onClick={() => navigate(`/case-studies/${caseStudy.slug}`)}
      className="group cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1"
    />
  );
};
