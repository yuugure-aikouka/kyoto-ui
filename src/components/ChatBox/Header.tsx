'use client';
import React from 'react';
import styled from 'styled-components';

import Avatar from '@/components/Avatar';
import Interactable from '@/components/Interactable';

import { X } from 'react-feather';

type Props = {
  avatarUrl: string;
  name: string;
};

const Container = styled.section`
  display: flex;
  gap: 8px;
  align-items: center;

  height: fit-content;
  padding: 4px 16px;
  outline: 2px dashed black;
`;

const Name = styled.span`
  font-size: 1.25rem;

  margin-right: auto;
`;

const Header = ({ avatarUrl, name }: Props) => {
  return (
    <Container>
      <Avatar src={avatarUrl} />
      <Name>{name}</Name>
      <Interactable>
        <X size={'2rem'} />
      </Interactable>
    </Container>
  );
};

export default Header;
