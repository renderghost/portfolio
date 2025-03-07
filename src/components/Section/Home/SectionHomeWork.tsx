import { Heading } from '@/components/Typography/Heading/Heading';
import { Paragraph } from '@/components/Typography/Paragraph/Paragraph';
import React from 'react';

const WorkSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-32" id="work-history">
      <div className="container mx-auto flex flex-col gap-16">
        {/* Divider */}
        <hr className="border-t border-gray-300 w-full" />

        {/* Section Header */}
        <div className="flex flex-col gap-1">
          <Heading level={2} style="paragraph-title" className="text-neutral-900">
            A Brief History
          </Heading>
          <Paragraph size="byline" className="italic text-neutral-700">
            Designer. Berlin, Germany
          </Paragraph>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Stats */}
          <div className="flex flex-col gap-8">
            {[
              { title: '+20 years in Design', subtitle: 'Designer. Berlin, Germany' },
              { title: '+40 Launches', subtitle: 'In B2B markets globally' },
              { title: '5 Teams Led', subtitle: 'At enterprises and startups' },
            ].map((item) => (
              <div key={item.title} className="px-8 py-6 bg-neutral-50 rounded-lg">
                <Heading level={3} style="paragraph-title" className="text-neutral-900">
                  {item.title}
                </Heading>
                <Paragraph size="body" className="text-neutral-700">
                  {item.subtitle}
                </Paragraph>
              </div>
            ))}
          </div>

          {/* Work History List */}
          <div className="flex flex-col gap-6">
            {[
              { company: 'Morressier', role: 'Staff Product Designer', dates: '(2022—Present)' },
              { company: 'LEO Pharma', role: 'Principal Product Designer', dates: '(2018—2022)' },
              { company: 'MyGoodPlanet', role: 'Consulting Design Director', dates: '(2015—2018)' },
              { company: 'EDF Energy', role: 'Principal Product Designer', dates: '(2011—2015)' },
              { company: 'UK Home Office', role: 'Senior Interaction Designer', dates: '(2007—2011)' },
            ].map((job) => (
              <div key={job.company} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <Paragraph size="label" className="text-neutral-900">
                  {job.company}
                </Paragraph>
                <Paragraph size="body" className="text-neutral-700">
                  {job.role}
                </Paragraph>
                <Paragraph size="body" className="text-neutral-500">
                  {job.dates}
                </Paragraph>
              </div>
            ))}

            {/* Action Buttons */}
            <div className="flex gap-8 mt-8">
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg">
                <Paragraph size="label">View Complete History</Paragraph>
              </button>
              <button className="px-8 py-4 text-blue-600 font-bold">
                <Paragraph size="label">Download CV</Paragraph>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
