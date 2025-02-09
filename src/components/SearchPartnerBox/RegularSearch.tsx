'use client';
import React from 'react';
import styled from 'styled-components';
import ProfileCard from '@/components/ProfileCard';
import Interactable from '@/components/Interactable';
import Swipeable from '@/components/Swipeable';
import useRegularSearchData from '@/hooks/useRegularSearchData';

import { Container as InteractableContainer } from '@/components/Interactable';
import { Check, X } from 'react-feather';
import { PotentialPartnerType } from '@/mocks/potential-partners';
import { AnimatePresence } from 'motion/react';
import { SwipeDirectionContext } from '@/contexts/SwipeDirection';

const Layout = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  place-items: center;

  padding: 16px;
`;

const MatchingSection = styled.section`
  width: min(424px, 96%);
  height: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;

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

  transition: transform 250ms var(--ease-out);
  ${InteractableContainer}:hover & {
    transform: translateY(-10%);
  }
`;

const CardStackContainer = styled.div`
  display: grid;

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

const isTheFirstPartnerReversed = (
  index: number,
  length: number
): boolean => {
  return length - 1 - index == 0;
};

const renderActiveProfileCards = (
  partners: PotentialPartnerType[],
  removeFirstPartner: () => void
): React.ReactNode => {
  const renderedCards = Math.min(2, partners.length);

  return (
    <AnimatePresence mode="sync">
      {partners
        .slice(0, renderedCards)
        .toReversed()
        .map((partner, index) => {
          if (isTheFirstPartnerReversed(index, renderedCards)) {
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

const RegularSearch = () => {
  const { switchDirection } = React.useContext(SwipeDirectionContext);
  const [partners, removeFirstPartner] = useRegularSearchData();

  return (
    <Layout>
      <MatchingSection>
        <CardStackContainer>
          {renderActiveProfileCards(partners, removeFirstPartner)}
        </CardStackContainer>

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
      </MatchingSection>
    </Layout>
  );
};

export default RegularSearch;
