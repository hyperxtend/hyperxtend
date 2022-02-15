import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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

const SiteRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default SiteRoutes;
