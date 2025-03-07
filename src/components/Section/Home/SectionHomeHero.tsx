import { Heading } from '@/components/Typography/Heading/Heading';
import { Paragraph } from '@/components/Typography/Paragraph/Paragraph';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-bones-blue text-bones-white py-32">
      <div className="container mx-auto flex flex-col gap-16">
        {/* Divider */}
        <hr className="border-t border-bones-white w-full" />

        {/* Name and title */}
        <div className="flex flex-col gap-2">
          <Heading level={1} style="page-title">
            Barry Prendergast
          </Heading>
          <Paragraph size="byline">Designer. Berlin, Germany</Paragraph>
        </div>

        {/* Main headline and subheadline */}
        <div className="flex flex-col gap-4">
          <Paragraph size="display">Getting better-designed products to market faster.</Paragraph>
          <Paragraph size="lede">
            Outcome-driven product designer that cuts through complexity, mitigates risk, and drives measurable growth
            for innovative B2B startups and enterprises.
          </Paragraph>
        </div>

        {/* CTA Button */}
        <button className="self-start px-8 py-4 border border-bones-white">
          <Paragraph size="label">Arrange our First Meeting</Paragraph>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
