import React from 'react';
import styled from 'styled-components';

export default function Cell({ children }) {
  return (
    <Cell.Wrapper>{children}</Cell.Wrapper>
  );
}

Cell.Wrapper = styled.li``;
