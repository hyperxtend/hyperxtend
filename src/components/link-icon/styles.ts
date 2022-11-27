import styled from 'styled-components';

export const StyledLink = styled.a`
  color: #fff;
  padding-top: 25px;
  &:hover {
    height: 50px;
    width: 60px;
    color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: sticky;
    text-decoration: none;
    padding-bottom: 50px;
    transition: all 600ms cubic-bezier(0.99, 0, 0.57, 0.94);
    transform: rotate(360deg);
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
    background-color: #053eff;
  }
`;
