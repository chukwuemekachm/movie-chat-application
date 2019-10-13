import React from 'react';
import styled from 'styled-components';
import { BRAND_WHITE } from '../../settings/_colors';

export default function NavBar() {
  return (
    <NavBar.Wrapper>
      <h3>Movie Chat Application</h3>
    </NavBar.Wrapper>
  );
}

NavBar.Wrapper = styled.nav`
  height: 74px;
  box-shadow: 0 0.02em 1em rgba(153, 153, 153, .1);
  display: flex;
  align-items: center;
  background: ${BRAND_WHITE};

  h3 {
    margin: 0;
    padding-left: 1em;
  }
`;
