import { Tags } from '@/components/Tags/Tags';
import { Heading } from '@/components/Typography/Heading/Heading';
import { Paragraph } from '@/components/Typography/Paragraph/Paragraph';
import React from 'react';

const About: React.FC = () => {
  return (
    <main className="flex flex-col min-h-screen gap-16">
      {/* Introduction */}
      <section className="bg-neutral-100 text-neutral-0 dark:bg-neutral-0 dark:text-neutral-100 ">
        <div className="container flex flex-col gap-8 mx-auto">
          <Heading level={2}>About Me</Heading>
          <Paragraph>
            I&apos;m Barry Prendergast, a product and service designer with nearly 15 years of experience shaping
            digital experiences for startups and enterprise organisations. My focus is on strategic, outcome-driven
            design that delivers tangible business value while creating meaningful user experiences.
          </Paragraph>
          <Paragraph>
            I&apos;ve led multidisciplinary teams to build scalable products that solve complex problems, drive growth,
            and optimise operational efficiency. My approach combines human-centred design with strategic business
            insight, ensuring that each product aligns with user needs and business objectives. I&apos;m passionate
            about nurturing creative teams and building design systems that empower cross-functional collaboration. I
            thrive in environments where curiosity, creativity, and strategic thinking intersect.
          </Paragraph>
        </div>
      </section>
      {/* Leadership and Strategic Design */}
      <section className="bg-neutral-100 text-neutral-0 dark:bg-neutral-0 dark:text-neutral-100 ">
        <div className="container flex flex-col gap-8 mx-auto">
          <Heading level={2}>Leadership and Strategic Design</Heading>
          <Paragraph>
            Over the years, I&apos;ve held leadership roles where I&apos;ve built and mentored high-performing design
            teams. I believe in fostering a culture of continuous learning, psychological safety, and shared success.
          </Paragraph>
          <Paragraph>My strategic design approach involves:</Paragraph>
          <ul className="list-disc list-inside dark:text-neutral-100">
            <li>Driving product vision and aligning design strategy with business goals.</li>
            <li>Leading end-to-end design processes from research to implementation.</li>
            <li>Scaling design systems to enhance product consistency and operational efficiency.</li>
            <li>Championing user advocacy while balancing business and technical constraints.</li>
          </ul>
        </div>
      </section>
      {/* Core Values */}
      <section className="bg-neutral-100 text-neutral-0 dark:bg-neutral-0 dark:text-neutral-100 ">
        <div className="container flex flex-col gap-8 mx-auto">
          <Heading level={2}>Core Values</Heading>
          <ul className="grid grid-cols-2 gap-4">
            <li className="flex flex-col">
              <h3 className="text-2xl text-neutral-900 dark:text-neutral-100">Clarification</h3>
              <Paragraph>I simplify complexity to enable clear communication and informed decision-making.</Paragraph>
            </li>
            <li className="flex flex-col">
              <h3 className="text-2xl text-neutral-900 dark:text-neutral-100">Collaborate</h3>
              <Paragraph>I believe great products are built through inclusive and transparent collaboration.</Paragraph>
            </li>
            <li className="flex flex-col">
              <h3 className="text-2xl text-neutral-900 dark:text-neutral-100">Empower</h3>
              <Paragraph>
                I empower teams to take ownership and grow by fostering a culture of learning and experimentation.
              </Paragraph>
            </li>
            <li className="flex flex-col">
              <h3 className="text-2xl text-neutral-900 dark:text-neutral-100">Impact</h3>
              <Paragraph>I measure success by the impact on users, businesses, and communities.</Paragraph>
            </li>
          </ul>
        </div>
      </section>
      {/* Key Competencies */}
      <section className="bg-neutral-100 text-neutral-0 dark:bg-neutral-0 dark:text-neutral-100 ">
        <div className="container flex flex-col gap-8 mx-auto">
          <Heading level={2}>Key Competencies</Heading>
          <Tags
            items={[
              'Accessibility',
              'Agile Methodologies',
              'Career Development',
              'Content Design',
              'Design Leadership',
              'Design Methodologies',
              'Design Operations',
              'Design Strategy',
              'Design Systems',
              'Design Thinking',
              'HTML',
              'CSS & JS',
              'Information Architecture',
              'Interaction Design',
              'Interface Design',
              'Journey Mapping',
              'Lean UX',
              'People Management',
              'Persuasive Communication',
              'Product Design',
              'Rapid Prototyping',
              'Service Design',
              'Stakeholder Engagement',
              'UX Research',
              'Usability Testing',
            ]}
            emphasis="med"
          />
        </div>
      </section>
    </main>
  );
};

export default About;
