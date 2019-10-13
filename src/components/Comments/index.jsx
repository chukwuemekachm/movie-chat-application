import React from 'react';
import styled from 'styled-components';
import { withContext } from '../../hocs/Provider';
import NavBar from './NavBar';
import Message from './Message';

const data = [
  'I hate it',
  'Not bad but I wish it was longer. 2H is too short :(',
  'Kept me on the edge of my seat the entire time'
];

function Comments() {
  return (
    <Comments.Wrapper>
      <NavBar />
      <div className="messages">
        {
          data.map(message => <Message message={message} />)
        }
      </div>
    </Comments.Wrapper>
  );
}

Comments.Wrapper = styled.div`
  .messages {
    padding: 1em 2em;
  }
`;

export default withContext(Comments);
