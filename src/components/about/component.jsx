import React from 'react';
import { Button } from 'react-bootstrap';
import './component.css';
import AlexJoshua from '../../assets/picture-of-me.jpg';

const About = () => {
  return (
    <div className="container">
      <div className="details-container">
        <div className="avatar">
          <img src={AlexJoshua} className="img-fluid" alt="" />
        </div>
        <div className="about">
          <div className="name">
            <p>Hey there!</p>
            <h1>I'm Alex Joshua</h1>
          </div>
          <div className="about-content">
            <p>
              A tenacious, resilient individual with a drive for success. I'm
              not afraid of a challenge as my approach is simplistic & results
              driven. I've always been intrigued by the design & mechanics. I
              believe in adding value, simplicity & sustainability within
              projects & teams.
            </p>
            <Button variant="outline-dark">Download CV</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
