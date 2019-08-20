import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import { Route } from 'react-router-dom';
import Testimonials from './components/pages/Testimonials';
import styled from 'styled-components';
import Intro from './components/Intro/Intro';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Header />
      <Route exact path="/" component={Hero} />
      <Route path="/testimonials" component={Testimonials} />
      <Intro />
    </AppContainer>
  );
};

export default App;
