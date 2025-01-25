'use client';
import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Container = styled.button`
  // reset button default style
  border: none;
  background: none;

  &:hover {
    cursor: pointer;
  }
`;

function Interactable({ children, onClick }: Props) {
  return <Container onClick={onClick}>{children}</Container>;
}

export default Interactable;
