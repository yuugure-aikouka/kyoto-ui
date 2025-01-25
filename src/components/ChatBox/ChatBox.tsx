'use client';
import React from 'react';
import styled from 'styled-components';

import Header from '@/components/ChatBox/Header';
import ChatHistory from '@/components/ChatBox/ChatHistory';
import Input from '@/components/ChatBox/Input';

import { Chat } from '@/components/ChatBox/ChatHistory';

type ChatBoxProps = {
  avatarUrl: string;
  name: string;
  history?: Chat[];
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  & > *:nth-child(2) {
    flex: 1;
  }
`;

const ChatBox = ({ avatarUrl, name, history }: ChatBoxProps) => {
  return (
    <Container>
      <Header avatarUrl={avatarUrl} name={name} />

      <ChatHistory chats={history} />

      <Input />
    </Container>
  );
};

export default ChatBox;
