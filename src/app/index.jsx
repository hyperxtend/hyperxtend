import React from 'react';
import NavBar from '../components/nav-bar';
import SkillsSection from '../components/skill-tiles';
import styled from 'styled-components';
import LandingPage from '../pages/landing-page';
import About from '../components/about';
import ProjectCarousel from '../components/carousel';

import './index.css';

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const App = () => {
  const [toggle, toggleNav] = React.useState(false);

  const [isLanding, setIsLanding] = React.useState(true);

  if (isLanding) {
    setTimeout(() => setIsLanding(false), 3600);
    return <LandingPage text="hello!" />;
  }

  return (
    <Container>
      <NavBar toggle={toggle} toggleNav={toggleNav} />
      {!toggle && (
        <>
          <About />
          <ProjectCarousel />
          <SkillsSection />
        </>
      )}
    </Container>
  );
};

export default App;
