import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BRAND_WHITE, BRAND_PRIMARY } from '../../../settings/_colors';

export default function NavBar() {
  const { state: { title } } = useLocation();

  return (
    <NavBar.Wrapper>
      <h4>
        <Link to="/">
          <i className="icon ion-md-arrow-back" />
        </Link>
        {title} Comments
      </h4>
    </NavBar.Wrapper>
  );
}

NavBar.Wrapper = styled.nav`
  height: 74px;
  box-shadow: 0 0.02em 1em rgba(153, 153, 153, .1);
  display: flex;
  align-items: center;
  background: ${BRAND_PRIMARY};
  color: ${BRAND_WHITE};

  i {
    font-size: 22px;
    margin-right: 15px;
  }

  a {
    color: ${BRAND_WHITE};
  }

  h4 {
    margin: 0;
    padding-left: 1em;
    display: flex;
    align-items: center;
  }
`;
