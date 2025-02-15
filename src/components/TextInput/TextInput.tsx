'use client';
import React from 'react';
import styled from 'styled-components';
import useMeasure from '@/hooks/useMeasure';

import { AnimatePresence, motion } from 'motion/react';

const AnimationContainer = styled.div``;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Container = styled.div`
  background-color: var(--color-secondary);
  padding: 4px 8px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  gap: 4px;
`;

const Input = styled.input`
  border: none;
  color: var(--color-text);
  background-color: var(--color-secondary);
  width: 100%;

  &:focus {
    outline: none;
  }

  *:has(> &:focus) {
    outline: 2px dashed var(--color-outline);
    outline-offset: 1px;
  }
`;

const ErrorMessageContainer = styled.div`
  color: var(--color-danger);
  text-align: left;
`;

const OUTLINE_COLOR_MAPPER = (
  invalidMessage: string | undefined
): string => {
  if (!invalidMessage || invalidMessage == '') {
    return 'var(--color-primary)';
  }

  return 'var(--color-danger)';
};

type Props = {
  label?: string;
  value: string;
  type?: string;
  invalidMessage?: string;
  onChangeCallback: (newValue: string) => void;
};

const TextInput = ({
  label,
  value,
  type,
  invalidMessage,
  onChangeCallback,
}: Props) => {
  const labelId = React.useId();
  const layoutContainer = React.useRef<HTMLDivElement | null>(null);
  const [height] = useMeasure(layoutContainer);

  return (
    <AnimatePresence>
      <AnimationContainer
        as={motion.div}
        animate={{ height: `${height}px` }}>
        <Layout ref={layoutContainer}>
          <Container
            style={
              {
                '--color-outline':
                  OUTLINE_COLOR_MAPPER(invalidMessage),
              } as React.CSSProperties
            }>
            {label && <label htmlFor={labelId}>{label}</label>}
            <Input
              id={labelId}
              type={type}
              value={value}
              onChange={(event) => {
                onChangeCallback(event.target.value);
              }}
            />
          </Container>

          {invalidMessage !== '' && (
            <ErrorMessageContainer>
              {invalidMessage}
            </ErrorMessageContainer>
          )}
        </Layout>
      </AnimationContainer>
    </AnimatePresence>
  );
};

export default TextInput;
