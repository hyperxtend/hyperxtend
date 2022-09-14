import React from 'react';
import NavBar from '../components/nav-bar';
import SkillsSection from '../components/skill-tiles';
import PageHeader from '../components/page-header';
import LandingPage from '../pages/landing-page';
import About from '../components/about';
import ProjectCarousel from '../components/carousel';

import './index.css';
import ContactFooter from '../components/contact-footer/component';
import { BrowserRouter } from 'react-router-dom';
import { BASE_URL } from '../routes/urls';
import NavigationRoutes from '../routes';

const App = () => {
  const [toggle, toggleNav] = React.useState(false);

  const [isLanding, setIsLanding] = React.useState(true);

  if (isLanding) {
    setTimeout(() => setIsLanding(false), 3600);
    return <LandingPage text="hello!" />;
  }

  return (
    <BrowserRouter basename={BASE_URL}>
      <NavBar toggle={toggle} toggleNav={toggleNav} />
      <NavigationRoutes toggle={toggle} />
      {!toggle && <ContactFooter />}
    </BrowserRouter>
  );
};

export default App;
