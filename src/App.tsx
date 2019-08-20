import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import { Route } from 'react-router-dom';
import Testimonials from './components/pages/Testimonials';
import styled from 'styled-components';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

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
      <Route path="/contact" component={Contact} />
      <Footer />
    </AppContainer>
  );
};

export default App;
