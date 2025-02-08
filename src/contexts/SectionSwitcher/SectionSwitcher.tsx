'use client';
import React from 'react';

type Props = {
  children: [React.ReactNode, React.ReactNode];
};

export const SectionContext = React.createContext({
  mode: 'chat',
  switchMode: () => {},
} as {
  mode: 'chat' | 'search';
  switchMode: (mode: 'chat' | 'search') => void | null;
});

function SectionSwitcher({ children }: Props) {
  const [mode, setMode] = React.useState<'chat' | 'search'>('chat');
  const switchMode = (newMode: 'chat' | 'search') => {
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
}

export default SectionSwitcher;
