'use client';
import React from 'react';

type Props = {
  children: [React.ReactNode, React.ReactNode];
};

export type Mode = 'chat' | 'search';
export const SectionContext = React.createContext({
  mode: 'chat',
  switchMode: () => {},
} as {
  mode: Mode;
  switchMode: (mode: Mode) => void | null;
});

export const SectionSwitcherProvider = ({ children }: Props) => {
  const [mode, setMode] = React.useState<Mode>('search');
  const switchMode = (newMode: Mode) => {
    setMode(newMode);
  };

  // first children is the chat section
  // second children is the finding partner section
  let currentSection = children[0];
  if (mode == 'search') {
    currentSection = children[1];
  }

  return (
    <SectionContext value={{ mode, switchMode }}>
      {currentSection}
    </SectionContext>
  );
};
