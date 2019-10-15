import React, { useState } from 'react';
import styled from 'styled-components';
import { addMovieComment } from '../../../firebase';
import { BRAND_PRIMARY, BRAND_WHITE } from '../../../settings/_colors';

export default function Form({ movieID }) {
  const [body, setBody] = useState('');
  function handleChange({ target: { value } }) {
    value.trim();
    setBody(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (body) {
      addMovieComment(movieID, body);
      setBody('');
    }
  }
  return (
    <Form.Wrapper onSubmit={handleSubmit}>
      <Form.Input placeholder="Enter your comment here..." onChange={handleChange} value={body} />
      <Form.Button><i className="icon ion-md-send" onClick={handleSubmit} /></Form.Button>
    </Form.Wrapper>
  );
}

Form.Wrapper = styled.form`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 1.33em;
  box-sizing: border-box;
  background: ${BRAND_WHITE};
`;

Form.Input = styled.input`
  border: none;
  font-size: 14px;
  background: transparent;
  width: calc(100% - 50px);
  box-sizing: border-box;

  :focus {
    outline: none;
  }
`;

Form.Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-sizing: border-box;
  font-size: 26px;
  display: flex;
  justify-content: center;
  border-width: 0;
  background: ${BRAND_PRIMARY};
  color: ${BRAND_WHITE};
  align-items: center;

  :hover {
    color: ${BRAND_PRIMARY};
    background: ${BRAND_WHITE};
    cursor: pointer;
  }

  :focus {
    outline: none;
  }
`;
