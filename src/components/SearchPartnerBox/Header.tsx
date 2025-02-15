'use client';
import React from 'react';
import styled from 'styled-components';
import Interactable from '@/components/Interactable';

import { SearchModeContext } from '@/contexts/CurrentSearchMode';
import { X } from 'react-feather';

const Container = styled.section`
  display: flex;
  flex-direction: row-reverse;

  padding-block: 16px;
  padding-inline: 24px;
  padding-inline-end: min(24px, 4%);
`;

const Header = () => {
  const { mode, switchMode } = React.useContext(SearchModeContext);

  const resetMode = () => {
    switchMode('none');
  };

  if (mode == 'none') {
    // <div /> is considered an invalid HTML tag
    // but tsx compiles it into <div><div/>
    return <div />;
  }

  return (
    <Container>
      <Interactable onClick={resetMode}>
        <X size={'2rem'} />
      </Interactable>
    </Container>
  );
};

export default Header;
