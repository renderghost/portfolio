import { CardStudy } from '@/components/Card/CardStudy';
import React, { useEffect, useState } from 'react';

interface CaseStudy {
  name: string;
  summary: string;
  coverImage: string;
  type: string;
  endDate: string;
  company: string;
  slug: string;
}

const CaseStudiesPage: React.FC = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);

  useEffect(() => {
    // Importing the JSON file dynamically
    import('@/data/json/casestudies.json').then((data) => {
      setCaseStudies(data.default);
    });
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">Case Studies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map((caseStudy, index) => (
          <CardStudy key={index} caseStudy={caseStudy} />
        ))}
      </div>
    </main>
  );
};

export default CaseStudiesPage;
