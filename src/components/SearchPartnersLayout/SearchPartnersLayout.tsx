'use client';
import React from 'react';
import styled from 'styled-components';
import BREAKPOINTS_IN_PIXEL from '@/const/BREAKPOINTS';

import { SearchModeContext } from '@/contexts/CurrentSearchMode';

const ChatContainer = styled.div`
  display: flex;

  // fallback for dvh incase it isn't supported
  height: 100vh;
  height: 100dvh;

  // it is guaranteed that this container will only contain 2 children
  & > *:first-child {
    width: max(30%, 304px);

    @media (max-width: ${(BREAKPOINTS_IN_PIXEL.tablet - 1) / 16}rem) {
      display: var(--search-mode-list-display);
      width: 100%;
    }

    // when swiping, the card could get on top of this search mode list
    // which looks strange
    z-index: 1;
  }

  & > *:last-child {
    flex-grow: 1;

    @media (max-width: ${(BREAKPOINTS_IN_PIXEL.tablet - 1) / 16}rem) {
      display: var(--search-box-display);
      width: 100%;
    }
  }

  overflow-x: hidden;
`;

const Layout = ({
  children,
}: {
  children: [React.ReactNode, React.ReactNode];
}) => {
  const { mode } = React.useContext(SearchModeContext);

  return (
    <ChatContainer
      style={
        {
          '--search-mode-list-display':
            mode != 'none' ? 'none' : 'flex',
          '--search-box-display': mode != 'none' ? 'flex' : 'none',
        } as React.CSSProperties
      }>
      {children}
    </ChatContainer>
  );
};

export default Layout;
