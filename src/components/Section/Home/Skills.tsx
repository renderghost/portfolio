import { Divider } from '@/components/Divider/Divider';
import { Heading } from '@/components/Heading/Heading';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { Section } from '@/components/Section/Section';
import { Skills } from '@/components/Skills/Skills';
import React from 'react';

const SkillsSection: React.FC = () => {
  return (
    <Section theme="gray" id="work-history">
      <Divider />
      {/* Section Header */}
      <div className="flex flex-col gap-1">
        <Heading level={2} style="section-title">
          Specialisations
        </Heading>
        <Paragraph size="body">
          Designing for outcomes—balancing strategy, execution, and operations to create products that can succeed in
          the market.
        </Paragraph>
      </div>

      {/* Main Content */}
      <Skills
        items={[
          {
            skillArtwork: 'strategy', //this is the Artwork name
            skillTitle: 'Design Strategy',
            skillDescription: 'Aligning key business metrics with unmet user needs.',
            skillApproach:
              'I translate business goals into actionable product and design objectives, ensuring every design decision drives meaningful success.',
            skillTags: 'Product Strategy, Design Thinking, Business Model Innovation, Design Leadership', //NEW
          },
          {
            skillArtwork: 'design', //this is the Artwork name
            skillTitle: 'Product Design',
            skillDescription: 'Hands-on design and prototyping to validate bets and improve user experiences.',
            skillApproach:
              'I combine research, usability, and rapid prototyping to de-risk product decisions and refine solutions over time through continuous iteration.',
            skillTags: 'User Research, Interface Design, Visual Design, Prototyping', //NEW
          },
          {
            skillArtwork: 'operations', //this is the Artwork name
            skillTitle: 'Design Operations',
            skillDescription: 'Optimising the tools, rituals, and metrics that nurture great design culture.',
            skillApproach:
              'I streamline workflows, remove friction, and embed scalable design practices that empower teams to move fast without compromising quality.',
            skillTags: 'Design Systems, Design Tools, Design Culture, Design Leadership', //NEW
          },
        ]}
      />
    </Section>
  );
};

export default SkillsSection;
