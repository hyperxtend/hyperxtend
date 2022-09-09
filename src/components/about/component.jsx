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
  transition-delay: 3s;
  transform-origin: center center;
  &:hover {
    filter: grayscale(0%) brightness(100%);
    transition: 1s ease-in-out;
  }

  @media only screen and (max-width: 766px) {
    marign-top: 0.5rem
    width: 80%;
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

  @media only screen and (max-width: 766px) {
    top: 650px;
  }
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
  margin: auto;
  transform: translateY(15%);
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

const StyledButton = styled(Button)`
  &:hover {
    transform: translateY(-3px);
  }
`;
const SVGContainer = styled.div`
  width: 136px;
  height: 90px;
  transform: scale(-1, 1);
  margin-left: 30px;
`;

const GetInTouchContainer = styled.div`
  display: flex;
  padding-top: 5px;
`;

const GetInTouchText = styled.h5`
  display: flex;
  position: relative;
  right: 80px;
  align-items: center;
  height: 50%;
  font-weight: 400;
`;

const About = () => {
  return (
    <DetailsContainer className="container">
      <div className="details-container">
        <div className="about-me">
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
          <GetInTouchContainer className="get-in-touch-container">
            <SVGContainer>
              <svg width="136" height="90" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.791 49.777c-.154 4.195-.626 7.827.954 11.852C7.36 73.39 17.485 82.682 29.442 85.955c6.397 1.75 13.576 2.803 20.193 1.89C62.927 86.012 76.9 76.609 87.222 68.784c20.494-15.536 36.094-38.7 35.837-65.222-.256 2.407 2.277 5.37 3.358 7.347 3.17 5.796 5.405 12.093 8.129 18.101.294-2.43-1.167-8.517-1.441-9.82a58.697 58.697 0 0 0-4.824-15.298 6.762 6.762 0 0 1-1.419-2.863c-3.007-.098-5.698.975-8.074 3.217-7.107 4.072-13.72 9.399-19.817 14.854"
                  stroke="#000"
                  stroke-width="2"
                  fill="none"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </SVGContainer>
            <GetInTouchText>get in touch with me</GetInTouchText>
          </GetInTouchContainer>
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
              when they add value, simplicity & sustainability within a project
              & team.
            </p>
            <ButtonContainer className="about-me-button-container">
              <a href={CVofAlexJ} download>
                <StyledButton variant="outline-dark">Download CV</StyledButton>
              </a>
              <StyledButton variant="dark">More about me</StyledButton>
            </ButtonContainer>
          </div>
        </div>
      </div>
    </DetailsContainer>
  );
};

export default About;
