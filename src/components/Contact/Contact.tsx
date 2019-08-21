import React from 'react';

import styled from 'styled-components';

const ContactContainer = styled.section`
  width: 90%;
  margin: 0 auto;
  max-width: 50em;
  padding: 5em 0;

  h1 {
    text-align: center;
  }
`;

const Form = styled.form`
  display: grid;
  grid-column-gap: 1em;
  grid-template-areas:
    'name    email'
    'message message'
    '   .    button';

  .name {
    grid-area: name;
  }

  .email {
    grid-area: email;
  }

  .message {
    grid-area: message;
  }
`;

const Label = styled.label`
  display: block;
  margin-top: 1em;
  color: #606060;
`;

const Input = styled.input`
  box-sizing: border-box;
  display: block;
  padding: 0.75em;
  width: 100%;
  background: #e8e9eb;
  border: 1px solid #e8e9eb;
  font-size: 1.2rem;
`;

const TextArea = styled.input`
  box-sizing: border-box;
  display: block;
  padding: 0.75em;
  width: 100%;
  background: #e8e9eb;
  border: 1px solid #e8e9eb;
  font-size: 1.2rem;
  height: 10em;
`;

const Button = styled.button`
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  border: 2px solid var(--clr-accent);
  color: ${props => (props.color ? props.color : 'black')};
  background-image: var(--button-gradient);
  background-size: 200%;
  transition: background-position 1s;

  :hover,
  :focus {
    background-position: right;
  }

  grid-area: button;
  margin-top: 1em;
  margin-left: auto;
  color: #223843;
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <h1>Contact Me</h1>
      <Form name="contact" method="POST" action="/success">
        <Input type="hidden" name="form-name" value="rsvp" />
        <Input type="hidden" name="bot-field" />

        <Label className="name">
          Name:
          <Input type="text" id="name" name="name" required />
        </Label>

        <Label className="email">
          Email:
          <Input type="email" id="email" name="email" required />
        </Label>

        <Label className="message">
          Message:
          <TextArea name="message" id="message" required />
        </Label>

        <Button type="submit">Send</Button>
      </Form>
    </ContactContainer>
  );
};

export default Contact;
