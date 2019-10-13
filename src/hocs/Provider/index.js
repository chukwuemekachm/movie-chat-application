import React from 'react';
import MovieProvider, { MovieContext } from './MovieProvider';
import ChatProvider, { ChatContext } from './ChatProvider';

export function withContext(ComposedComponent) {
  return function (props) {
    return (
      <MovieContext.Consumer>
        {_movie => (
          <ChatContext.Consumer>
            {_chat => (
              <ComposedComponent {...props} context={{ _chat, _movie }} />
            )}
          </ChatContext.Consumer>
        )}
      </MovieContext.Consumer>
    );
  }
}

export default function Provider({ children }) {
  return (
    <MovieProvider>
      <ChatProvider>
        {children}
      </ChatProvider>
    </MovieProvider>
  );
}
