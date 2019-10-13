import React from 'react';
import styled from 'styled-components';
import { BRAND_WHITE, BRAND_PRIMARY } from '../../../settings/_colors';

export default function Message({ message }) {
  return (
    <Message.Wrapper>
      <Message.Avatar>
        <i className="icon ion-md-contact" />
      </Message.Avatar>
      <Message.Message>{message}</Message.Message>
    </Message.Wrapper>
  );
}

Message.Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

Message.Avatar = styled.span`
  color: ${BRAND_PRIMARY};
  font-size: 36px;
  margin-right: .3em;
  box-shadow: 0 0.32em 2em rgba(153, 153, 153, .1);
`;

Message.Message = styled.p`
  background: ${BRAND_PRIMARY};
  color: ${BRAND_WHITE};
  padding: .8em 1em;
  font-size: 14px;
  width: calc(100% - 36px - .3em);
  box-shadow: 0 0.32em 2em rgba(153, 153, 153, .1);
  border-radius: 2px;
`;
