import React from 'react';
import styled from 'styled-components';

export default function FallBackUI() {
  return (
    <FallBackUI.Wrapper>
      <div>
        <i className="icon ion-ios-information-circle-outline" />
        <h3>Oops! An error just occurred please reload the page and try again!</h3>
      </div>
    </FallBackUI.Wrapper>
  );
}

FallBackUI.Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    text-align: center;

    i {
      font-size: 120px;
      color: $crimson;
    }

    h3 {
      font-size: 16px;
      margin: 0;
    }
  }
`;
