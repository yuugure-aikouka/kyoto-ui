'use client';
import styled from 'styled-components';

import Interactable from '@/components/Interactable';

import { Send } from 'react-feather';

const Container = styled.section`
  /* outline: 2px dashed black; */
  padding: 12px 24px;
  /* overflow: visible; */
`;

const Wrapper = styled.div`
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

const Input = () => {
  return (
    <Container>
      <Wrapper>
        <StyledInput />
        <Interactable>
          <Send />
        </Interactable>
      </Wrapper>
    </Container>
  );
};

export default Input;
