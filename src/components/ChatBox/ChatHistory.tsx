'use client';
import React from 'react';
import styled from 'styled-components';

import ChatBubble from '@/components/ChatBubble';

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
  previousTimestamp: number
): boolean => {
  if (previousTimestamp == -1) {
    return true;
  }

  return epochToDate(newTimestamp) != epochToDate(previousTimestamp);
};

const ChatHistory = ({ chats = [] }: Props) => {
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
                index > 0 ? chats[index - 1].timestamp : -1
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
    </Section>
  );
};

export default ChatHistory;
