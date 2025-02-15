'use client';
import React from 'react';
import styled from 'styled-components';

import Interactable from '@/components/Interactable';
import ThemeToggle from '@/components/ThemeToggle';
import ModeCard from '@/components/ModeCard';

import { Mode as SearchMode } from '@/contexts/CurrentSearchMode';
import { MessageCircle, Search } from 'react-feather';
import { SectionContext } from '@/contexts/SectionSwitcher';
import { SearchModeContext } from '@/contexts/CurrentSearchMode';

const Layout = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  background-color: var(--color-background);
  border-right: 2px dashed var(--color-secondary);
`;

const ModeList = styled.section`
  display: flex;
  flex-direction: column;

  padding: 16px;
  gap: 16px;
`;

const OptionSection = styled.section`
  position: sticky;
  top: 0;
  z-index: 1;

  border-bottom: 2px dashed var(--color-secondary);
  background-color: var(--color-background);

  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px;
`;

const Options = () => {
  const { switchMode } = React.useContext(SectionContext);

  return (
    <OptionSection>
      <ThemeToggle />

      <Interactable
        onClick={() => {
          switchMode('chat');
        }}>
        <MessageCircle size={`${22 / 16}rem`} />
      </Interactable>

      <Interactable
        onClick={() => {
          switchMode('search');
        }}>
        <Search size={`${22 / 16}rem`} />
      </Interactable>
    </OptionSection>
  );
};

type Mode = {
  title: string;
  description: string;
  illustration: string;
  id: SearchMode;
};

// for now, we don't save the available mode in the server
const MODES: Mode[] = [
  {
    title: 'Find Partners',
    description: 'Find your ultimate partner based on your criteria!',
    illustration: '👧🔍',
    id: 'regular',
  },
  {
    title: 'Random',
    description: 'Get randomly matched to someone.',
    illustration: '🎲',
    id: 'random',
  },
];

const SearchModeList = () => {
  const { switchMode } = React.useContext(SearchModeContext);

  return (
    <Layout>
      <Options />

      <ModeList>
        {MODES.map(({ id, title, description, illustration }) => {
          return (
            <Interactable
              key={id}
              onClick={() => {
                switchMode(id);
              }}>
              <ModeCard title={title} description={description}>
                {illustration}
              </ModeCard>
            </Interactable>
          );
        })}
      </ModeList>
    </Layout>
  );
};

export default SearchModeList;
