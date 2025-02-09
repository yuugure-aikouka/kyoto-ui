'use client';
import React from 'react';
import styled from 'styled-components';

import { Container as InteractableContainer } from '@/components/Interactable';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { SwipeDirectionContext } from '@/contexts/SwipeDirection';

type Props = {
  handleDragEnd: () => void;
  children: React.ReactNode;
};

const Container = styled(InteractableContainer)`
  &:hover {
    cursor: grab;
  }

  &:active {
    cursor: grabbing;
  }

  display: grid;

  & > * {
    grid-column: 1;
    grid-row: 1;
  }
`;

const MarkerWrapper = styled.div`
  height: 100%;
  display: grid;
  place-items: center;

  & > * {
    grid-column: 1;
    grid-row: 1;
  }
`;

const Mark = styled(motion.span)`
  font-size: 4rem;
`;

// todo: this currently looks like a one-off component
const Swipeable = ({ handleDragEnd, children }: Props) => {
  // main card
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-75, 75], [-18, 18]);
  const opacity = useTransform(
    x,
    [-75, -50, 0, 50, 75],
    [0, 1, 1, 1, 0]
  );

  // marker
  const likeOpacity = useTransform(x, [0, 30], [0, 1]);
  const uninterestedOpacity = useTransform(x, [-30, 0], [1, 0]);
  const markScale = useTransform(x, [-30, 0, 30], [1.5, 0, 1.5]);

  const { direction, switchDirection } = React.useContext(
    SwipeDirectionContext
  );

  const exitAnimation =
    direction == 'right'
      ? {
          rotate: 18,
          x: 75,
        }
      : {
          rotate: -18,
          x: -75,
        };

  return (
    <Container
      as={motion.button}
      drag={true}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      style={{ rotate, x, opacity }}
      exit={{
        ...exitAnimation,
        transition: {
          duration: 0.35,
        },
      }}
      onDragEnd={() => {
        if (Math.abs(x.get()) >= 30) {
          switchDirection(x.get() > 0 ? 'right' : 'left');
          handleDragEnd();
        }
      }}>
      {children}

      <MarkerWrapper>
        <Mark style={{ opacity: likeOpacity, scale: markScale }}>
          💖
        </Mark>
        <Mark
          style={{
            opacity: uninterestedOpacity,
            scale: markScale,
          }}>
          👎
        </Mark>
      </MarkerWrapper>
    </Container>
  );
};

export default Swipeable;
