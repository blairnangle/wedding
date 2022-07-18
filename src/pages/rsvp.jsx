import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Button from '../components/Button';

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
  font-family: var(--serif);
  font-size: var(--h5);
  height: 50px;
  width: 100%;
  margin-bottom: calc(var(--spacing) * 1.5);
  font-size: var(--para);
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.25);
`;

const FormTextArea = styled.textarea`
  font-family: var(--serif);
  font-size: var(--h5);
  width: 100%;
  min-height: 50px;
  margin-bottom: calc(var(--spacing) * 1.5);
  font-size: var(--para);
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.25);
  `;

const Wrapper = styled.div`
  font-family: var(--serif);
  font-size: var(--h5);
  height: auto;
  width: 100%;
  padding: 0px 16px 24px 16px;
  box-sizing: border-box;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  margin-bottom: 10px;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #ccc;
`;
const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  &:checked + ${RadioButtonLabel} {
    background: gray;
  }
`;

function RsvpPage() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isComingFriday, setIsComingFriday] = useState('Yes');
  const [isComingSunday, setIsComingSunday] = useState('Yes');
  const [dietaryRequirementsOrAllergies, setDietaryRequirementsOrAllergies] = useState('');
  const [differencesWithinCouple, setDifferencesWithinCouple] = useState('');
  const [songRequest, setSongRequest] = useState('');

  const sendMessage = () => {
    axios.post('https://7lo8o3fj9b.execute-api.eu-west-2.amazonaws.com/rsvp/', {
      name,
      email,
      isComingFriday,
      isComingSunday,
      dietaryRequirementsOrAllergies,
      differencesWithinCouple,
      songRequest,
    }).then((r) => {
      setIsFormSubmitted(true);
      setName('');
      setEmail('');
    }).catch((e) => {
      console.log(`error: ${e}`);
    });
  };

  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleFridayChange = (event) => {
    const { value } = event.target;
    setIsComingFriday(value);
  };

  const handleSundayChange = (event) => {
    const { value } = event.target;
    setIsComingSunday(value);
  };

  const handleDietaryChange = (event) => {
    const { value } = event.target;
    setDietaryRequirementsOrAllergies(value);
  };

  const handleDifferencesWithinCoupleChange = (event) => {
    const { value } = event.target;
    setDifferencesWithinCouple(value);
  };

  const handleSongRequestChange = (event) => {
    const { value } = event.target;
    setSongRequest(value);
  };

  const handleSubmit = (e) => {
    sendMessage();
    e.preventDefault();
  };

  if (isFormSubmitted) {
    return (
      <Layout>
        <h3>Thanks for RSVPing! See you in Italy!</h3>
      </Layout>
    );
  }
  return (
    <Layout>
      <Form>
        <form onSubmit={(e) => {
          handleSubmit(e);
        }}
        >
          <p>
            <FormLabel for="name">Name(s)</FormLabel>
            <FormInput
              type="text"
              name="name"
              value={name}
              onChange={(event) => handleNameChange(event)}
            />
          </p>
          <p>
            <FormLabel for="email">Email Address</FormLabel>
            <FormInput
              type="email"
              name="email"
              value={email}
              onChange={(event) => handleEmailChange(event)}
            />
          </p>
          <p>
            <p>
              <FormLabel for="isComingFriday">Are you coming to the drinks on Friday evening?</FormLabel>
              <Wrapper>
                <Item>
                  <RadioButton
                    type="radio"
                    name="isComingFridayYes"
                    value="Yes"
                    checked={isComingFriday === 'Yes'}
                    onChange={(event) => handleFridayChange(event)}
                  />
                  <RadioButtonLabel />
                  <div>Yes</div>
                </Item>
                <Item>
                  <RadioButton
                    type="radio"
                    name="isComingFridayNo"
                    value="No"
                    checked={isComingFriday === 'No'}
                    onChange={(event) => handleFridayChange(event)}
                  />
                  <RadioButtonLabel />
                  <div>No</div>
                </Item>
              </Wrapper>
            </p>
            <p>
              <FormLabel for="isComingSunday">Are you coming to the pizza/pool party on Sunday?</FormLabel>
              <Wrapper>
                <Item>
                  <RadioButton
                    type="radio"
                    name="isComingSundayYes"
                    value="Yes"
                    checked={isComingSunday === 'Yes'}
                    onChange={(event) => handleSundayChange(event)}
                  />
                  <RadioButtonLabel />
                  <div>Yes</div>
                </Item>
                <Item>
                  <RadioButton
                    type="radio"
                    name="isComingSundayNo"
                    value="No"
                    checked={isComingSunday === 'No'}
                    onChange={(event) => handleSundayChange(event)}
                  />
                  <RadioButtonLabel />
                  <div>No</div>
                </Item>
              </Wrapper>
            </p>
            <p>
              <FormLabel for="dietaryRequirementsOrAllergies">Do you have any dietary requirements or allergies?</FormLabel>
              <FormTextArea
                type="text"
                name="dietaryRequirementsOrAllergies"
                value={dietaryRequirementsOrAllergies}
                onChange={(event) => handleDietaryChange(event)}
              />
            </p>
            <p>
              <FormLabel for="differencesWithinCouple">If you are RSVPing on behalf of your other half and any of their answers are different to yours, please let us know!</FormLabel>
              <FormTextArea
                type="text"
                name="differencesWithinCouple"
                value={differencesWithinCouple}
                onChange={(event) => handleDifferencesWithinCoupleChange(event)}
              />
            </p>
            <p>
              <FormLabel for="songRequest">Request a song for the DJ</FormLabel>
              <FormTextArea
                type="text"
                name="songRequest"
                value={songRequest}
                onChange={(event) => handleSongRequestChange(event)}
              />
            </p>
          </p>
          <p>
            <Button
              className="btn-link"
              text="Submit"
              type="submit"
              disabled={name.length === 0 || email.length === 0}
            />
          </p>
        </form>
      </Form>
    </Layout>
  );
}

export default RsvpPage;
