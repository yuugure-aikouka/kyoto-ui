'use client';
import React from 'react';
import styled, { keyframes } from 'styled-components';

import { range } from '@/utils/array';

type Props = {
  size?: 'small' | 'medium' | 'large';
  duration?: number;
};

const SIZE_MAPPER = {
  small: `${4 / 16}rem`,
  medium: `${8 / 16}rem`,
  large: `${12 / 16}rem`,
};

const Container = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;

  height: ${24 / 16}rem;
`;

const Waiting = keyframes`
  0% {
    transform: translateY(-100%);
  }
  50% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const Circle = styled.span`
  height: var(--size);
  width: var(--size);

  background-color: var(--color-text);
  border-radius: 50%;

  animation: ${Waiting} var(--duration) 1 var(--ease-out) both;
  animation-delay: var(--delay);
`;

const TypingAnimation = ({
  size = 'small',
  duration = 300,
}: Props) => {
  const [key, setKey] = React.useState(crypto.randomUUID());

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setKey(crypto.randomUUID());
      // 3 -> number of circle
    }, duration * (3 + 1));

    return () => {
      window.clearInterval(intervalId);
    };
  });

  return (
    <Container key={key}>
      {range(3).map((id) => {
        return (
          <Circle
            key={id}
            style={
              {
                '--size': SIZE_MAPPER[size],
                '--duration': `${duration}ms`,
                '--delay': `${id * duration}ms`,
              } as React.CSSProperties
            }
          />
        );
      })}
    </Container>
  );
};

export default TypingAnimation;
