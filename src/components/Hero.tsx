import React from 'react';
import styled from 'styled-components';
import LogoImg from '../img/logo.png';

import { Button } from './styled-components/elements';
import Intro from './Intro/Intro';

const Presentation = styled.section`
  display: flex;
  width: 90%;
  margin: auto;
  min-height: 80vh;
  height: calc(100vh - 10vh);
  align-items: center;
  justify-content: center;

  @media (max-width: 50em) {
    flex-direction: column;
  }
`;

const Introduction = styled.div`
  flex: 1;

  @media (max-width: 50em) {
    flex: 0;
    margin-top: 5vh;
    text-align: center;
  }
`;

const IntroText = styled.div`
  font-size: 44px;
  font-weight: 500;
  background: linear-gradient(to right, #494964, #6f6f89);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  h1 {
    font-family: 'Red Hat Display';
  }

  p {
    margin-top: 5px;
    font-size: 22px;
    color: #585772;
  }

  @media (max-width: 50em) {
    h1 {
      font-size: 30px;
    }

    p {
      font-size: 18px;
    }
  }
`;

const CTA = styled.div`
  margin: 50px 0 0 0;

  .cta-select {
    background: transparent;
    color: black;
  }

  .cta-join {
    margin: 30px 0 0 30px;
  }

  @media (max-width: 50em) {
    padding: 10px 0 0 0;
    .cta-join {
      margin: 0 0 0 5px;
    }
    .cta-select {
      margin: 0 5px 0 0;
    }
  }
`;

const Cover = styled.div`
  flex: 1;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CoverImage = styled.img`
  margin: 30px;
  height: 100%;
  filter: drop-shadow(0px 0px 5px);
  animation: drop 1.5s ease;
  transition: all 750ms ease-in-out;

  :hover {
    filter: drop-shadow(0px 0px 10px);
    height: 102%;
  }

  @keyframes drop {
    0% {
      opacity: 0;
      transform: translateY(-20%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }

  @media (max-width: 50em) {
    height: 80%;

    :hover {
      filter: drop-shadow(0px 0px 8px);
      height: 82%;
    }
  }
`;

const Hero: React.FC = () => {
  return (
    <>
      <Presentation>
        <Introduction>
          <IntroText>
            <h1>Gain some job fluidity</h1>
            <p>The best tech online learning resources, hand-picked daily.</p>
          </IntroText>
          <CTA>
            <Button
              href="https://www.patreon.com/jobfluid"
              target="_blank"
              className="cta-select">
              Become a Patron
            </Button>
            <Button
              href="https://join.slack.com/t/jobfluid/shared_invite/enQtNzE2OTYwNDk2NjQ0LTUxMDRkNmE1M2RkODk3ZTUwNjk1OGEwN2Y2ZjQwYzdiZWRlYzViM2U4NDY2ZmY1NGE1YjUyNjY3OTZiNDQ3NDE"
              target="_blank"
              className="cta-join">
              Join Community
            </Button>
          </CTA>
        </Introduction>
        <Cover>
          <CoverImage src={LogoImg} alt="Job Fluid Logo" />
        </Cover>
      </Presentation>
      <Intro />
    </>
  );
};

export default Hero;
