'use client';
import React from 'react';
import styled from 'styled-components';
import Interactable from '@/components/Interactable';

import { SearchModeContext } from '@/contexts/CurrentSearchMode';
import { X } from 'react-feather';

const Container = styled.section`
  display: flex;
  gap: 8px;
  gap: clamp(8px, 4%, 16px);
  align-items: center;

  height: fit-content;
  padding-block: 8px;

  padding-inline: 24px;
  padding-inline-end: min(24px, 4%);
  // to make it symmetrical visually
  // see comment in PartnerPreviewChat.tsx:~32
  padding-inline-start: min(12px, 2%);

  & > *:last-child {
    margin-left: auto;
  }
`;

const Header = () => {
  const { mode, switchMode } = React.useContext(SearchModeContext);

  const resetMode = () => {
    switchMode('none');
  };

  if (mode == 'none') {
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
