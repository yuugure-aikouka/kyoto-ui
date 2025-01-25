'use client';
import React from 'react';
import styled from 'styled-components';

import useIsMobile from '@/hooks/useIsMobile';

import BREAKPOINTS_IN_PIXEL from '@/const/BREAKPOINTS';

const Container = styled.div`
  width: 100vw;

  // fallback for dvh incase it isn't supported
  height: 100vh;
  height: 100dvh;

  display: flex;

  // it is guaranteed that this container will only contain 2 children
  & > *:first-child {
    flex-grow: 2;
  }

  & > *:last-child {
    flex-grow: 8;
  }
`;

const Layout = ({
  children,
}: {
  // partner list (developed later) & chat room
  children: [React.ReactNode, React.ReactNode];
}) => {
  // potentially cause a lot of re-render
  // todo: fix it by not using react state (via useIsMobile hook) / handle the resizing event by CSS query (will be very hacky) / or apply useMemo & useCallback on the children components (should we really?)
  // or just let it be? on normal circumstances, user ain't resizing their screen
  const isMobile = useIsMobile(BREAKPOINTS_IN_PIXEL.tablet);

  return (
    <Container>
      {/* todo: handle so that we can still open this first children in mobile */}
      {/* should be developed on `partner list` issue/ticket */}
      {/* todo: currently, there's a flicker when user first open the page */}
      {!isMobile && children[0]}
      {children[1]}
    </Container>
  );
};

export default Layout;
