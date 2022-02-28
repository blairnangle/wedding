import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Banner from '../components/Banner';
import Layout from '../components/Layout';

const Form = styled.div`
  margin: calc(var(--spacing) * 2) 0;

  @media (min-width: 1200px) {
    margin: calc(var(--spacing) * 4) 0;
  }
`;

const FormLabel = styled.label`
  font-family: var(--serif);
  font-size: var(--h5);
  margin-bottom: var(--spacing);
  display: inline-block;
`;

const FormInput = styled.input`
  height: 50px;
  width: 100%;
  margin-bottom: calc(var(--spacing) * 1.5);
  font-size: var(--para);
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.25);
`;

const FormTextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  margin-bottom: calc(var(--spacing) * 1.5);
  font-size: var(--para);
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.25);
`;

function ContactPage() {
  return (
    <Layout>
      <Banner content="Contact us" />
      <p>
        This will be a contact form once it's hooked up to an email address/backend…
      </p>
      <Form>
        <form name="contact">
          <p>
            <FormLabel for="name">Your Name</FormLabel>
            <FormInput type="text" name="name" />
          </p>
          <p>
            <FormLabel for="email">Email Address</FormLabel>
            <FormInput type="email" name="email" />
          </p>
          <p>
            <FormLabel for="message">Your Message</FormLabel>
            <FormTextArea type="text" name="message" />
          </p>
          <p>
            <Button className="btn-link" text="Send Message" type="submit" />
          </p>
        </form>
      </Form>
    </Layout>
  );
}

export default ContactPage;
