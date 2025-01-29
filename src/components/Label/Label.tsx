'use client';
import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  // in the future, we could add more
  theme?: 'primary';
};

const COLOR_MAPPER = {
  primary: '--color-primary',
};

const Container = styled.span`
  border-radius: 6px;
  background-color: var(--color-primary);
  width: fit-content;

  padding: 2px 6px;
`;

const Label = ({ children, theme = 'primary' }: Props) => {
  return (
    <Container
      style={
        {
          '--color-theme': `var(${COLOR_MAPPER[theme]})`,
        } as React.CSSProperties
      }>
      {children}
    </Container>
  );
};

export default Label;
