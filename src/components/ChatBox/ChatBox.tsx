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
import { ChatEnablementContext } from '@/components/ChatLayout/ChatEnablementProvider';
import { Section as ChatHistorySection } from '@/components/ChatBox/styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  & > ${ChatHistorySection} {
    flex: 1;
  }

  position: relative;
  isolation: isolate;
`;

const Backdrop = styled.div`
  position: absolute;
  inset: 0;

  z-index: 1;

  backdrop-filter: blur(2px);
`;

const ActiveChatBox = ({ username }: { username: string }) => {
  const { data, actions } = useChatData(username);
  const { isChatActive } = React.useContext(ChatEnablementContext);

  return (
    <Container>
      {!isChatActive && <Backdrop />}
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
  overflow: hidden;

  display: grid;
  place-content: center;
  width: 100%;

  @media (max-width: ${425 / 16}rem) {
    display: none;
  }

  position: relative;
  isolation: isolate;
`;

const MobileInactiveChatBox = styled.div`
  overflow: hidden;

  display: none;
  @media (max-width: ${425 / 16}rem) {
    display: block;
    display: grid;
    place-content: center;
    width: 100%;
  }

  position: relative;
  isolation: isolate;
`;

// todo: refactor
const InactiveChatBox = ({ partners }: PartnerPreviewListType) => {
  const { isChatActive } = React.useContext(ChatEnablementContext);

  return (
    <>
      <DesktopInactiveChatBox>
        {!isChatActive && <Backdrop />}
        start a chat with someone!
      </DesktopInactiveChatBox>
      <MobileInactiveChatBox>
        <PartnerList isMobile={true} partners={partners} />
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
