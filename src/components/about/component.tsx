import { useNavigate } from 'react-router-dom';

import {
  GITHUB_PROFILE,
  LINKEDIN_PROFILE,
  TWITTER_PROFILE,
  BEHANCE_PROFILE,
  INSTAGRAM_PROFILE,
} from '../../global';
import { ABOUT } from '../../routes/urls';

import {
  StyledImage,
  IconsContainer,
  DetailsContainer,
  ButtonContainer,
  StyledButton,
  SVGContainer,
  GetInTouchContainer,
  GetInTouchText,
} from './styles';

import './component.css';
import LinkIcon from '../link-icon';

const AlexJoshua = require('../../assets/picture-of-me.jpg');
const CVofAlexJ = require('../../external-file/cv-of-alex-j-2022.docx');

const About = () => {
  const navigate = useNavigate();
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
            <LinkIcon
              href={GITHUB_PROFILE}
              id="github-icon"
              iconClass="fa fa-github fa-2x"
            />
            <LinkIcon
              href={TWITTER_PROFILE}
              id="twitter-icon"
              iconClass="fa fa-twitter fa-2x"
            />
            <LinkIcon
              href={LINKEDIN_PROFILE}
              id="linkedin-icon"
              iconClass="fa fa-linkedin fa-2x"
            />

            <LinkIcon
              href={INSTAGRAM_PROFILE}
              id="insta-icon"
              iconClass="fa fa-instagram fa-2x"
            />
            <LinkIcon
              href={BEHANCE_PROFILE}
              id="behance-icon"
              iconClass="fa fa-behance fa-2x"
            />
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
            <p>An experienced Software Developer & Designer</p>
            <p>
              I consider myself an tenacious & innovative individual with
              proficient problem-solving skills.
              <br />
              Bringing value, creativity & quality to my projects - I love
              sustainability
            </p>
            <p>
              I'm not afraid of a challenge - my approach is fun, simple &
              results driven
            </p>
            <ButtonContainer className="about-me-button-container">
              <StyledButton variant="outline-dark">
                <a href={CVofAlexJ} download>
                  Download CV
                </a>
              </StyledButton>
              <StyledButton
                onClick={() => navigate(`/${ABOUT}`)}
                variant="dark"
              >
                More about me
              </StyledButton>
            </ButtonContainer>
          </div>
        </div>
      </div>
    </DetailsContainer>
  );
};

export default About;
