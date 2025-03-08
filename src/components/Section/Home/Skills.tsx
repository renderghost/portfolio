import { Divider } from '@/components/Divider/Divider';
import { Section } from '@/components/Section/Section';
import { Skills } from '@/components/Skills/Skills';
import { Heading } from '@/components/Typography/Heading/Heading';
import { Paragraph } from '@/components/Typography/Paragraph/Paragraph';
import React from 'react';

const SkillsSection: React.FC = () => {
  return (
    <Section theme="grey" id="work-history">
      <Divider />
      {/* Section Header */}
      <div className="flex flex-col gap-1">
        <Heading level={2} style="body-title">
          Critical Skillset
        </Heading>
        <Paragraph size="byline" className="italic">
          Designer. Berlin, Germany
        </Paragraph>
      </div>

      {/* Main Content */}
      <Skills
        items={[
          { skillTitle: 'Design Strategy', skillDescription: 'Aligning key business metrics with unmet user needs.' },
          {
            skillTitle: 'Design Practice',
            skillDescription: 'Hands-on design and prototyping to valid our bets and improve user experiences.',
          },
          {
            skillTitle: 'Design Operations',
            skillDescription: 'Optimising the tools, rituals, and metrics that nurture great design culture.',
          },
        ]}
      />
    </Section>
  );
};

export default SkillsSection;
