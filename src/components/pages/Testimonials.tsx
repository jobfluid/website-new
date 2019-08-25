import React from 'react';
import Testimonial from '../styled-components/Testimonial';
import styled from 'styled-components';
import Avatar from '../../img/avatar.jpg';

export type TestimonialItem = {
  id: number;
  img: any;
  name: string;
  currentPosition: string;
  currentCompany: string;
  testimonial: string;
};

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    img: Avatar,
    name: 'Bhekani Khumalo',
    currentPosition: 'GIS Developer',
    currentCompany: 'ESRI South Africa',
    testimonial:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, tempore numquam earum asperiores ipsa quae ipsam? Sapiente incidunt sit sequi!'
  },
  {
    id: 2,
    img: '//unsplash.it/950',
    name: 'Kusasalethu Sithole',
    currentPosition: 'GIS Solutions Developer',
    currentCompany: 'RAMM Technologies',
    testimonial:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, tempore numquam earum asperiores ipsa quae ipsam? Sapiente incidunt sit sequi!'
  },
  {
    id: 3,
    img: '//unsplash.it/800',
    name: 'Sibusisiwe Pholi',
    currentPosition: 'Product Manager',
    currentCompany: 'Go2',
    testimonial:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, tempore numquam earum asperiores ipsa quae ipsam? Sapiente incidunt sit sequi!'
  }
];

const Page = styled.div`
  text-align: center;
`;

const PageTitle = styled.h2`
  margin-top: 40px;
  padding: 20px;
`;

const TestimonialsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  padding: 20px;
`;

const Testimonials = () => {
  return (
    <Page>
      <PageTitle>
        Job Fluid is unlocking many amazing opportunities for professionals from
        all fields. Here are just some of our success stories...
      </PageTitle>
      <TestimonialsContainer>
        {testimonials.map(item => {
          return <Testimonial key={item.id} testimonial={item} />;
        })}
      </TestimonialsContainer>
    </Page>
  );
};

export default Testimonials;
