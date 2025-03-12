import { Divider } from '@/components/Divider/Divider';
import { Events } from '@/components/Events/Events';
import { Section } from '@/components/Section/Section';
import { Heading } from '@/components/Typography/Heading/Heading';
import { Paragraph } from '@/components/Typography/Paragraph/Paragraph';
import React from 'react';

const eventsData = [
  {
    eventType: 'Employed',
    eventTitle: 'Staff Product Designer',
    eventDescription: 'Empowering researchers by improving scientific discovery and collaboration experiences.',
    eventStartYear: '2021',
    eventEndYear: 'Present',
    eventAffiliation: 'Morressier',
  },
  {
    eventType: 'Employed',
    eventTitle: 'Lead Product Designer',
    eventDescription: 'Designing hybrid event experiences and scalable product strategies for academia.',
    eventStartYear: '2019',
    eventEndYear: '2022',
    eventAffiliation: 'Morressier',
  },
  {
    eventType: 'Employed',
    eventTitle: 'Principal Product Designer',
    eventDescription: 'Researching medical devices using AI for enhanced dermatological treatments.',
    eventStartYear: '2019',
    eventEndYear: '2019',
    eventAffiliation: 'LEO Pharma',
  },
  {
    eventType: 'Employed',
    eventTitle: 'Design Director (Consulting)',
    eventDescription: "Supporting shoppers' transition to sustainable e-commerce through strategic UX practices.",
    eventStartYear: '2018',
    eventEndYear: '2019',
    eventAffiliation: 'MyGoodPlanet',
  },
  {
    eventType: 'Employed',
    eventTitle: 'Principal Product Designer',
    eventDescription: 'Creating innovative digital products for smarter residential energy management.',
    eventStartYear: '2017',
    eventEndYear: '2019',
    eventAffiliation: 'EDF Energy',
  },
  {
    eventType: 'Employed',
    eventTitle: 'Staff Service Designer',
    eventDescription: 'Strategically enhancing customer experiences for national Smart Meter rollout.',
    eventStartYear: '2017',
    eventEndYear: '2017',
    eventAffiliation: 'EDF Energy',
  },
  {
    eventType: 'Employed',
    eventTitle: 'Service Designer',
    eventDescription: 'Streamlining UK immigration services through user-centred digital transformation.',
    eventStartYear: '2016',
    eventEndYear: '2017',
    eventAffiliation: 'UK Home Office',
  },
  {
    eventType: 'Employed',
    eventTitle: 'Senior UX Designer',
    eventDescription: 'Developing insights-driven digital tools for enterprise-level decision makers.',
    eventStartYear: '2015',
    eventEndYear: '2016',
    eventAffiliation: 'Brandwatch',
  },
  {
    eventType: 'Employed',
    eventTitle: 'UX Design Manager',
    eventDescription: 'Launching scalable design systems and strategies for marketing automation platforms.',
    eventStartYear: '2014',
    eventEndYear: '2015',
    eventAffiliation: 'Pure360',
  },
  {
    eventType: 'Employed',
    eventTitle: 'UX Designer',
    eventDescription: 'Creating inclusive gaming experiences and fostering collaborative UX practices.',
    eventStartYear: '2012',
    eventEndYear: '2014',
    eventAffiliation: 'Mediatonic',
  },
  {
    eventType: 'Employed',
    eventTitle: 'UX Designer',
    eventDescription: 'Enhancing digital products through systematic UX research and testing.',
    eventStartYear: '2012',
    eventEndYear: '2012',
    eventAffiliation: 'Scenestealer',
  },
  {
    eventType: 'Employed',
    eventTitle: 'UX Designer',
    eventDescription: 'Driving user-centred design and usability in enterprise software solutions.',
    eventStartYear: '2010',
    eventEndYear: '2012',
    eventAffiliation: 'Schlumberger',
  },
  {
    eventType: 'Employed',
    eventTitle: 'User Interface Designer',
    eventDescription: 'Designing engaging interfaces for interactive entertainment experiences.',
    eventStartYear: '2008',
    eventEndYear: '2009',
    eventAffiliation: 'Relentless Software',
  },
];

export const HistorySection: React.FC = () => {
  return (
    <Section theme="gray" id="history">
      <Divider />
      <div className="flex flex-col gap-2">
        <Heading level={2} style="section-title">
          Important Life Events
        </Heading>
        <Paragraph size="byline">
          I believe great design emerges equally from thoughtful conversations and rigorous iterative testing.
        </Paragraph>
      </div>
      <Events items={eventsData} />
    </Section>
  );
};

export default HistorySection;
