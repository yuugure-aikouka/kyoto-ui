'use client';
import React from 'react';
import styled from 'styled-components';

import Interactable from '@/components/Interactable';

import { Send } from 'react-feather';

type Props = {
  onSubmit: (content: string) => void;
};

const Container = styled.section`
  /* outline: 2px dashed black; */
  padding: 12px 24px;
  /* overflow: visible; */
`;

const Form = styled.form`
  display: flex;
  align-items: center;

  border: 2px solid hsl(0 0 5%);
  border-radius: 24px;

  padding: 4px 16px;
`;

// todo: turn this into generic component
const StyledInput = styled.input`
  flex: 1;

  height: 36px;
  outline: none;
  border: none;
`;

const Input = ({ onSubmit }: Props) => {
  const [value, setValue] = React.useState<string>('');

  const submitAndClear = (): void => {
    onSubmit(value);
    setValue('');
  };

  return (
    <Container>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          submitAndClear();
        }}>
        <StyledInput
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        <Interactable>
          <Send />
        </Interactable>
      </Form>
    </Container>
  );
};

export default Input;
