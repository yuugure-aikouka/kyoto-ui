'use client';
import React from 'react';
import styled from 'styled-components';

import Header from '@/components/ChatBox/Header';
import ChatHistory from '@/components/ChatBox/ChatHistory';
import Input from '@/components/ChatBox/Input';
import PATHS from '@/const/PATHS';

import { post } from '@/network';
import { Chat } from '@/components/ChatBox/ChatHistory';
import { getChat } from '@/mocks/chat';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  & > *:nth-child(2) {
    flex: 1;
  }
`;

const formatHistory = ({
  chat_id,
  is_my_chat,
  content,
  timestamp,
}: {
  chat_id: string;
  content: string;
  is_my_chat: boolean;
  timestamp: number;
}): Chat => {
  return {
    chatId: chat_id,
    content,
    timestamp,
    isMyChat: is_my_chat,
  };
};

const fetchChatData = (): {
  avatarUrl: string;
  name: string;
  isAi: boolean;
  history: Chat[];
} => {
  const { avatar_url, display_name, is_ai, history } = getChat();

  return {
    avatarUrl: avatar_url,
    name: display_name,
    isAi: is_ai,
    history: history.map((entry) => formatHistory(entry)),
  };
};

const ChatBox = () => {
  const { avatarUrl, name, isAi, history } = fetchChatData();
  const [chatHistory, setChatHistory] =
    React.useState<Chat[]>(history);
  const [isPartnerTyping, setIsPartnerTyping] = React.useState(false);

  const addNewChat = (
    content: string,
    isMyChat: boolean = true
  ): void => {
    setChatHistory((previousChatHistory) => {
      const newChatHistory = [...previousChatHistory];
      newChatHistory.push({
        chatId: crypto.randomUUID(),
        content,
        timestamp: Date.now(),
        isMyChat,
      });

      return newChatHistory;
    });
  };

  const getPartnerResponse = (content: string): void => {
    setIsPartnerTyping(true);

    const data = { message: content };
    post({
      path: PATHS.chat_gemini,
      data,
      callback: (response) => {
        addNewChat(response.data?.data, false);
        setIsPartnerTyping(false);
      },
    });
  };

  return (
    <Container>
      <Header avatarUrl={avatarUrl} name={name} isAi={isAi} />

      <ChatHistory
        isPartnerTyping={isPartnerTyping}
        chats={chatHistory}
      />

      <Input
        onSubmit={(chat: string) => {
          addNewChat(chat);

          // todo: in the future, below AI (incoming chat) listener should be placed in a backend server
          if (!isAi) return;

          getPartnerResponse(chat);
        }}
      />
    </Container>
  );
};

export default ChatBox;
