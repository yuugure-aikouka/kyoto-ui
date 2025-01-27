'use client';
import React from 'react';
import styled from 'styled-components';

type AvatarProps = {
  src: string;
  size?: 'large' | 'medium' | 'small';
};

const AVATAR_SIZES = {
  small: `${36 / 16}rem`,
  medium: `${56 / 16}rem`,
  large: `${72 / 16}rem`,
};

const Img = styled.img`
  height: var(--size);
  aspect-ratio: 1;
`;

const Avatar = ({ src, size = 'medium' }: AvatarProps) => {
  return (
    <Img
      src={src}
      style={
        {
          '--size': AVATAR_SIZES[size],
        } as React.CSSProperties
      }
    />
  );
};

export default Avatar;
