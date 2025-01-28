'use client';
import React from 'react';
import styled, { keyframes } from 'styled-components';

import PartnerPreviewChat, {
  PartnerPreviewType,
} from '@/components/PartnerPreviewChat';
import Interactable from '@/components/Interactable';
import BREAKPOINTS_IN_PIXEL from '@/const/BREAKPOINTS';

import { ChevronRight } from 'react-feather';

export type PartnerPreviewListType = {
  partners: PartnerPreviewType[];
};

const Layout = styled.div`
  overflow-y: auto;
  padding-block: 16px;

  background-color: var(--color-background);
  border-right: 2px dashed var(--color-secondary);

  position: var(--position);
  z-index: 1;
  top: 0;
  bottom: 0;

  opacity: var(--opacity);
  pointer-events: var(--pointer-events);
`;

const PartnersContainer = styled.section`
  display: flex;
  flex-direction: column;

  gap: 8px;
`;

const BlurIn = keyframes`
  0% {
    backdrop-filter: blur(0px);
  }
  100% {
    backdrop-filter: blur(2px);
  }
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;

  animation: ${BlurIn} both 300ms;
`;

const ExpandButton = styled.div`
  width: fit-content;
  position: sticky;
  right: 0;
  /* top: 0; */
  /* bottom: 0; */
`;

const useMobileResponsiveness = (): [
  showDetail: boolean,
  toggleShowDetail: () => void
] => {
  // mobile only state
  const [showDetail, setShowDetail] = React.useState(false);

  React.useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth > BREAKPOINTS_IN_PIXEL.tablet) {
        setShowDetail(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleShowDetail = () => {
    setShowDetail((currentShowDetail) => {
      return !currentShowDetail;
    });
  };

  return [showDetail, toggleShowDetail];
};

function PartnerList({ partners }: PartnerPreviewListType) {
  // mobile only state
  const [showDetail, toggleShowDetail] = useMobileResponsiveness();

  return (
    <>
      {showDetail && (
        <>
          <Backdrop />
          <Layout
            style={
              {
                '--position': 'absolute',
              } as React.CSSProperties
            }>
            <ExpandButton>
              <Interactable onClick={toggleShowDetail}>
                <ChevronRight />
              </Interactable>
            </ExpandButton>
            <PartnersContainer>
              {partners.map((partnerPreview) => {
                return (
                  <PartnerPreviewChat
                    key={crypto.randomUUID()}
                    forceShowChatPreview={showDetail}
                    {...partnerPreview}
                  />
                );
              })}
            </PartnersContainer>
          </Layout>
        </>
      )}

      <Layout
        style={
          {
            '--position': 'relative',
            '--opacity': showDetail ? 0 : 1,
            '--pointer-events': showDetail ? 'none' : 'initial',
          } as React.CSSProperties
        }>
        <ExpandButton>
          <Interactable onClick={toggleShowDetail}>
            <ChevronRight />
          </Interactable>
        </ExpandButton>
        <PartnersContainer>
          {partners.map((partnerPreview) => {
            return (
              <PartnerPreviewChat
                key={crypto.randomUUID()}
                {...partnerPreview}
              />
            );
          })}
        </PartnersContainer>
      </Layout>
    </>
  );
}

export default PartnerList;
