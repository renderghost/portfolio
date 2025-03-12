import { Button } from '@/components/Button/Button';
import { Divider } from '@/components/Divider/Divider';
import { Section } from '@/components/Section/Section';
import { Heading } from '@/components/Typography/Heading/Heading';
import { Paragraph } from '@/components/Typography/Paragraph/Paragraph';
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <Section theme="mono" id="about">
      <div className="flex flex-col gap-16 lg:grid lg:grid-cols-3">
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
            I help ambitious organisations get better products to market faster by focusing on the metrics that matter.
          </Paragraph>{' '}
          <Paragraph size="body">
            I believe that great design comes from bold ideas, timely conversations with the right people, rigorous
            testing against the right metrics in lean, iterative cycles. I try to tackle the hardest problems by
            listening closely, communicating clearly and collaborating openly by default.
          </Paragraph>
          <Paragraph size="body">
            My design approach balances strategic clarity with research and design excellence, while responding to the
            everchanging needs of an agile product team. I help teams to cut through distractions, to adapt when things
            don’t go to plan, and to stay focused on what matters most—to the teams and their customers alike.
          </Paragraph>
          <div className="flex flex-row mt-4">
            <Button variant="secondary">Connect on LinkedIn</Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
