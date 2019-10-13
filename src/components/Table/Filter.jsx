import React from 'react';
import styled from 'styled-components';
import { LIGHT_GREY, BRAND_WHITE, BRAND_PRIMARY } from '../../settings/_colors';

const options = [
  'Action',
  'Adventure',
  'Horror',
  'Mystery',
  'Sci-Fi',
  'Thriller',
];

export default function Filter() {
  return (
    <Filter.Wrapper>
      <Filter.InputWrapper>
        <input />
      </Filter.InputWrapper>
      <Filter.SelectWrapper>
        <select>
          {options.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
      </Filter.SelectWrapper>
    </Filter.Wrapper>
  );
}

Filter.Wrapper = styled.div`
  width: 1040px;
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
  box-sizing: border-box;

  input, select {
    width: 150px;
    font-size: .8em;
    box-sizing: border-box;
    border: none;
    background: transparent;
    color: inherit;

    :focus {
      outline: none;
    }
  }

  @media (max-width: 1024px) {
    width: 90%;
    overflow-x: scroll;
  }
`;

Filter.InputWrapper = styled.span`
  border: 0.0015rem solid ${LIGHT_GREY};
  padding: 0.35em;
  background: ${BRAND_WHITE};
`;

Filter.SelectWrapper = styled.span`
  padding: 0.35em;
  background: ${BRAND_PRIMARY};
  color: ${BRAND_WHITE};
  box-shadow: 0 0.32em 2em rgba(153, 153, 153, .1);
`;
