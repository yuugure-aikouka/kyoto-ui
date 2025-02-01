'use client';
import React from 'react';
import styled from 'styled-components';
import Label from '@/components/Label';

import { Container } from '@/components/Avatar/styled-components';

type AvatarProps = {
  src: string;
  size?: 'large' | 'medium' | 'small';
  isAi?: boolean;
};

const AVATAR_SIZES = {
  small: `${36 / 16}rem`,
  medium: `${48 / 16}rem`,
  large: `${62 / 16}rem`,
};

const Img = styled.img`
  display: block;
  position: relative;
`;

const Avatar = ({
  src,
  size = 'medium',
  isAi = false,
}: AvatarProps) => {
  return (
    <Container
      style={
        {
          '--size': AVATAR_SIZES[size],
        } as React.CSSProperties
      }>
      {isAi && <Label>AI</Label>}
      <Img src={src} />
    </Container>
  );
};

export default Avatar;
