'use client';
import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  title: string;
  description?: string;
};

const Container = styled.div`
  background-color: var(--color-purple);
  color: var(--color-white);

  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 16px;
  border-radius: 12px;
`;

const IllustrationWrapper = styled.div`
  font-size: 3rem;
  align-self: center;
`;

const ModeInformationWrapper = styled.div``;

const ModeCard = ({ children, title, description }: Props) => {
  return (
    <Container>
      <IllustrationWrapper>{children}</IllustrationWrapper>
      <ModeInformationWrapper>
        <h3>{title}</h3>
        <p>{description}</p>
      </ModeInformationWrapper>
    </Container>
  );
};

export default ModeCard;
