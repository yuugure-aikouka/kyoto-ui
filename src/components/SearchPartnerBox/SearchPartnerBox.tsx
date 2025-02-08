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
  height: 100%;
`;

const SearchPartnerBox = () => {
  const { mode } = React.useContext(SearchModeContext);

  let renderedSearchMode = (
    <SwipeDirectionProvider>
      <RegularSearch />
    </SwipeDirectionProvider>
  );
  if (mode == 'none') {
    renderedSearchMode = (
      <EmptyStateContainer>
        how would you prefer to find your perfect match?
      </EmptyStateContainer>
    );
  }

  if (mode == 'random') {
    renderedSearchMode = (
      <EmptyStateContainer>
        not yet available, come check again later!
      </EmptyStateContainer>
    );
  }

  return (
    <Container>
      <Header />
      {renderedSearchMode}
    </Container>
  );
};

export default SearchPartnerBox;
