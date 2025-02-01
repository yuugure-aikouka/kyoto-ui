'use client';
import React from 'react';
import styled from 'styled-components';

import Avatar from '@/components/Avatar';
import Interactable from '@/components/Interactable';

import { CurrentPartnerContext } from '@/contexts/CurrentPartner';
import { X } from 'react-feather';

type Props = {
  avatarUrl: string;
  name: string;
  isAi?: boolean;
};

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

const Name = styled.span`
  font-size: 1.125rem;
`;

const Header = ({ avatarUrl, name, isAi = false }: Props) => {
  const { syncCurrentPartner } = React.useContext(
    CurrentPartnerContext
  );

  const endChat = () => {
    syncCurrentPartner({
      newAvatarUrl: null,
      newIsAi: false,
      newName: null,
      newUsername: null,
    });
  };

  return (
    <Container>
      <Avatar src={avatarUrl} isAi={isAi} />
      <Name>{name}</Name>
      <Interactable onClick={endChat}>
        <X size={'2rem'} />
      </Interactable>
    </Container>
  );
};

export default Header;
