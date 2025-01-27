'use client';
import React from 'react';
import styled from 'styled-components';

import Header from '@/components/ChatBox/Header';
import ChatHistory from '@/components/ChatBox/ChatHistory';
import Input from '@/components/ChatBox/Input';
import useChatData from '@/hooks/useChatData';
import PartnerList from '@/components/PartnerList';

import { CurrentPartnerContext } from '@/components/CurrentPartnerProvider';
import { PartnerPreviewListType } from '@/components/PartnerList';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  & > *:nth-child(2) {
    flex: 1;
  }

  // HACKY, todo: remove this when a better solution is found
  outline: 2px dashed var(--color-primary);
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

const DesktopInactiveChatBox = styled.div`
  display: grid;
  place-content: center;
  width: 100%;

  // HACKY, todo: remove this when a better solution is found
  outline: 2px dashed var(--color-primary);

  @media (max-width: ${768 / 16}rem) {
    display: none;
  }
`;

const MobileInactiveChatBox = styled.div`
  display: none;
  @media (max-width: ${768 / 16}rem) {
    display: block;
    display: grid;
    place-content: center;
    width: 100%;
  }
`;

const InactiveChatBox = ({ partners }: PartnerPreviewListType) => {
  return (
    <>
      <DesktopInactiveChatBox>
        start a chat with someone!
      </DesktopInactiveChatBox>
      <MobileInactiveChatBox>
        <PartnerList partners={partners} />
      </MobileInactiveChatBox>
    </>
  );
};

const ChatBox = ({ partners }: PartnerPreviewListType) => {
  const { username } = React.useContext(CurrentPartnerContext);

  if (!username) {
    return <InactiveChatBox partners={partners} />;
  }

  return <ActiveChatBox key={username} username={username} />;
};

export default ChatBox;
