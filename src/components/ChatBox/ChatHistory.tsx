'use client';
import React from 'react';
import ChatBubble from '@/components/ChatBubble';

import { Section } from '@/components/ChatBox/styled-components';

const ChatHistory = () => {
  return (
    <Section>
      <ChatBubble sender="me">
        are you even the real obama my dude?
      </ChatBubble>
      <ChatBubble sender="me">{"cause i'm a fan"}</ChatBubble>
      <ChatBubble sender="them">{"i'm the real obama"}</ChatBubble>
      <ChatBubble sender="me">{'wow, cool'}</ChatBubble>
      <ChatBubble sender="them">{'now give me 1k$'}</ChatBubble>
      {/* {Array.from(Array(100).keys()).map((_) => {
        return (
          <ChatBubble key={_} sender="them">
            {'now give me 1k$'}
          </ChatBubble>
        );
      })} */}
    </Section>
  );
};

export default ChatHistory;
