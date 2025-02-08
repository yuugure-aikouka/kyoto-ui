'use client';
import React from 'react';
import styled from 'styled-components';

import { Container as InteractableContainer } from '@/components/Interactable';
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from 'motion/react';

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

  position: relative;
  isolation: isolate;
`;

const MarkerWrapper = styled.div`
  position: absolute;
  inset: 0;

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

  return (
    <AnimatePresence mode="wait">
      <Container
        as={motion.button}
        drag={true}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        style={{ rotate, x, opacity }}
        exit={{
          opacity: 0,
        }}
        onDragEnd={() => {
          if (Math.abs(x.get()) >= 75) {
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
    </AnimatePresence>
  );
};

export default Swipeable;
