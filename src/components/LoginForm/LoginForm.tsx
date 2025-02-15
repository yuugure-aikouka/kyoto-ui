'use client';
import React from 'react';
import styled from 'styled-components';

import TextInput from '@/components/TextInput';
import MultiStepButton from '@/components/MultiStepButton';
import BeatLoader from '@/components/BeatLoader';
import Avatar from '@/components/Avatar';

import { Commissioner, Nunito_Sans, Mynerve } from 'next/font/google';
import { isValidEmail } from '@/utils/regex-validation';

const titleFont = Commissioner({
  subsets: ['latin'],
  weight: ['400'],
});

const welcomeFont = Nunito_Sans({
  subsets: ['latin'],
  weight: ['700'],
});

const heroFont = Mynerve({
  subsets: ['latin'],
  weight: ['400'],
});

const Container = styled.div`
  height: 564px;
  width: min(964px, 100%);

  border-radius: 8px;

  background-color: var(--color-background);
  display: flex;
  padding: 16px;
  gap: 16px;

  & > *:first-child {
    width: 60%;
  }

  & > *:last-child {
    width: 40%;
  }

  @media (max-width: ${768 / 16}rem) {
    // hero section
    & > *:first-child {
      display: none;
    }

    & > *:last-child {
      flex: 1;
    }
  }
`;

const FormLayout = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: fit-content(24px) 1fr fit-content(24px);
  row-gap: 48px;

  padding-inline: min(16px, 10vw);
  padding-block: 8px;
`;

const FormContainer = styled.div`
  margin-inline: auto;
  max-width: 400px;
  min-width: 60%;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FormHeader = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

const FormBody = styled.div`
  text-align: center;
  text-wrap: pretty;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormFooter = styled.div`
  text-align: center;
  text-wrap: pretty;
`;

const Image = styled.img`
  height: 30px;
  aspect-ratio: 1;

  border-radius: 50%;
`;

const useLoginForm = () => {
  const [email, setEmail] = React.useState<string>('');
  const [invalidMessage, setInvalidMessage] =
    React.useState<string>('');

  const onInputChange = (newEmail: string) => {
    setEmail(newEmail);

    if (newEmail == '' || isValidEmail(newEmail)) {
      setInvalidMessage('');
      return;
    }

    setInvalidMessage("your email doesn't look right");
  };

  return { email, invalidMessage, onInputChange };
};

const LoginForm = () => {
  const { email, invalidMessage, onInputChange } = useLoginForm();

  return (
    <Container>
      <Hero />

      <FormLayout
        noValidate={true}
        onSubmit={(event) => {
          event.preventDefault();
        }}>
        <FormHeader style={{}}>
          <Image src="/images/logo.png" alt="anonawa logo" />
          <h3 className={titleFont.className}>anonawa</h3>
        </FormHeader>

        <FormBody>
          <div>
            <h2 className={welcomeFont.className}>welcome!</h2>
            enter your email address to sign-in.
          </div>

          <FormContainer>
            <TextInput
              label="email:"
              type="email"
              value={email}
              invalidMessage={invalidMessage}
              onChangeCallback={onInputChange}
            />

            <MultiStepButton
              // todo: wire this up with the corresponding API
              onClick={() => {
                if (!isValidEmail(email)) {
                  return false;
                }

                return true;
              }}
              idle={'send me a login link'}
              loading={<BeatLoader />}
              success="sent!"
            />
          </FormContainer>
        </FormBody>

        <FormFooter>
          <p>haven&apos;t registered yet?</p>
          <p>don&apos;t worry, you can still use this form!</p>
        </FormFooter>
      </FormLayout>
    </Container>
  );
};

const HeroSection = styled.div`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

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
  color: var(--color-white);
  font-size: 2rem;

  position: relative;
`;

const AvatarDisplay = styled.div`
  transform: scale(1.5);
  display: flex;
`;

const AvatarContainer = styled.div`
  border-radius: 50%;
  box-shadow: 2px 4px 8px hsl(0deg 0% 0% / 0.25);

  background-color: var(--bg-color);
  transform: var(--transform);

  z-index: var(--z-index);
`;

const HeroBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroBody>
        <AvatarDisplay>
          <AvatarContainer
            style={
              {
                '--bg-color': 'var(--color-white)',
                '--transform':
                  'translateX(20%) translateY(-20%) rotate(-3deg)',
              } as React.CSSProperties
            }>
            <Avatar size="extra-large" src="/images/Memoji-23.png" />
          </AvatarContainer>
          <AvatarContainer
            style={
              {
                '--bg-color': 'var(--color-white)',
                '--z-index': '1',
              } as React.CSSProperties
            }>
            <Avatar size="extra-large" src="/images/Memoji-22.png" />
          </AvatarContainer>
          <AvatarContainer
            style={
              {
                '--bg-color': 'var(--color-white)',
                '--transform':
                  'translateX(-20%) translateY(-20%) rotate(12deg)',
              } as React.CSSProperties
            }>
            <Avatar size="extra-large" src="/images/Memoji-05.png" />
          </AvatarContainer>
        </AvatarDisplay>

        <p className={heroFont.className}>come join the fun!</p>
      </HeroBody>
    </HeroSection>
  );
};

export default LoginForm;
