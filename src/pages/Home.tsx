import PostCarousel from '@/components/PostCarousel/PostCarousel';
import AboutSection from '@/components/Section/Home/SectionHomeAbout';
import HeroSection from '@/components/Section/Home/SectionHomeHero';
import WorkSection from '@/components/Section/Home/SectionHomeWork';
import { Heading } from '@/components/Typography/Heading/Heading';
import { Paragraph } from '@/components/Typography/Paragraph/Paragraph';
// data
import articles from '@/data/json/articles.json';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div id="main" className="flex flex-col w-full">
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <WorkSection></WorkSection>
      {/* Hero Image */}
      <section className="w-full bg-gray-100 dark:bg-gray-900 py-12">
        <div className="container mx-auto flex flex-col gap-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2 w-full">
              <img
                className="w-full h-full object-cover rounded-lg shadow-md"
                src="/avatar-wide.jpeg"
                alt="Barry Prendergast - Product & Service Designer"
              />
            </div>
            <div className="lg:w-1/2 w-full text-center lg:text-left">
              <Heading level={2}>20+ Years in Design</Heading>
              <Paragraph size="body" className="mt-4">
                I have over two decades of experience working in design, helping startups shape digital products and
                services that resonate with users.
              </Paragraph>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <Heading level={4}>50+ Products Shipped</Heading>
                  <Paragraph size="body">Delivering impactful products across multiple industries.</Paragraph>
                </div>
                <div>
                  <Heading level={4}>Innovation & Strategy</Heading>
                  <Paragraph size="body">
                    Merging design thinking with strategic insight to shape effective solutions.
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Skills */}
      <section className="w-full bg-gray-100 dark:bg-gray-900 py-16">
        <div className="container mx-auto flex flex-col gap-4">
          <Heading level={2} className="text-center mb-8">
            Key Skills
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Design Strategy */}
            <div className="group flex flex-col items-center text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img className="w-full h-64 object-cover rounded-md" src="/avatar-wide.jpeg" alt="Design Strategy" />
              <Heading level={4} className="mt-4">
                Design Strategy
              </Heading>
              <Paragraph size="body">Aligning key business metrics with unmet user needs.</Paragraph>
            </div>

            {/* Product Design */}
            <div className="group flex flex-col items-center text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img className="w-full h-64 object-cover rounded-md" src="/avatar-wide.jpeg" alt="Product Design" />
              <Heading level={4} className="mt-4">
                Product Design
              </Heading>
              <Paragraph size="body">Lean prototyping and iterative testing.</Paragraph>
            </div>

            {/* Design Operations */}
            <div className="group flex flex-col items-center text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img className="w-full h-64 object-cover rounded-md" src="/avatar-wide.jpeg" alt="Design Operations" />
              <Heading level={4} className="mt-4">
                Design Operations
              </Heading>
              <Paragraph size="body">Tools, rituals, and metrics that nurture great design culture.</Paragraph>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-100 dark:bg-gray-900 py-16">
        <div className="container mx-auto flex flex-col gap-4">
          <PostCarousel posts={articles} title="Latest Articles" />
        </div>
      </section>
    </div>
  );
};

export default Home;
