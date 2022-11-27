import React from 'react';
import NavBar from '../components/nav-bar';
import LandingPage from '../pages/landing-page';

import './index.css';
import ContactFooter from '../components/contact-footer/component';
import { BrowserRouter } from 'react-router-dom';
import { BASE_URL } from '../routes/urls';
import NavigationRoutes from '../routes';

const App = () => {
  const [toggle, setNavToggle] = React.useState<boolean>(false);

  const [isLanding, setIsLanding] = React.useState<boolean>(true);

  if (isLanding) {
    setTimeout(() => setIsLanding(false), 3600);
    return <LandingPage text="hello!" />;
  }

  return (
    <BrowserRouter basename={BASE_URL}>
      <NavBar toggle={toggle} toggleNav={setNavToggle} />
      <NavigationRoutes toggle={toggle} setNavToggle={setNavToggle} />
      {!toggle ? <ContactFooter /> : null}
    </BrowserRouter>
  );
};

export default App;
