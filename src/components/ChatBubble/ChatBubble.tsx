'use client';
import React from 'react';
import styled from 'styled-components';

import { Section as ChatBoxSection } from '@/components/ChatBox/styled-components';

type Props = {
  // the text inside of the chat bubble
  children: React.ReactNode;
  sender: 'me' | 'them';
};

const COLOR_MAPPER: { [key in 'me' | 'them']: string } = {
  me: 'var(--color-secondary)',
  them: 'var(--color-primary)',
};

const TEXT_COLOR_MAPPER: { [key in 'me' | 'them']: string } = {
  me: 'var(--color-text)',
  // todo: do smth about it
  // stripe's purple is too dark for a black text to be barely visible
  them: 'var(--color-white)',
};

const MARGIN_LEFT_MAPPER = {
  me: 'auto',
  them: '0',
};

const MARGIN_RIGHT_MAPPER = {
  me: '0',
  them: 'auto',
};

const BORDER_BOTTOM_RIGHT_RADIUS_MAPPER = {
  me: '0',
  them: '8px',
};

const BORDER_BOTTOM_LEFT_RADIUS_MAPPER = {
  me: '8px',
  them: '0',
};

export const Container = styled.div`
  width: fit-content;
  background-color: var(--bubble-color);

  padding: 4px 8px;
  border-radius: 8px;

  ${ChatBoxSection} & {
    margin-left: var(--left-margin);
    margin-right: var(--right-margin);

    border-bottom-right-radius: var(--border-bottom-right-radius);
    border-bottom-left-radius: var(--border-bottom-left-radius);
  }
`;

const Content = styled.p`
  color: var(--color);
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
          '--border-bottom-right-radius':
            BORDER_BOTTOM_RIGHT_RADIUS_MAPPER[sender],
          '--border-bottom-left-radius':
            BORDER_BOTTOM_LEFT_RADIUS_MAPPER[sender],
        } as React.CSSProperties
      }>
      <Content
        style={
          {
            '--color': TEXT_COLOR_MAPPER[sender],
          } as React.CSSProperties
        }>
        {children}
      </Content>
    </Container>
  );
};

export default ChatBubble;
