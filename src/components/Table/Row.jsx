import React from 'react';
import styled from 'styled-components';
import { BRAND_WHITE, SECONDARY_WHITE } from '../../settings/_colors';
import { formatRuntime } from '../../utils';

function Cell({ children }) {
  return (
    <Cell.Wrapper>{children}</Cell.Wrapper>
  );
}

Cell.Wrapper = styled.li``;

export default function Row(props) {
  const { title, year, runtime, revenue, rating, genre } = props;
  return (
    <Row.Wrapper>
      <Row.Items>
        <Cell>{title}</Cell>
        <Cell>{year}</Cell>
        <Cell>{formatRuntime(runtime)}</Cell>
        <Cell>${revenue}</Cell>
        <Cell>{rating}</Cell>
        <Cell>{genre.join(', ')}</Cell>
      </Row.Items>
    </Row.Wrapper>
  );
}

Row.Wrapper = styled.li`
  width: max-content;
  padding: 1.2em 0em;
  margin-bottom: .5em;
  font-size: 14px;
  background: ${BRAND_WHITE};
  border-radius: 3px;

  :hover {
    background: ${SECONDARY_WHITE};
    cursor: pointer;
  }
`;

Row.Items = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-start;

  li {
    box-sizing: border-box;
  }

  li:nth-child(1) {
    width: 300px;
  }

  li:nth-child(2),
  li:nth-child(3),
  li:nth-child(4),
  li:nth-child(5) {
    width: 100px;
  }

  li:nth-child(6) {
    width: 300px;
  }
`;
