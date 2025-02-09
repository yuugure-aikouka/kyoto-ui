'use client';
import React from 'react';
import styled from 'styled-components';
import ProfileCard from '@/components/ProfileCard';
import Interactable from '@/components/Interactable';
import Swipeable from '@/components/Swipeable';
import useRegularSearchData from '@/hooks/useRegularSearchData';

import { Check, X } from 'react-feather';
import { PotentialPartnerType } from '@/mocks/potential-partners';
import { AnimatePresence } from 'motion/react';
import { SwipeDirectionContext } from '@/contexts/SwipeDirection';

const Layout = styled.div`
  display: grid;
  place-items: center;

  padding: 16px;
`;

const MatchingSection = styled.section`
  width: min(424px, 96%);
  height: inherit;

  display: flex;
  justify-content: center;
  flex-direction: column;

  // the card stack container
  & > *:first-child {
    flex: 1;
    max-height: 648px;
  }
`;

const OptionSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  transform: translateY(-50%);
`;

const OptionWrapper = styled.div`
  background-color: var(--theme);
  color: var(--color-white);
  padding: 8px;
  border-radius: 50%;
`;

const CardStackContainer = styled.div`
  display: grid;

  // so that all of the cards stack on each other
  & > * {
    grid-column: 1;
    grid-row: 1;
  }
`;

const SwipeableCard = ({
  partner,
  removeCard,
}: {
  partner: PotentialPartnerType;
  removeCard: () => void;
}) => {
  return (
    <Swipeable handleDragEnd={removeCard}>
      <ProfileCard {...partner} />
    </Swipeable>
  );
};

const renderActiveProfileCards = (
  partners: PotentialPartnerType[],
  removeFirstPartner: () => void
): React.ReactNode => {
  const isFront = (index: number, length: number): boolean => {
    return length - 1 - index == 0;
  };

  const renderedCards = Math.min(2, partners.length);

  return (
    <AnimatePresence mode="sync">
      {partners
        .slice(0, renderedCards)
        .toReversed()
        .map((partner, index) => {
          if (isFront(index, renderedCards)) {
            return (
              <SwipeableCard
                key={partner.username}
                partner={partner}
                removeCard={removeFirstPartner}
              />
            );
          }
          return <ProfileCard key={partner.username} {...partner} />;
        })}
    </AnimatePresence>
  );
};

const Options = ({
  removeFirstPartner,
}: {
  removeFirstPartner: () => void;
}) => {
  const { switchDirection } = React.useContext(SwipeDirectionContext);

  return (
    <OptionSection>
      <Interactable
        onClick={() => {
          switchDirection('left');
          removeFirstPartner();
        }}>
        <OptionWrapper
          style={
            {
              '--theme': 'var(--color-danger)',
            } as React.CSSProperties
          }>
          <X size={'2rem'} />
        </OptionWrapper>
      </Interactable>

      <Interactable
        onClick={() => {
          switchDirection('right');
          removeFirstPartner();
        }}>
        <OptionWrapper
          style={
            {
              '--theme': 'var(--color-success)',
            } as React.CSSProperties
          }>
          <Check size={'2rem'} />
        </OptionWrapper>
      </Interactable>
    </OptionSection>
  );
};

const RegularSearch = () => {
  const [partners, removeFirstPartner] = useRegularSearchData();

  return (
    <Layout>
      <MatchingSection>
        <CardStackContainer>
          {renderActiveProfileCards(partners, removeFirstPartner)}
        </CardStackContainer>

        <Options removeFirstPartner={removeFirstPartner} />
      </MatchingSection>
    </Layout>
  );
};

export default RegularSearch;
