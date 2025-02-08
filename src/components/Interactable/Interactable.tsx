'use client';
import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const Container = styled.button`
  // reset button default style
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  color: inherit;
  text-align: inherit;

  &:hover {
    cursor: pointer;
  }
`;

function Interactable({ children, onClick }: Props) {
  return <Container onClick={onClick}>{children}</Container>;
}

export default Interactable;
