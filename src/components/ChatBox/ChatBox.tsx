'use client';
import React from 'react';
import styled from 'styled-components';

import Header from '@/components/ChatBox/Header';
import ChatHistory from '@/components/ChatBox/ChatHistory';
import Input from '@/components/ChatBox/Input';

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
  history: Chat[];
} => {
  const { avatar_url, display_name, history } = getChat();

  return {
    avatarUrl: avatar_url,
    name: display_name,
    history: history.map((entry) => formatHistory(entry)),
  };
};

const ChatBox = () => {
  const { avatarUrl, name, history } = fetchChatData();
  const [chatHistory, setChatHistory] =
    React.useState<Chat[]>(history);

  const addNewChat = (content: string): void => {
    const newChatHistory = [...chatHistory];
    newChatHistory.push({
      chatId: crypto.randomUUID(),
      content,
      timestamp: Date.now(),
      isMyChat: true,
    });

    setChatHistory(newChatHistory);
  };

  return (
    <Container>
      <Header avatarUrl={avatarUrl} name={name} />

      <ChatHistory chats={chatHistory} />

      <Input onSubmit={addNewChat} />
    </Container>
  );
};

export default ChatBox;
