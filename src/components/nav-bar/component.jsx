import React from 'react';
import styled from 'styled-components';
import AlexLogo from '../../assets/hyperxtend-header.png';
import { NavLink } from 'react-router-dom';
import { PORTFOLIO, ABOUT, WORK, BLOG, LANDING_PAGE } from '../../routes/urls';
const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: rgba(27, 28, 28, 0.95);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.span`
  display: inline-block;
  position: relative;
  margin: 1rem 2rem;
  font-size: 20px;
  color: #696f7a;
  transition: color 0.8s cubic-bezier(0.83, 0.01, 0.29, 1);
  animation: float infinite ease-in;

  &:hover {
    color: #fff;
    transform: translateY(-3px);
  }

  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 5px;
    left: 0;
    bottom: 0;

    transform: scale(0);
    transform-origin: right;
    transition: transform 1s cubic-bezier(0.83, 0.01, 0.29, 1);
    background: linear-gradient(
      90deg,
      #ff6663,
      #feb144,
      #fdfd97,
      #9ee093,
      #9ec1cf,
      #cc99c9
    );
  }

  .active {
    text-align: center;
    border-bottom: 2px solid transparent;
    border-image: linear-gradient(
      90deg,
      #ff6663,
      #feb144,
      #fdfd97,
      #9ee093,
      #9ec1cf,
      #cc99c9
    );
    border-image-slice: 1;
    width: 100%;
  }

  &:hover:after {
    transform: scale(1);
    transform-origin: left;
    transition: transform 0.6s cubic-bezier(0.83, 0.01, 0.29, 1);
  }
`;

const Link = styled(NavLink)`
  color: white;
  text-decoration: none;
  :hover {
    color: #fff;
    text-decoration: none;
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${({ open }) => (open ? '40%' : '70%')};
  }
`;

const Overlay = styled.div`
  position: ${({ open }) => (open ? 'fixed' : 'absolute')};
  height: ${({ open }) => (open ? '100vh' : 0)};
  width: 100%;
  background: rgb(28, 28, 28, 0.9);
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  display: ${({ open }) => (open ? 'block' : 'none')};
  list-style: none;
  position: absolute;
  position: ${({ open }) => (open ? 'absolute' : 'fixed')};
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  overflow-x: visible;
  li {
    opacity: ${({ open }) => (open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

const StyledImageLogo = styled.img`
  width: 20%;
  height: 30%
  padding: 1rem;
  @media (max-width: 1250px) {
    width: 30%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const NavContainer = styled.div`
  width: 100%;
  height: 100px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;

const NavMenuItems = ({ closeNav }) => (
  <>
    <Item>
      <Link onClick={closeNav} to={LANDING_PAGE}>
        Overview
      </Link>
    </Item>
    <Item>
      <Link onClick={closeNav} to={ABOUT}>
        About
      </Link>
    </Item>
    <Item>
      <Link onClick={closeNav} to={PORTFOLIO}>
        Portfolio
      </Link>
    </Item>
    <Item>
      <Link onClick={closeNav} to={WORK}>
        Work
      </Link>
    </Item>
    <Item>
      <Link onClick={closeNav} to={BLOG}>
        Blog
      </Link>
    </Item>
  </>
);

const Header = ({ toggle, toggleNav }) => {
  return (
    <NavContainer>
      <Nav>
        <Link to={LANDING_PAGE}>
          <StyledImageLogo src={AlexLogo} alt="hyperxtend-logo" />
        </Link>
        <Menu>
          <NavMenuItems />
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <NavMenuItems closeNav={() => toggleNav(!toggle)} />
        </OverlayMenu>
      </Overlay>
    </NavContainer>
  );
};

export default Header;
