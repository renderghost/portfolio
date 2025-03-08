import { Divider } from '@/components/Divider/Divider';
import { Section } from '@/components/Section/Section';
import { Heading } from '@/components/Typography/Heading/Heading';
import { Paragraph } from '@/components/Typography/Paragraph/Paragraph';
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <Section theme="mono" id="about">
      <div className="grid grid-cols-3 gap-16">
        <div className="flex flex-col">
          <img
            className="object-cover w-full h-auto aspect-auto"
            src="/avatar-tall.jpeg"
            alt="Barry Prendergast - Product & Service Designer"
          />
        </div>
        <div className="flex flex-col col-span-2 gap-8">
          <Divider />
          <Heading level={2} style="section-title">
            About Me
          </Heading>

          <Paragraph size="lede">
            I help ambitious organisations to ship measurably better products by focusing on what the metrics that
            matter.
          </Paragraph>
          <Paragraph size="body">
            I believe great design emerges equally from thoughtful, timely conversations about big, meaningful ideas,
            and rigorous testing against the right metrics in lean iterative cycles. To me, tackling the hardest
            problems means listening intently, communicating clearly, and collaborating openly by default.
          </Paragraph>
          <Paragraph size="body">
            My approach is to great design is balances strategic clarity and design excellence with the everyday
            realities of life inside a cross-functional team, by being responsive and proactive when things don&apos;t
            go to plan. I lead talented teams to filter out distractions and focus sharply on what matters most—to
            businesses and customers alike.
          </Paragraph>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
