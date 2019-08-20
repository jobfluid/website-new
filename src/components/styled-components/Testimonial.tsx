import React from 'react';
import styled from 'styled-components';
import { TestimonialItem } from '../pages/Testimonials';

const Card = styled.div`
  padding: 50px;
  background: #eee;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  transition: all ease-in-out 250ms;

  &:hover,
  &:focus {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  }
`;

const TestimonialImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: top;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const Testimony = styled.p`
  position: relative;
  z-index: 2;

  &::before {
    content: '"';
    font-size: 110px;
    color: #ff7f4f;
    position: absolute;
    top: -30px;
    left: -20px;
    font-family: 'Passion One';
    z-index: -1;
    opacity: 0.5;
  }
`;

interface TestimonialProps {
  testimonial: TestimonialItem;
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <Card>
      <TestimonialImage src={testimonial.img} />
      <h3>{testimonial.name}</h3>
      <h4>
        {testimonial.currentPosition}, {testimonial.currentCompany}
      </h4>
      <br />
      <Testimony>{testimonial.testimonial}</Testimony>
    </Card>
  );
};

export default Testimonial;
