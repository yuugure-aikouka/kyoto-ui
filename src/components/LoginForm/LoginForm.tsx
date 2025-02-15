'use client';
import React from 'react';
import styled from 'styled-components';

import TextInput from '@/components/TextInput';
import MultiStepButton from '@/components/MultiStepButton';
import BeatLoader from '@/components/BeatLoader';

const Container = styled.div`
  height: 564px;
  width: 964px;

  border-radius: 8px;

  background-color: var(--color-background);
  display: flex;
  padding: 16px;
  gap: 16px;

  & > * {
    width: 50%;
    /* flex: 1; */
  }
`;

const Hero = styled.div`
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  background-image: linear-gradient(
    10deg,
    hsl(245deg 98% 67%) 28%,
    hsl(245deg 94% 66%) 39%,
    hsl(245deg 91% 64%) 49%,
    hsl(245deg 88% 63%) 60%,
    hsl(245deg 85% 62%) 70%,
    hsl(245deg 86% 63%) 79%,
    hsl(245deg 88% 64%) 87%,
    hsl(245deg 90% 65%) 94%,
    hsl(245deg 92% 67%) 100%
  );

  display: grid;
  place-items: center;
  color: white;
  font-size: 2rem;
`;

const FormLayout = styled.form`
  display: grid;
  place-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const LoginForm = () => {
  const [email, setEmail] = React.useState<string>('');
  const onInputChange = (newValue: string) => {
    setEmail(newValue);
  };

  return (
    <Container>
      <Hero>anonawa</Hero>

      <FormLayout
        onSubmit={(event) => {
          event.preventDefault();
        }}>
        <FormContainer>
          <TextInput
            label="email:"
            value={email}
            onChangeCallback={onInputChange}
          />

          <MultiStepButton
            onClick={() => {}}
            idle={'send me a login link'}
            loading={<BeatLoader />}
            success="sent!"
          />
        </FormContainer>
      </FormLayout>
    </Container>
  );
};

export default LoginForm;
