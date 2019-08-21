import React from 'react';
import introLeft from '../../img/intro-left.jpg';
import introRight from '../../img/intro-right.jpg';
import facebookLogo from '../../img/facebook.png';
import instagramLogo from '../../img/instagram.png';
import twitterLogo from '../../img/twitter.png';
import styled from 'styled-components';

const IntroContainer = styled.section`
  color: rgba(255, 255, 255, 0.7);
  color: #222;
  display: flex;

  h2 {
    color: #222;
    /* text-transform: capitalize; */
  }

  h2::after {
    content: '';
    width: 20%;
    height: 1px;
    background: #222;
    display: block;
    margin: 1em auto 1em auto;
  }

  @supports (display: grid) {
    display: grid;
    grid-template-columns: minmax(2em, 1fr) minmax(auto, 2fr) minmax(2em, 1fr);
  }

  @media (max-width: 50em) {
    grid-template-columns: 0 minmax(auto, 2fr) 0;
  }
`;

const IntroSide = styled.div`
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    display: block;
    filter: brightness(50%);
    /* filter: blur(0.3em); */
  }
`;

const IntroMiddle = styled.div`
  background: #223843;
  background: rgba(255, 255, 255, 0.7);
  padding: 2.5em 5vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IntroDescription = styled.div`
  &::after {
    content: '';
    width: 20%;
    height: 1px;
    background: #222;
    display: block;
    margin: 2em auto 1em auto;
  }
`;

const IntroSocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em auto;
`;

const IntroSocialIcon = styled.a`
  margin: 0 0.3em;

  img {
    filter: invert(60%);
    transition: filter ease-in-out 100ms;
  }

  img:hover,
  img:focus {
    filter: invert(100%);
  }

  @media (max-width: 50em) {
    img {
      width: 70%;
    }
  }
`;

const Intro = () => {
  return (
    <IntroContainer>
      <IntroSide>
        <img src={introLeft} alt="" />
      </IntroSide>
      <IntroMiddle>
        <h2>Hi, I’m BK, founder of Job Fluid.</h2>
        <IntroDescription>
          <p>
            Dropping your commute, spending more time with your family,
            relocating… What’s not to love?
          </p>
          <br />
          <p>
            But how do you get there? How do you land such a job? How can you
            gain tech skills? One way is by using online content, and Job Fluid
            is devoted to helping you through the process of self-education
            through our curated references of online content.
          </p>
          <br />
          <p>
            But there’s another important, sometimes unappreciated component:
            shortening the path to gaining the skills you want by connecting to
            other like-minded people.
          </p>
          <br />
          <p>
            You must learn from those who have already achieved the goals you’re
            setting for yourself. If you don’t, you’ll probably be wasting a lot
            of time and effort.
          </p>
          <br />
          <p>
            We’ve made that journey easier for you with the Job Fluid Slack
            Community.
          </p>
        </IntroDescription>
        <div>
          <IntroSocialIcons>
            {/* <IntroSocialIcon
              href="https://www.facebook.com/jobfluid/"
              target="_blank"
              rel="noopener noreferrer">
              <img src={facebookLogo} alt="Facebook link" />
            </IntroSocialIcon>
            <IntroSocialIcon
              href="https://www.instagram.com/jobfluid/"
              target="_blank"
              rel="noopener noreferrer">
              <img src={instagramLogo} alt="Instagram link" />
            </IntroSocialIcon> */}
            <IntroSocialIcon
              href="https://twitter.com/jobfluid"
              target="_blank"
              rel="noopener noreferrer">
              <img src={twitterLogo} alt="Twitter link" />
            </IntroSocialIcon>
          </IntroSocialIcons>
        </div>
      </IntroMiddle>
      <IntroSide>
        <img src={introRight} alt="" />
      </IntroSide>
    </IntroContainer>
  );
};

export default Intro;
