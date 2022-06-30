import React from 'react';
import { Button } from 'react-bootstrap';
import './component.css';
import AlexJoshua from '../../assets/picture-of-me.jpg';
import CVofAlexJ from '../../external-file/cv-of-alex-j.docx';
import styled from 'styled-components';
import {
  GITHUB_PROFILE,
  LINKEDIN_PROFILE,
  TWITTER_PROFILE,
  TUMBLR_PROFILE,
  INSTAGRAM_PROFILE,
} from '../../global';

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
  top: 150px;
  left: 10px;
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledLink = styled.a`
  color: #fff;
  padding-top: 25px;
  &:hover {
    height: 60px;
    width: 60px;
    color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: sticky;
    text-decoration: none;
    padding-bottom: 50px;
  }
  &:hover:nth-child(1) {
    background-color: #000;
  }
  &:hover:nth-child(2) {
    background-color: #1da1f2;
  }
  &:hover:nth-child(3) {
    background-color: #0a66c2;
  }
  &:hover:nth-child(4) {
    background-color: #c32aa3;
  }
  &:hover:nth-child(5) {
    background-color: #35465d;
  }
`;
const DetailsContainer = styled.div`
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
          <StyledImage
            src={AlexJoshua}
            className="img-fluid"
            alt="image-of-me"
          />
          <IconsContainer>
            <StyledLink
              href={GITHUB_PROFILE}
              id="github-icon"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-github fa-2x" aria-hidden="true"></i>
            </StyledLink>
            <StyledLink
              href={TWITTER_PROFILE}
              id="twitter-icon"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
            </StyledLink>
            <StyledLink
              href={LINKEDIN_PROFILE}
              id="linkedin-icon"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
            </StyledLink>
            <StyledLink
              href={INSTAGRAM_PROFILE}
              id="insta-icon"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
            </StyledLink>
            <StyledLink
              href={TUMBLR_PROFILE}
              id="tumblr-icon"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-tumblr fa-2x" aria-hidden="true"></i>
            </StyledLink>
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
              <a href={CVofAlexJ} download>
                <Button variant="outline-dark">Download CV</Button>
              </a>
              <Button variant="dark">More about me</Button>
            </ButtonContainer>
          </div>
        </div>
      </div>
    </DetailsContainer>
  );
};

export default About;
