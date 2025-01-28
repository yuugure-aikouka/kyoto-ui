'use client';
import React from 'react';
import styled from 'styled-components';

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
      display: none;
    }
  }

  & > *:last-child {
    flex-grow: 1;
  }

  position: relative;
  isolation: isolate;
`;

const Layout = ({
  children,
}: {
  // partner list (developed later) & chat room
  children: [React.ReactNode, React.ReactNode];
}) => {
  return <ChatContainer>{children}</ChatContainer>;
};

export default Layout;
