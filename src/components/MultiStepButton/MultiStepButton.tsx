'use client';
import React from 'react';
import styled from 'styled-components';

import { motion, AnimatePresence } from 'motion/react';

const Container = styled.div``;

const Button = styled.button`
  width: 100%;
  overflow: hidden;
  position: relative;

  // reset button default style
  border: none;
  background: none;
  margin: 0;

  padding: 4px 8px;
  color: var(--color-white);
  background-color: var(--color-primary);
  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }
`;

type Props = {
  idle: string;
  loading: React.ReactNode;
  success: string;

  onClick: () => void;
};

function MultiStepButton({ idle, loading, success, onClick }: Props) {
  const [state, setState] = React.useState<
    'idle' | 'loading' | 'success'
  >('idle');

  const BUTTON_COPY = {
    idle,
    loading,
    success,
  };

  return (
    <Container>
      <Button
        disabled={state !== 'idle'}
        onClick={() => {
          setState('loading');
          onClick();

          setTimeout(() => {
            setState('success');
          }, 1750);

          setTimeout(() => {
            setState('idle');
          }, 3500);
        }}>
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={state}
            initial={{
              opacity: 0,
              y: -30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              y: 30,
            }}>
            {BUTTON_COPY[state]}
          </motion.div>
        </AnimatePresence>
      </Button>
    </Container>
  );
}

export default MultiStepButton;
