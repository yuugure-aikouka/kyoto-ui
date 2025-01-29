'use client';
import React from 'react';
import styled from 'styled-components';

import ChatBubble from '@/components/ChatBubble';
import TypingAnimation from '@/components/ChatBubble/TypingAnimation';

import { Section } from '@/components/ChatBox/styled-components';
import { epochToDate, epochToHour } from '@/utils/time';

export type Chat = {
  chatId: string;
  content: string;

  timestamp: number;
  isMyChat: boolean;
};

type Props = {
  chats?: Chat[];
  isPartnerTyping: boolean;
};

const determineSender = (isMyChat: boolean): 'me' | 'them' => {
  return isMyChat ? 'me' : 'them';
};

// todo: perhaps we can turn this into generic component?
const Timestamp = styled.span`
  font-size: 0.825rem;

  ${Section} & {
    margin-inline: auto;
  }
`;

const isNewDay = (
  newTimestamp: number,
  previousTimestamp: number | null
): boolean => {
  if (previousTimestamp == null) {
    return true;
  }

  return epochToDate(newTimestamp) != epochToDate(previousTimestamp);
};

const ChatHistory = ({ chats = [], isPartnerTyping }: Props) => {
  const messagesEndRef = React.useRef<null | HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [chats]);

  return (
    <Section>
      {chats.map(
        (
          { chatId, content, isMyChat, timestamp }: Chat,
          index: number
        ) => {
          return (
            <React.Fragment key={chatId}>
              {/* basically, we only render the 'date-month-year' of the day once */}
              {isNewDay(
                timestamp,
                index > 0 ? chats[index - 1].timestamp : null
              ) && <Timestamp>{epochToDate(timestamp)}</Timestamp>}
              <Timestamp>{epochToHour(timestamp)}</Timestamp>
              <ChatBubble
                key={chatId}
                sender={determineSender(isMyChat)}>
                {content}
              </ChatBubble>
            </React.Fragment>
          );
        }
      )}
      {isPartnerTyping && (
        <ChatBubble sender="them">
          <TypingAnimation />
        </ChatBubble>
      )}
      <div ref={messagesEndRef} />
    </Section>
  );
};

export default ChatHistory;
