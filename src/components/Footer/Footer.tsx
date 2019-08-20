import React from 'react';

import './footer.css';

import facebookLogo from '../../img/facebook.png';
import instagramLogo from '../../img/instagram.png';
import linkedinLogo from '../../img/linkedin.png';
import twitterLogo from '../../img/twitter.png';
import youtubeLogo from '../../img/youtube.png';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100vw;
  background: #223843;
  padding: 3em 0 0.5em;
  text-align: center;
  color: rgba(white, 0.9);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContainer>
        <div className="social-icons">
          <a
            className="social-icon"
            href="https://www.facebook.com/jobfluid"
            target="_blank"
            rel="noopener noreferrer">
            <img src={facebookLogo} alt="Facebook logo" />
          </a>
          <a
            className="social-icon"
            href="https://instagram.com/jobfluid"
            target="_blank"
            rel="noopener noreferrer">
            <img src={instagramLogo} alt="Instagram logo" />
          </a>
          <a
            className="social-icon"
            href="https://twitter.com/jobfluid"
            target="_blank"
            rel="noopener noreferrer">
            <img src={twitterLogo} alt="Twitter logo" />
          </a>
        </div>
      </FooterContainer>

      <p className="copyright">&copy; Job Fluid - Official Website 2019</p>
    </FooterContainer>
  );
};

export default Footer;
