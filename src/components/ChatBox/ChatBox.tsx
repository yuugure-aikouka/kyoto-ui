'use client';
import React from 'react';
import styled from 'styled-components';

import Header from '@/components/ChatBox/Header';

type ChatBoxProps = {
  avatarUrl: string;
  name: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  & > *:nth-child(2) {
    flex: 1;
  }
`;

const Section = styled.section`
  outline: 2px dashed black;

  display: grid;
  place-content: center;

  height: 48px;
`;

const ChatBox = ({ avatarUrl, name }: ChatBoxProps) => {
  return (
    <Container>
      {/* header */}
      <Header avatarUrl={avatarUrl} name={name} />
      {/* chat box */}
      <section></section>
      {/* interactions */}
      <Section>interactive sections</Section>
    </Container>
  );
};

export default ChatBox;
