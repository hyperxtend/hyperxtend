import React from 'react';
import { Button } from 'react-bootstrap';
import './component.css';
import AlexJoshua from '../../assets/picture-of-me.jpg';
import styled from 'styled-components';

const StyledImage = styled.img`
  filter: grayscale(100%) brightness(65%);
  transition: transform 0.8s, filter 0.8s ease-in-out;
  transform-origin: center center;
  &:hover {
    filter: grayscale(0%) brightness(100%);
  }
`;

const IconsContainer = styled.div`
  position: absolute;
  fill: #fff;
  color: #fff;
  height: 130px;
  top: 70px;
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  i {
    margin-top: 10px;
  }
`;
const DetailsContainer = styled.div`
  border: 3px dotted grey;
  background: #fff;
  max-width: 920px;
  height: 480px;
  margin: auto;
  transform: translateY(15%);
  box-shadow: 0px 0px 6px 0px #222 73;
  width: 100%;
  height: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  button:nth-child(2) {
    margin-left: 10px;
  }
`;

const About = () => {
  return (
    <DetailsContainer className="container">
      <div className="details-container">
        <div>
          <StyledImage src={AlexJoshua} className="img-fluid" alt="" />
          <IconsContainer>
            <i class="fa fa-github fa-2x" aria-hidden="true"></i>
            <i class="fa fa-twitter fa-2x" aria-hidden="true"></i>
            <i class="fa fa-linkedin fa-2x" aria-hidden="true"></i>
            <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
            <i class="fa fa-tumblr fa-2x" aria-hidden="true"></i>
          </IconsContainer>
        </div>
        <div className="about">
          <div className="name">
            <p>Hey there!</p>
            <h1>I'm Alex Joshua</h1>
          </div>
          <div className="about-content">
            <p>
              A Software Developer & Designer with creative & tenacious drive
              for success.
              <br /> I'm not afraid of a challenge as my approach is simple &
              results driven.
              <br />
              I've always been intrigued by the design & mechanics especially
              when they add value, simplicity & sustainability within projects &
              teams.
            </p>
            <ButtonContainer>
              <Button variant="outline-dark">Download CV</Button>
              <Button variant="dark">More about me</Button>
            </ButtonContainer>
          </div>
        </div>
      </div>
    </DetailsContainer>
  );
};

export default About;
