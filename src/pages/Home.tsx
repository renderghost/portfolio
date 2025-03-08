import PostCarousel from '@/components/PostCarousel/PostCarousel';
import AboutSection from '@/components/Section/Home/About';
import HeroSection from '@/components/Section/Home/Hero';
import TLDRsection from '@/components/Section/Home/History';
import SkillsSection from '@/components/Section/Home/Skills';
import WorkSection from '@/components/Section/Home/Work';
// data
import articles from '@/data/json/articles.json';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div id="main" className="flex flex-col w-full">
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <SkillsSection></SkillsSection>
      <TLDRsection></TLDRsection>
      <WorkSection></WorkSection>

      {/* Hero Image */}

      <section className="w-full py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container flex flex-col gap-4 mx-auto">
          <PostCarousel posts={articles} title="Latest Articles" />
        </div>
      </section>
    </div>
  );
};

export default Home;
