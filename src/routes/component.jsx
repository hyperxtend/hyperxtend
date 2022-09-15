import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OverviewPage from '../pages/overview-page';
import ComingSoonPage from '../pages/coming-soon-page';
import { ABOUT, BLOG, CONTACT, LANDING_PAGE, PORTFOLIO, SKILL } from './urls';

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>
    </div>
  );
};

const Skill = () => {
  return (
    <div>
      <h1>Skill</h1>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
    </div>
  );
};

const NavigationRoutes = ({ toggle }) => {
  const menuClosed = !toggle;
  return (
    <Routes>
      <Route
        strict
        exact
        path={LANDING_PAGE}
        element={menuClosed ? <OverviewPage /> : null}
      />
      <Route
        strict
        exact
        path={ABOUT}
        element={menuClosed ? <About /> : null}
      />
      <Route
        strict
        exact
        path={BLOG}
        element={menuClosed ? <ComingSoonPage /> : null}
      />
      <Route
        strict
        exact
        path={SKILL}
        element={menuClosed ? <Skill /> : null}
      />
      <Route
        strict
        exact
        path={CONTACT}
        element={menuClosed ? <Contact /> : null}
      />
      <Route
        strict
        exact
        path={PORTFOLIO}
        element={menuClosed ? <Portfolio /> : null}
      />
      <Route path="*" element={menuClosed ? <OverviewPage /> : null} />
    </Routes>
  );
};

export default NavigationRoutes;
