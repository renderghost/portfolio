import { Heading } from '@/components/Typography/Heading/Heading';
import { Paragraph } from '@/components/Typography/Paragraph/Paragraph';
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="w-full bg-neutral-100 py-32" id="about">
      <div className="container mx-auto flex flex-col gap-16">
        {/* Divider */}
        <hr className="border-t border-gray-300 w-full" />

        {/* Title */}
        <Heading level={2} style="section-title" className="text-neutral-900">
          About Me
        </Heading>

        {/* Content */}
        <div className="flex flex-col gap-8">
          <Paragraph size="lede" className="italic text-neutral-800">
            I believe great design can only emerge from thoughtful, timely conversations about big, meaningful ideas,
            and rigorous testing in lean iterative cycles.
          </Paragraph>

          <Paragraph size="body" className="text-neutral-700">
            I’ve spent my career supporting organisations with complex challenges to design and ship better products by
            listening intently, communicating clearly, and collaborating openly.
          </Paragraph>

          <Paragraph size="body" className="text-neutral-700">
            I&apos;ve partnered with and led talented teams to filter out the distractions and focus sharply on what
            matters most—to businesses and customers alike.
          </Paragraph>

          <Paragraph size="body" className="text-neutral-700">
            My approach to design is practical and straight-forward: balance strategic clarity and design excellence
            with the everyday realities of launching vibrant, successful products.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
