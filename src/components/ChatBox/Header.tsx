'use client';
import React from 'react';
import styled from 'styled-components';

import Avatar from '@/components/Avatar';
import Interactable from '@/components/Interactable';
import Label from '@/components/Label';

import { X } from 'react-feather';

type Props = {
  avatarUrl: string;
  name: string;
  isAi?: boolean;
};

const Container = styled.section`
  display: flex;
  gap: 8px;
  align-items: center;

  height: fit-content;
  padding: 4px 16px;

  & > *:last-child {
    margin-left: auto;
  }
`;

const Name = styled.span`
  font-size: 1.25rem;
`;

const Header = ({ avatarUrl, name, isAi = false }: Props) => {
  return (
    <Container>
      <Avatar src={avatarUrl} />
      <Name>{name}</Name>
      {isAi && <Label>AI</Label>}
      <Interactable>
        <X size={'2rem'} />
      </Interactable>
    </Container>
  );
};

export default Header;
