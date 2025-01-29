'use client';
import React from 'react';
import styled from 'styled-components';

import { Section as ChatBoxSection } from '@/components/ChatBox/styled-components';

type Props = {
  // the text inside of the chat bubble
  children: React.ReactNode;
  sender: 'me' | 'them';
};

const COLOR_MAPPER = {
  me: 'var(--color-secondary)',
  them: 'var(--color-primary)',
};

const MARGIN_LEFT_MAPPER = {
  me: 'auto',
  them: '0',
};

const MARGIN_RIGHT_MAPPER = {
  me: '0',
  them: 'auto',
};

export const Container = styled.div`
  width: fit-content;
  background-color: var(--bubble-color);

  padding: 4px 8px;
  border-radius: 8px;

  ${ChatBoxSection} & {
    margin-left: var(--left-margin);
    margin-right: var(--right-margin);

    border-bottom-right-radius: 0px;
  }
`;

const Content = styled.p`
  word-break: break-all;
  hyphens: auto;
  -webkit-hyphens: auto;
`;

const ChatBubble = ({ children, sender }: Props) => {
  return (
    <Container
      style={
        {
          '--bubble-color': COLOR_MAPPER[sender],
          '--left-margin': MARGIN_LEFT_MAPPER[sender],
          '--right-margin': MARGIN_RIGHT_MAPPER[sender],
        } as React.CSSProperties
      }>
      <Content>{children}</Content>
    </Container>
  );
};

export default ChatBubble;
