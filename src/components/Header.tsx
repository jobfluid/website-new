import React from 'react';
import styled from 'styled-components';
import LogoImg from '../img/logo.png';

import { Button } from './styled-components/elements';
import { Link } from 'react-router-dom';

const HeaderComp = styled.header`
  display: flex;
  width: 100%;
  height: 10vh;
  margin: auto;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  background: #eee;
  padding-left: 40px;
  padding-right: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const Nav = styled.nav`
  flex: 2;
`;

const Join = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const LogoText = styled.h4`
  font-weight: 200;
  font-size: 3rem;
  margin: 5px;
`;

const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  align-items: center;
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

const NavLink = styled.li`
  a {
    color: #5f5f79;
    font-size: 18px;
    font-weight: 700;
    text-decoration: none;
  }
`;

const Logo = styled.img`
  height: 50%;
  margin: 0 10px;
`;

const Header: React.FC = () => {
  return (
    <HeaderComp>
      <LogoContainer>
        <Logo src={LogoImg} alt="logo" />
        <LogoText>Job Fluid</LogoText>
      </LogoContainer>
      <Nav>
        <NavLinks>
          <NavLink>
            <Link to="/">Home</Link>
          </NavLink>
          <NavLink>
            <Link to="/testimonials">Testimonials</Link>
          </NavLink>
          <NavLink>
            <Link to="/contact">Contact</Link>
          </NavLink>
        </NavLinks>
      </Nav>
      <Join>
        <Button
          style={{ border: 'none' }}
          href="https://join.slack.com/t/jobfluid/shared_invite/enQtNzE2OTYwNDk2NjQ0LTUxMDRkNmE1M2RkODk3ZTUwNjk1OGEwN2Y2ZjQwYzdiZWRlYzViM2U4NDY2ZmY1NGE1YjUyNjY3OTZiNDQ3NDE"
          target="_blank">
          Join
        </Button>
      </Join>
    </HeaderComp>
  );
};

export default Header;
