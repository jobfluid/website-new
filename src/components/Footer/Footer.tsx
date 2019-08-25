import React from 'react';

import twitterLogo from '../../img/twitter.png';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100vw;
  background: #223843;
  padding: 3em 0 0.5em;
  text-align: center;
  color: rgba(white, 0.9);
`;

const SocialIcons = styled.div`
  width: 90%;
  max-width: 15em;
  display: flex;
  justify-content: center;
  margin: 1em auto;
`;

const SocialIcon = styled.a`
  margin: 0 0.2em;
  width: 25%;
  height: 25%;

  img {
    filter: invert(30%);
    transition: filter ease-in-out 100ms;
  }

  img:hover {
    filter: invert(0);
  }
`;

const Copyright = styled.p`
  color: #e8e9eb;
  font-size: 0.8em;

  &::before {
    content: '';
    display: block;
    height: 1px;
    background: rgba(232, 233, 235, 0.7);
    margin: 2em auto 1em;
    width: 15%;
  }

  @media (max-width: 50em) {
    margin-bottom: 2.5em;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContainer>
        <SocialIcons>
          {/* <SocialIcon
            href="https://www.facebook.com/jobfluid"
            target="_blank"
            rel="noopener noreferrer">
            <img src={facebookLogo} alt="Facebook logo" />
          </SocialIcon>
          <SocialIcon
            href="https://instagram.com/jobfluid"
            target="_blank"
            rel="noopener noreferrer">
            <img src={instagramLogo} alt="Instagram logo" />
          </SocialIcon> */}
          <SocialIcon
            href="https://twitter.com/jobfluid"
            target="_blank"
            rel="noopener noreferrer">
            <img src={twitterLogo} alt="Twitter logo" />
          </SocialIcon>
        </SocialIcons>
      </FooterContainer>

      <Copyright>&copy; Job Fluid - Official Website 2019</Copyright>
    </FooterContainer>
  );
};

export default Footer;
