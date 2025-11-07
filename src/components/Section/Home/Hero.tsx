import Button from '@/components/Button/Button';
import { Divider } from '@/components/Divider/Divider';
import { Heading } from '@/components/Heading/Heading';
import { Link } from '@/components/Link/Link';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { Section } from '@/components/Section/Section';
import React from 'react';

const HeroSection: React.FC = () => (
  <Section theme="blue" id="hero">
    <Divider />
    <div className="flex flex-col gap-1">
      <Link to="/" underline="hover">
        <Heading level={1} style="page-title">
          Design by Barry Prendergast
        </Heading>
        <Paragraph size="byline">Berlin, Germany</Paragraph>
      </Link>
    </div>

    <div className="flex flex-col gap-6 xl:gap-5">
      <Paragraph size="display">Getting better-designed products to market faster.</Paragraph>
      <Paragraph size="lede">
        Outcome-driven product design that cuts through complexity, mitigates risk and drives measurable growth for
        innovative B2B organisations.
      </Paragraph>
      <div className="flex flex-row mt-4">
        <Button variant="primary">Arrange our First Meeting</Button>
      </div>
    </div>
  </Section>
);

export default HeroSection;
