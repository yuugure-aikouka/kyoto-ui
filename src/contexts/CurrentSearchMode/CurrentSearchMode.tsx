'use client';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export type Mode = 'none' | 'regular' | 'random';
export const SearchModeContext = React.createContext({
  mode: 'none',
  switchMode: () => {},
} as {
  mode: Mode;
  switchMode: (mode: Mode) => void | null;
});

export const CurrentSearchModeProvider = ({ children }: Props) => {
  const [mode, setMode] = React.useState<Mode>('none');
  const switchMode = (newMode: Mode) => {
    setMode(newMode);
  };

  return (
    <SearchModeContext value={{ mode, switchMode }}>
      {children}
    </SearchModeContext>
  );
};
