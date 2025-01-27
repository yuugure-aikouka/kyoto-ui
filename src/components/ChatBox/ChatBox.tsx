'use client';
import React from 'react';
import styled from 'styled-components';

import Header from '@/components/ChatBox/Header';
import ChatHistory from '@/components/ChatBox/ChatHistory';
import Input from '@/components/ChatBox/Input';
import useChatData from '@/hooks/useChatData';

import { CurrentPartnerContext } from '@/components/CurrentPartnerProvider';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  & > *:nth-child(2) {
    flex: 1;
  }
`;

const ActiveChatBox = ({ username }: { username: string }) => {
  const { data, actions } = useChatData(username);

  return (
    <Container>
      <Header
        avatarUrl={data.avatarUrl}
        name={data.name}
        isAi={data.isAi}
      />

      <ChatHistory
        isPartnerTyping={data.isPartnerTyping}
        chats={data.history}
      />

      <Input
        onSubmit={(chat: string) => {
          actions.addNewChat(chat);

          // todo: in the future, below AI (incoming chat) listener should be placed in a backend server
          if (!data.isAi) return;

          actions.getPartnerResponse(chat);
        }}
      />
    </Container>
  );
};

const InactiveChatBox = styled.div`
  display: grid;
  place-content: center;
`;

const ChatBox = () => {
  const { username } = React.useContext(CurrentPartnerContext);

  if (!username) {
    return (
      <InactiveChatBox>start a chat with someone!</InactiveChatBox>
    );
  }

  return <ActiveChatBox username={username} />;
};

export default ChatBox;
