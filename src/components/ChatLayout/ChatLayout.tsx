'use client';
import React from 'react';
import styled from 'styled-components';

import { CurrentPartnerContext } from '@/contexts/CurrentPartnerProvider';

const ChatContainer = styled.div`
  display: flex;

  // fallback for dvh incase it isn't supported
  height: 100vh;
  height: 100dvh;

  // it is guaranteed that this container will only contain 2 children
  & > *:first-child {
    min-width: 20%;
    flex-shrink: 0;

    @media (max-width: ${768 / 16}rem) {
      min-width: revert;
    }

    @media (max-width: ${425 / 16}rem) {
      display: var(--partner-list-display);
    }
  }

  & > *:last-child {
    flex-grow: 1;
  }

  overflow-x: hidden;
`;

const Layout = ({
  children,
}: {
  // partner list (developed later) & chat room
  children: [React.ReactNode, React.ReactNode];
}) => {
  const { username } = React.useContext(CurrentPartnerContext);

  return (
    <ChatContainer
      style={
        {
          '--partner-list-display': username ? 'none' : 'flex',
        } as React.CSSProperties
      }>
      {children}
    </ChatContainer>
  );
};

export default Layout;
