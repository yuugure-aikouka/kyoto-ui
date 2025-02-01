'use client';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

type ChatEnablementContextType = {
  isChatActive: boolean;
  setIsChatActive: (status: boolean) => void;
};

export const ChatEnablementContext = React.createContext({
  isChatActive: true,
  setIsChatActive: (status: boolean) => {
    return status;
  },
} as ChatEnablementContextType);

export const ChatEnablementProvider = ({ children }: Props) => {
  const [isChatActive, setIsChatActive] =
    React.useState<boolean>(true);

  return (
    <ChatEnablementContext value={{ isChatActive, setIsChatActive }}>
      {children}
    </ChatEnablementContext>
  );
};
