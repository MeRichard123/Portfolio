import styled from '@emotion/styled';

const FormSection = styled.section`
  background: #E0E0E0;
  padding: 1rem 1.5rem 0 1.5rem;
  min-height: 80vh;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-align: center;
  position: relative;
  margin-top: 50px;

  @media screen and (min-width: 900px){
    margin-top: 10px;
  }
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
  font-family: 'Lora', serif;
  padding: 0.75rem;
  border: 0;
  text-align: left;
  width: 100%;
  margin: 10px 0 20px 0;
  `;
const TextArea = styled.textarea`
  font-family: 'Lora', serif;
  padding: 0.75rem;
  border: 0;
  width: 100%;
  text-align: left;
  margin: 10px;
`;
const Button = styled.input`
    padding: 10px 80px;
    border: black 2px solid;
    font-family: 'Lora', serif;
    background: white;
    margin: 15px;
    font-size: clamp(0.7rem, 2vw, 1rem);

    &:hover{
      transform: scale(1.01) translateY(-4px);
    }
`;
const Label = styled.label`
  font-size: 1.2rem;
  align-self: self-start;
`;

const Description = styled.p`
    font-size: 1.2rem;
`;

function Contact() {
  return (
    <FormSection id="contact">
      <Title>Get In Touch?</Title>
      <Description>Have an Idea? Let&apos;s make it happen</Description>
      <Form method="post" name="contact" action="https://formspree.io/f/mzbwnelw">
        <input type="hidden" name="form-name" value="contact" />
        <Label htmlFor="name">Name:</Label>
        <Input type="text" name="name" id="name" required />
        <Label htmlFor="email">Email:</Label>
        <Input type="email" name="email" id="email" required />
        <Label htmlFor="message">Message:</Label>
        <TextArea name="message" id="message" cols={30} rows={10} />
        <Button type="submit" value="Send" />
      </Form>
    </FormSection>
  );
}

export default Contact;
