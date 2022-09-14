import React from 'react';
import About from '../../components/about';
import PageHeader from '../../components/page-header';
import ProjectCarousel from '../../components/carousel';
import SkillsSection from '../../components/skill-tiles';

const OverviewPage = () => {
  return (
    <>
      <About />
      <PageHeader title="Projects" description="swipe to see my work" />
      <ProjectCarousel />
      <PageHeader title="Skills" description="tap and discover" />
      <SkillsSection />
    </>
  );
};

export default OverviewPage;
