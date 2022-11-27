import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const StyledImage = styled.img`
  filter: grayscale(100%) brightness(65%);
  transition: transform 0.8s, filter 0.8s ease-in-out;
  transition-delay: 3s;
  transform-origin: center center;
  &:hover {
    filter: grayscale(0%) brightness(100%);
    transition: 1s ease-in-out;
  }

  @media only screen and (max-width: 766px) {
    margin-top: 0.5rem
    width: 80%;
  }
`;
export const IconsContainer = styled.div`
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

export const DetailsContainer = styled.div`
  color: #000;
  background: #fff;
  text-align: left;
  max-width: 920px;
  margin: auto;
  width: 100%;
  height: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  a {
    color: #000;
    text-decoration: none;
  }

  button:nth-child(2) {
    margin-left: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: 6rem;
    justify-content: space-around;
    button:nth-child(2) {
      margin-left: 0px;
    }
  }
`;

export const StyledButton = styled(Button)`
  &:hover {
    transform: translateY(-3px);
  }
`;
export const SVGContainer = styled.div`
  width: 136px;
  height: 90px;
  transform: scale(-1, 1);
  margin-left: 30px;
`;

export const GetInTouchContainer = styled.div`
  display: flex;
  padding-top: 5px;
`;

export const GetInTouchText = styled.h5`
  display: flex;
  position: relative;
  right: 80px;
  align-items: center;
  height: 50%;
  font-weight: 400;
`;
