'use client';
import React from 'react';
import styled from 'styled-components';

import ThemeToggle from '@/components/ThemeToggle';

const Container = styled.section`
  background-color: var(--color-primary);
  padding: 16px;

  display: flex;
  align-items: center;
  & > * {
    margin-left: auto;
  }
`;

const Header = () => {
  return (
    <Container>
      <ThemeToggle />
    </Container>
  );
};

export default Header;
