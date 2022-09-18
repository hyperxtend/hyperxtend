import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OverviewPage from '../pages/overview-page';
import ComingSoonPage from '../pages/coming-soon-page';
import AboutPage from '../pages/about-page';
import { ABOUT, BLOG, WORK, LANDING_PAGE, PORTFOLIO } from './urls';
import WorkPage from '../pages/work-page';

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>
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
        element={menuClosed ? <AboutPage /> : null}
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
        path={WORK}
        element={menuClosed ? <WorkPage /> : null}
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
