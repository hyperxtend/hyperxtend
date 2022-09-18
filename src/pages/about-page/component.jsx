import React from 'react';
import ImageOfMe from '../../assets/picture-of-me.jpg';
import PageHeader from '../../components/page-header';
import FadeInSection from '../../components/fade-in-section';
import { aboutAlex } from '../../global';
import './component.css';

const AboutPage = () => {
  return (
    <div>
      <div className="wrap">
        <PageHeader title="About Me" description="" />
        <div className="about-page">
          <div className="about-intro">
            <div className="intro-details">
              <div className="intro-image">
                <div className="image">
                  <img
                    className="image-circle"
                    src={ImageOfMe}
                    alt="ImageOfMe"
                  />
                </div>
              </div>
              <div className="intro-paragraph padding">
                <p>
                  Hey I'm Alex - I can kill spiders if you need me to, but I
                  prefer to relocate them outside in order to preserve a proper
                  spider-human coexistence. I'm also Software Engineer who likes
                  to work out of the ordinary - a bit of a basket case but eh it
                  works for me
                </p>
              </div>
            </div>
          </div>
          <div className="about-info">
            <div className="profile padding">
              <span className="profile-header">
                <h2>Profile</h2>
                <p>Here's things no one asked for but would be nice to know</p>
              </span>

              {aboutAlex.map((element) => {
                return (
                  <FadeInSection className="fade-in-container">
                    <h3>{element.question}</h3>
                    <p>{element.answer}</p>
                  </FadeInSection>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
