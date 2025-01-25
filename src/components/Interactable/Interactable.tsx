'use client';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
  onClick?: () => void;
};

const Container = styled.span`
  &:hover {
    cursor: pointer;
  }
`;

function Interactable({ children, onClick }: Props) {
  return <Container onClick={onClick}>{children}</Container>;
}

export default Interactable;
