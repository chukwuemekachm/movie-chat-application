import React from 'react';
import styled from 'styled-components';
import { BRAND_WHITE, SECONDARY_WHITE } from '../../../settings/_colors';
import Cell from '../Cell';

function Header() {
  return (
    <Header.Wrapper>
      <Header.Items>
        <Cell>Title</Cell>
        <Cell>Year</Cell>
        <Cell>Runtime</Cell>
        <Cell>Revenue</Cell>
        <Cell>Rating</Cell>
        <Cell>Genre</Cell>
      </Header.Items>
    </Header.Wrapper>
  );
}

Header.Wrapper = styled.li`
  width: max-content;
  font-size: 14px;
  background: transparent;
  overflow-y: auto;

  @media (max-width: 1024px) {
    width: 90%;
  }
`;

Header.Items = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-start;

  li {
    box-sizing: border-box;
    font-weight: 500;
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
    width: 250px;
  }
`;

export default Header;
