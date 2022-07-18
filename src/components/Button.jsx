import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  border: none;
  background-color: transparent;
  font-size: var(--h5);
  padding: 0;
  display: flex;
  font-family: var(--serif);
  color: var(--charcoal);
  text-decoration: none;
  position: relative;

  &:after {
    content: "";
    display: block;
    position: absolute;
    height: 0.1rem;
    width: 100%;
    background-color: var(--charcoal);
    left: 0;
    bottom: -0.25rem;
    opacity: 1;
  }

  &:hover,
  &:focus {
    cursor: pointer;

    &:after {
      opacity: 0.15;
    }
  }

  &:visited {
    text-decoration: none;
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.15;
  }
`;

function Button(props) {
  return (
    <ButtonWrapper type={props.type} disabled={props.disabled}>
      {props.text ? props.text : 'Read Article'}
      {' '}
    </ButtonWrapper>
  );
}

export default Button;
