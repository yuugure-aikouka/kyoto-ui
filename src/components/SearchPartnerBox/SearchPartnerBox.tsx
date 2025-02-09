'use client';
import React from 'react';
import styled from 'styled-components';
import RegularSearch from '@/components/SearchPartnerBox/RegularSearch';
import Header from '@/components/SearchPartnerBox/Header';

import { SwipeDirectionProvider } from '@/contexts/SwipeDirection';
import { SearchModeContext } from '@/contexts/CurrentSearchMode';

const EmptyStateContainer = styled.div`
  padding: 16px;
  display: grid;
  place-items: center;

  flex: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  height: 100dvh;

  // header
  --header-height: clamp(2rem, 20%, 4rem);
  & > *:first-child {
    height: var(--header-height);
  }

  // search partner box
  & > *:last-child {
    height: calc(100% - var(--header-height));
  }
`;

const SEARCH_MAPPER: {
  [key in 'none' | 'random' | 'regular']: React.ReactNode;
} = {
  none: (
    <EmptyStateContainer>
      how would you prefer to find your perfect match?
    </EmptyStateContainer>
  ),
  random: (
    <EmptyStateContainer>
      not yet available, come check again later!
    </EmptyStateContainer>
  ),
  regular: (
    <SwipeDirectionProvider>
      <RegularSearch />
    </SwipeDirectionProvider>
  ),
};

const SearchPartnerBox = () => {
  const { mode } = React.useContext(SearchModeContext);

  return (
    <Container>
      <Header />
      {SEARCH_MAPPER[mode]}
    </Container>
  );
};

export default SearchPartnerBox;
