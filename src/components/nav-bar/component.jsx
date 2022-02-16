import React from 'react';
import styled from 'styled-components';
import HyperxtendLogo from '../../assets/hyperxtend.png';

const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: rgba(27, 28, 28, 0.95);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`;

const Logo = styled.h1`
  font-size: 25px;
  color: white;
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
  font-size: 25px;
  color: #696f7a;
  transition: color 0.8s cubic-bezier(0.83, 0.01, 0.29, 1);

  animation: float infinite ease-in;

  @keyframe float {
    to {
      transform: translateY(10px);
    }
    from {
      transform: translateY(-10px);
    }
  }

  &:hover {
    color: #fff;
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
    background: linear-gradient(90deg, #ff3333, #2200b9);
  }

  &:hover:after {
    transform: scale(1);
    transform-origin: left;
    transition: transform 0.6s cubic-bezier(0.83, 0.01, 0.29, 1);
  }
`;

const Link = styled.a`
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
  position: ${({ open }) => (open ? 'inherit' : 'absolute')};
  height: ${({ open }) => (open ? '91vh' : 0)};
  width: 100%;
  background: rgba(38, 38, 38, 0.89);
  opacity: 0.8;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  display: ${({ open }) => (open ? 'block' : 'none')};
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  overflow-x: none;
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
  width: 65%;
  height: 35%;
  margin: 0.5rem;
  padding: 1rem;
`;

const NavContainer = styled.div`
  border: solid 2px red;
  width: 100%;
  height: 50px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;

const Header = ({ toggle, toggleNav }) => {
  return (
    <NavContainer>
      <Nav>
        <Logo>
          <StyledImageLogo src={HyperxtendLogo} alt="hyperxtend-logo" />
        </Logo>
        <Menu>
          <Item>
            <Link>Home</Link>
          </Item>
          <Item>
            <Link>About</Link>
          </Item>
          <Item>
            <Link>Portfolio</Link>
          </Item>
          <Item>
            <Link>Contact</Link>
          </Item>
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
            <Link>Home</Link>
          </Item>
          <Item>
            <Link>About</Link>
          </Item>
          <Item>
            <Link>Portfolio</Link>
          </Item>
          <Item>
            <Link>Contact</Link>
          </Item>
        </OverlayMenu>
      </Overlay>
    </NavContainer>
  );
};

export default Header;
