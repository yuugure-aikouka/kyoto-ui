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
import { AnimatePresence } from 'motion/react';
import { SwipeDirectionContext } from '@/contexts/SwipeDirection';

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

  const { switchDirection } = React.useContext(SwipeDirectionContext);

  return (
    <Layout>
      <MatchingSection>
        <CardStackContainer>
          <AnimatePresence mode="sync">
            {potentialPartners
              .slice(0, Math.min(3, potentialPartners.length))
              .toReversed()
              .map((partner, index) => {
                if (
                  Math.min(3, potentialPartners.length) - 1 - index !=
                  0
                ) {
                  return (
                    <ProfileCard
                      key={partner.username}
                      {...partner}
                    />
                  );
                }

                return (
                  <SwipeableCard
                    key={partner.username}
                    partner={partner}
                    removeCard={() => {
                      setPotentialPartners(
                        (currentPotentialPartners) =>
                          currentPotentialPartners.filter(
                            (_, index) => {
                              return index !== 0;
                            }
                          )
                      );
                    }}
                  />
                );
              })}
          </AnimatePresence>
        </CardStackContainer>

        <OptionSection>
          <Interactable
            onClick={() => {
              switchDirection('left');
              setPotentialPartners((currentPotentialPartners) =>
                currentPotentialPartners.filter((_, index) => {
                  return index !== 0;
                })
              );
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
              setPotentialPartners((currentPotentialPartners) =>
                currentPotentialPartners.filter((_, index) => {
                  return index !== 0;
                })
              );
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
