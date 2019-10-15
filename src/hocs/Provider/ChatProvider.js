import React, { createContext, useState } from 'react';

export const ChatContext = createContext({});

export default function ChatProvider({ children }) {
  const [chats, setChat] = useState({});

  function updateChat(movieTitle, chats) {
    setChat({
      ...chats,
      [movieTitle]: chats,
    });
  }

  function createContextValue() {
    return {
      chats,
      updateChat,
    };
  }

  return (
    <ChatContext.Provider value={createContextValue()}>
      {children}
    </ChatContext.Provider>
  );
}
