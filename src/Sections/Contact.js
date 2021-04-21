import React from "react";
import styled from "styled-components";

const FormSection = styled.section`
  background: #b3efb2;
  padding: 1rem 1.5rem 0 1.5rem;
  min-height: 80vh;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
const Title = styled.h2`
  font-size: 3rem;
  font-weight: 200;
  margin: 10px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 1.5rem 10rem;
  width: 80%;

  @media screen and (max-width: 900px) {
    padding: 3rem 0;
    width: 95%;
  }
`;
const Input = styled.input`
  padding: 0.75rem;
  border: 0;
  text-align: left;
  width: 100%;
  margin: 10px;
`;
const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 0;
  width: 100%;
  text-align: left;
  margin: 10px;
`;
const Button = styled.input`
  padding: 0.7rem 5rem;
  color: white;
  margin: 10px 0 0 0;
  border: 0;
  text-decoration: none;
  background: #31493c;
  transition: all 250ms ease;
  &:hover {
    padding: 0.7rem 8rem;
  }
`;
const Label = styled.label`
  font-size: 1.2rem;
  align-self: left;
`;

const Contact = () => {
  return (
    <FormSection id="contact">
      <Title>Get In Touch?</Title>

      <Form method="post" name="contact">
        <input type="hidden" name="form-name" value="contact" />
        <Label htmlFor="name">Name:</Label>
        <Input type="text" name="name" id="name" required />
        <Label htmlFor="email">Email:</Label>
        <Input type="email" name="email" id="email" required />
        <Label htmlFor="message">Message:</Label>
        <TextArea name="message" id="message" cols="30" rows="10"></TextArea>
        <Button type="submit" value="Send" />
      </Form>
    </FormSection>
  );
};

export default Contact;
