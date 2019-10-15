import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { withContext } from '../../hocs/Provider';
import NavBar from './NavBar';
import Message from './Message';
import { fetchMovieComments } from '../../firebase';
import Form from './Form';

function Comments(props) {
  const { context: { _chat: { updateChat, chats } } } = props;
  const { movieID } = useParams();

  useEffect(function () {
    fetchMovieComments(movieID, updateChat);
  }, []);

  const data = chats[movieID] || [];

  return (
    <Comments.Wrapper>
      <NavBar />
      <div className="messages">
        {
          data.map(({ body }) => <Message message={body} key={body} />)
        }
      </div>
      <Form movieID={movieID} />
    </Comments.Wrapper>
  );
}

Comments.Wrapper = styled.div`
  .messages {
    padding: 1em 2em;
    height: calc(100vh - 178px);
    overflow-y: auto;
  }
`;

export default withContext(Comments);
