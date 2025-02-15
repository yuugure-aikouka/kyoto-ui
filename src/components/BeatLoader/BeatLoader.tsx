'use client';
import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  width: fit-content;
  height: 100%;
  margin: auto;

  padding-block: 4px;

  gap: 2px;
`;

const Breathing = keyframes`
  0% {
    transform: scale(0.5);
    opacity: 0.7;
  }
  100% {
    transform: scale(0.8);
    opacity: 1;
  }
`;

const OddCircle = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 50%;

  background-color: var(--color-white);
  animation: ${Breathing} 350ms infinite alternate linear;
`;

const EvenCircle = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 50%;

  background-color: var(--color-white);
  animation: ${Breathing} 350ms infinite alternate-reverse linear;
`;

const BeatLoader = () => {
  return (
    <Container>
      <OddCircle />
      <EvenCircle />
      <OddCircle />
    </Container>
  );
};

export default BeatLoader;
