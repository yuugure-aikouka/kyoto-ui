'use client';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export type Direction = 'left' | 'right';
export const SwipeDirectionContext = React.createContext({
  direction: 'left',
  switchDirection: () => {},
} as {
  direction: Direction;
  switchDirection: (newDirection: Direction) => void | null;
});

export const SwipeDirectionProvider = ({ children }: Props) => {
  const [direction, setDirection] = React.useState<Direction>('left');

  const switchDirection = (newDirection: Direction) => {
    setDirection(newDirection);
  };

  return (
    <SwipeDirectionContext value={{ direction, switchDirection }}>
      {children}
    </SwipeDirectionContext>
  );
};
