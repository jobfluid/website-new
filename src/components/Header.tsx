import React from 'react';
import styled from 'styled-components'
import LogoImg from '../img/logo.png'

import { Button } from './styled-components/elements'

const HeaderComp = styled.header`
    display: flex;
    width: 90%;
    height: 10vh;
    margin: auto;
    align-items: center;
`

const Nav = styled.nav`
    flex: 2;
`

const Join = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
`

const LogoText = styled.h4`
    font-weight: 400;
    margin: 5px;
`

const LogoContainer = styled.div`
    display: flex;
    flex: 1;
`

const NavLinks = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style: none;
`

const NavLink = styled.li`
    a {
        color: #5f5f79;
        font-size: 18px;
        text-decoration: none;
    }
`

const Logo = styled.img`
    height: 35px;
`

const Header: React.FC = () => {
  return (
    <HeaderComp>
        <LogoContainer>
            <Logo src={LogoImg} alt="logo" />
            <LogoText>Job Fluid</LogoText>
        </LogoContainer>
        <Nav>
            <NavLinks>
                <NavLink><a href="#">Home</a></NavLink>
                <NavLink><a href="#">About</a></NavLink>
                <NavLink><a href="#">Contact</a></NavLink>
            </NavLinks>
        </Nav>
        <Join>
            <Button
                href="https://join.slack.com/t/jobfluid/shared_invite/enQtNzE2OTYwNDk2NjQ0LTUxMDRkNmE1M2RkODk3ZTUwNjk1OGEwN2Y2ZjQwYzdiZWRlYzViM2U4NDY2ZmY1NGE1YjUyNjY3OTZiNDQ3NDE"
                target="_blank"
            >Join</Button>
        </Join>
    </HeaderComp>
  );
}

export default Header;
