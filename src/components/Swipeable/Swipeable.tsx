'use client';
import React from 'react';
import styled from 'styled-components';

import { Container as InteractableContainer } from '@/components/Interactable';
import { motion, useMotionValue, useTransform } from 'motion/react';

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
`;

const Swipeable = ({ handleDragEnd, children }: Props) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(
    x,
    [-150, -120, 0, 120, 150],
    [0, 1, 1, 1, 0]
  );

  return (
    <Container
      as={motion.button}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      style={{ rotate, x, opacity }}
      onDragEnd={() => {
        if (Math.abs(x.get()) >= 150) {
          handleDragEnd();
        }
      }}>
      {children}
    </Container>
  );
};

export default Swipeable;
