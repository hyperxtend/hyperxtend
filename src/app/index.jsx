import React from 'react';
import NavBar from '../components/nav-bar';
import SkillsSection from '../components/skill-tiles';
import PageHeader from '../components/page-header';
import LandingPage from '../pages/landing-page';
import About from '../components/about';
import ProjectCarousel from '../components/carousel';

import './index.css';
import ContactFooter from '../components/contact-footer/component';

const App = () => {
  const [toggle, toggleNav] = React.useState(false);

  const [isLanding, setIsLanding] = React.useState(true);

  if (isLanding) {
    setTimeout(() => setIsLanding(false), 3600);
    return <LandingPage text="hello!" />;
  }

  return (
    <>
      <NavBar toggle={toggle} toggleNav={toggleNav} />
      {!toggle && (
        <>
          <About />
          <PageHeader title="Projects" description="swipe to see my work" />
          <ProjectCarousel />
          <PageHeader title="Skills" description="tap and discover" />
          <SkillsSection />
        </>
      )}
      {!toggle && <ContactFooter />}
    </>
  );
};

export default App;
