import React from 'react';
import NavBar from '../components/nav-bar';
import SkillsSection from '../components/skill-tiles';
import styled from 'styled-components';
import LandingPage from '../pages/landing-page';
import About from '../components/about';
const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const SiteContainer = styled.div`
  margin-top: 95px;
  border: 3px solid green;
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
        <SiteContainer>
          <About />
          <SkillsSection />
        </SiteContainer>
      )}
    </Container>
  );
};

export default App;
