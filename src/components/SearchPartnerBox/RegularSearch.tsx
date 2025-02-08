'use client';
import React from 'react';
import styled from 'styled-components';
import ProfileCard from '@/components/ProfileCard';
import Interactable from '@/components/Interactable';
import Swipeable from '@/components/Swipeable';

import { Container as InteractableContainer } from '@/components/Interactable';
import { getPotentialPartners } from '@/mocks/potential-partners';
import { Check, X } from 'react-feather';
import { PotentialPartnerType } from '@/mocks/potential-partners';

const Layout = styled.div`
  width: 100%;

  display: grid;
  place-items: center;
  flex: 1;

  padding: 8px;
`;

const MatchingSection = styled.section`
  width: min(424px, 96%);

  & > *:first-child {
    height: min(96vh, 620px);
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
  ${InteractableContainer}:hover &, ${InteractableContainer}:focus & {
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

const usePotentialPartners = (): [
  PotentialPartnerType[],
  React.Dispatch<React.SetStateAction<PotentialPartnerType[]>>
] => {
  const [potentialPartners, setPotentialPartners] = React.useState<
    PotentialPartnerType[]
  >(getPotentialPartners());

  React.useEffect(() => {
    if (potentialPartners.length <= 5) {
      const newPotentialPartners = [
        ...potentialPartners,
        ...getPotentialPartners(),
      ];

      setPotentialPartners(newPotentialPartners);
    }
  }, [potentialPartners]);

  return [potentialPartners, setPotentialPartners];
};

const RegularSearch = () => {
  const [potentialPartners, setPotentialPartners] =
    usePotentialPartners();

  return (
    <Layout>
      <MatchingSection>
        <CardStackContainer>
          {potentialPartners.toReversed().map((partner, index) => {
            return (
              <SwipeableCard
                // todo: the key should be username
                // right now we use index cause of the useEffect on usePotentialPartners.
                key={index}
                partner={partner}
                removeCard={() => {
                  setPotentialPartners((currentPotentialPartners) =>
                    currentPotentialPartners.filter((_, index) => {
                      return index !== 0;
                    })
                  );
                }}
              />
            );
          })}
        </CardStackContainer>

        <OptionSection>
          <Interactable>
            <OptionWrapper
              style={
                {
                  '--theme': 'var(--color-danger)',
                } as React.CSSProperties
              }>
              <X size={'2rem'} />
            </OptionWrapper>
          </Interactable>

          <Interactable>
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
