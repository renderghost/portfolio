import { Divider } from '@/components/Divider/Divider';
import { Facts } from '@/components/Facts/Facts';
import { Section } from '@/components/Section/Section';
import { Heading } from '@/components/Typography/Heading/Heading';
import { Paragraph } from '@/components/Typography/Paragraph/Paragraph';
import React from 'react';

const WorkHistorySection: React.FC = () => {
  return (
    <Section theme="gray" id="work-history">
      <Divider />
      {/* Section Header */}
      <div className="flex flex-col gap-1">
        <Heading level={2} style="body-title">
          A Brief History
        </Heading>
        <Paragraph size="byline" className="italic">
          Designer. Berlin, Germany
        </Paragraph>
      </div>

      {/* Main Content */}
      <div className="grid gap-16 lg:grid-cols-2">
        {/* Facts */}
        <Facts
          items={[
            { title: '+20 years in Design', subtitle: 'Designer. Berlin, Germany' },
            { title: '+40 Launches', subtitle: 'Impactful B2B products launched globally.' },
            { title: '5 Teams Led', subtitle: 'Guided teams in enterprises and startups.' },
          ]}
        />

        {/* Work History List */}
        <div className="flex flex-col gap-6">
          {[
            { company: 'Morressier', role: 'Staff Product Designer', dates: '(2022—Present)' },
            { company: 'LEO Pharma', role: 'Senior Product Designer', dates: '(2018—2022)' },
            { company: 'MyGoodPlanet', role: 'Lead Designer', dates: '(2015—2018)' },
            { company: 'EDF Energy', role: 'UX Designer', dates: '(2011—2015)' },
            { company: 'UK Home Office', role: 'UX/UI Designer', dates: '(2007—2011)' },
          ].map((job) => (
            <div key={job.company} className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
              <Paragraph size="label">{job.company}</Paragraph>
              <Paragraph size="body">{job.role}</Paragraph>
              <Paragraph size="footnote">{job.dates}</Paragraph>
            </div>
          ))}

          {/* Action Buttons */}
          <div className="flex gap-8 mt-8">
            <button className="px-8 py-4 text-blue-600 border-2 border-blue-600 rounded-lg">
              <Paragraph size="label">View Complete History</Paragraph>
            </button>
            <button className="px-8 py-4 font-bold text-blue-600">
              <Paragraph size="label">Download CV</Paragraph>
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WorkHistorySection;
