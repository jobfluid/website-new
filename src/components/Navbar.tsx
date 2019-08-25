import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoPNG from '../img/logo.png';

const Header = styled.header`
  background: var(--background);
  text-align: center;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 999;
  padding: 20px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr auto minmax(800px, 3fr) 1fr;
  }
`;

const Logo = styled.h1`
  @media screen and (min-width: 800px) {
    grid-column: 2 / 3;
  }
`;

const Nav = styled.nav`
  position: absolute;
  text-align: right;
  top: 100%;
  right: 0;
  background: var(--background);
  width: 100%;
  transform: scale(1, 0);
  transform-origin: top;
  transition: transform 400ms ease-in-out;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);

  @media screen and (min-width: 800px) {
    all: unset;
    grid-column: 3 / 4;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

const NavItems = styled.ul`
  list-style: none;

  @media screen and (min-width: 800px) {
    display: flex;
    justify-content: flex-end;
  }
`;

const NavItem = styled.li`
  margin-bottom: 1em;
  margin-right: 1em;

  a {
    color: var(--clr-accent);
    text-decoration: none;
    font-size: 1.2rem;
    text-transform: uppercase;
    opacity: 0;
    transition: opacity 150ms ease-in-out;

    :hover,
    :focus {
      color: #000;
    }

    @media screen and (min-width: 800px) {
      opacity: 1;
      position: relative;

      ::before {
        content: '';
        display: block;
        height: 5px;
        background: black;
        position: absolute;
        top: -0.75em;
        left: 0;
        right: 0;
        transform: scale(0, 1);
        transition: transform ease-in-out 250ms;
      }

      :hover::before,
      :focus::before {
        transform: scale(1, 1);
      }
    }
  }

  @media screen and (min-width: 800px) {
    margin-left: 3em;
    margin-bottom: 0;
  }
`;

const NavLink = styled.a`
  color: var(--clr-accent);
  text-decoration: none;
  font-size: 1.2rem;
  text-transform: uppercase;
  opacity: 0;
  transition: opacity 150ms ease-in-out;

  :hover,
  :focus {
    color: #000;
  }

  @media screen and (min-width: 800px) {
    opacity: 1;
    position: relative;

    ::before {
      content: '';
      display: block;
      height: 5px;
      background: black;
      position: absolute;
      top: -0.75em;
      left: 0;
      right: 0;
      transform: scale(0, 1);
      transition: transform ease-in-out 250ms;
    }

    :hover::before,
    :focus::before {
      transform: scale(1, 1);
    }
  }
`;

const NavToggle = styled.input`
  display: none;

  :checked ~ nav {
    transform: scale(1, 1);
  }

  :checked ~ nav a {
    opacity: 1;
    transition: opacity 250ms ease-in-out 250ms;
  }

  :checked ~ label > div > div {
    transform: rotate(45deg);

    ::before {
      opacity: 0;
    }

    ::after {
      transform: translateY(-3px) rotate(-90deg);
    }
  }
`;

const NavToggleLabel = styled.label`
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 1em;
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (min-width: 800px) {
    display: none;
  }
`;

const MenuToggle = styled.div`
  padding: 1em;
  cursor: pointer;
`;

const HamBurger = styled.div`
  background: var(--clr-accent);
  height: 3px;
  width: 1.75em;
  border-radius: 3px;
  transition: all ease-in-out 500ms;

  ::before,
  ::after {
    content: '';
    display: block;
    background: var(--clr-accent);
    height: 3px;
    width: 1.75em;
    border-radius: 3px;
    transition: all ease-in-out 500ms;
  }

  ::before {
    transform: translateY(-7px);
  }

  ::after {
    transform: translateY(4px);
  }
`;

const LogoText = styled.h4`
  font-weight: 200;
  font-size: 3rem;
  margin: 5px;

  @media (max-width: 50em) {
    font-size: 1.5rem;
  }
`;

const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  align-items: center;

  @media (max-width: 50em) {
    flex: 4;
    width: 100%;
  }

  @media screen and (min-width: 800px) {
    grid-column: 2 / 3;
  }
`;

const LogoImg = styled.img`
  height: 50px;
  margin: 0 10px;
`;

const handleClick = () => {
  const navToggle = document.querySelector('#nav-toggle');

  if (navToggle) {
    // @ts-ignore
    navToggle.checked = false;
  }
};

const Navbar = () => {
  return (
    <Header>
      {/* <Logo className="logo">Logo</Logo> */}
      {/* <LogoText>Job Fluid</LogoText> */}
      <LogoContainer>
        <LogoImg src={LogoPNG} alt="logo" />
        <LogoText>Job Fluid</LogoText>
      </LogoContainer>

      <NavToggle type="checkbox" id="nav-toggle" />

      <Nav>
        <NavItems>
          <NavItem onClick={handleClick}>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem onClick={handleClick}>
            <Link to="/testimonials">Testimonials</Link>
          </NavItem>
          <NavItem onClick={handleClick}>
            <Link to="/contact">Contact</Link>
          </NavItem>
          <NavItem onClick={handleClick}>
            <NavLink
              href="https://join.slack.com/t/jobfluid/shared_invite/enQtNzE2OTYwNDk2NjQ0LTUxMDRkNmE1M2RkODk3ZTUwNjk1OGEwN2Y2ZjQwYzdiZWRlYzViM2U4NDY2ZmY1NGE1YjUyNjY3OTZiNDQ3NDE"
              target="_blank">
              Join
            </NavLink>
          </NavItem>
        </NavItems>
      </Nav>

      <NavToggleLabel htmlFor="nav-toggle">
        <MenuToggle>
          <HamBurger />
        </MenuToggle>
      </NavToggleLabel>
    </Header>
  );
};

export default Navbar;
