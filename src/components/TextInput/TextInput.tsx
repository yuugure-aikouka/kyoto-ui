'use client';
import React from 'react';
import styled from 'styled-components';

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
  background-color: var(--color-secondary);

  &:focus {
    outline: none;
  }
`;

type Props = {
  label?: string;
  value: string;
  onChangeCallback: (newValue: string) => void;
};

const TextInput = ({ label, value, onChangeCallback }: Props) => {
  const labelId = React.useId();

  return (
    <Container>
      {label && <label htmlFor={labelId}>{label}</label>}
      <Input
        id={labelId}
        value={value}
        onChange={(event) => {
          onChangeCallback(event.target.value);
        }}
      />
    </Container>
  );
};

export default TextInput;
