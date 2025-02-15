'use client';
import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  display: grid;
  place-items: center;

  // fallback for dvh incase it isn't supported
  min-height: 100vh;
  min-height: 100dvh;

  padding: 16px;

  // https://www.joshwcomeau.com/gradient-generator/
  background-image: linear-gradient(
    45deg,
    hsl(245deg 82% 56%) 0%,
    hsl(245deg 85% 59%) 6%,
    hsl(245deg 89% 62%) 13%,
    hsl(245deg 93% 64%) 20%,
    hsl(245deg 98% 67%) 29%,
    hsl(245deg 94% 67%) 38%,
    hsl(245deg 91% 66%) 48%,
    hsl(245deg 87% 66%) 57%,
    hsl(245deg 84% 65%) 67%,
    hsl(245deg 85% 66%) 76%,
    hsl(245deg 85% 66%) 85%,
    hsl(245deg 85% 66%) 93%,
    hsl(245deg 86% 66%) 100%
  );
`;

type Props = {
  children: React.ReactNode;
};

const LoginLayout = ({ children }: Props) => {
  return <Layout>{children}</Layout>;
};

export default LoginLayout;
