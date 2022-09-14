import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OverviewPage from '../pages/overview-page';
import {
  ABOUT,
  BASE_URL,
  BLOG,
  CONTACT,
  LANDING_PAGE,
  PORTFOLIO,
} from './urls';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

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
        exact
        path={LANDING_PAGE}
        element={menuClosed ? <OverviewPage /> : null}
      />
      <Route path={ABOUT} element={menuClosed ? <About /> : null} />
      <Route path={BLOG} element={menuClosed ? <Blog /> : null} />
      <Route path={CONTACT} element={menuClosed ? <Contact /> : null} />
      <Route path={PORTFOLIO} element={menuClosed ? <Contact /> : null} />
    </Routes>
  );
};

export default NavigationRoutes;
