import React, { createContext, useState } from 'react';

export const ChatContext = createContext({});

export default function ChatProvider({ children }) {
  const [chat, setChat] = useState({});

  function createContextValue() {
    return {
      chat,
    };
  }

  return (
    <ChatContext.Provider value={createContextValue()}>
      {children}
    </ChatContext.Provider>
  );
}
