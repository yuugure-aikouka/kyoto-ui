'use client';
import React from 'react';
import styled from 'styled-components';

import PartnerPreviewChat, {
  PartnerPreviewType,
} from '@/components/PartnerPreviewChat';
import Interactable from '@/components/Interactable';
import ThemeToggle from '@/components/ThemeToggle';
import BREAKPOINTS_IN_PIXEL from '@/const/BREAKPOINTS';

import { ChevronRight, ChevronLeft } from 'react-feather';
import { ChatEnablementContext } from '@/components/ChatLayout/ChatEnablementProvider';

export type PartnerPreviewListType = {
  partners: PartnerPreviewType[];
  isMobile?: boolean;
};

const Layout = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;

  background-color: var(--color-background);
  border-right: 2px dashed var(--color-secondary);
`;

const PartnersContainer = styled.section`
  display: flex;
  flex-direction: column;

  gap: 8px;

  @media (max-width: ${425 / 16}rem) {
    // 2px came from layout's border-right
    width: calc(100vw - 2px);
  }
`;

const OptionSection = styled.section`
  position: sticky;
  top: 0;
  z-index: 1;

  border-bottom: 2px dashed var(--color-secondary);
  background-color: var(--color-background);

  display: flex;
  align-items: center;

  padding: 24px;

  & > *:first-child {
    margin-right: auto;
  }
`;

const ToggleExpand = styled.div`
  display: none;

  // tablet only
  // 48 rem = 768 / 16 -> tablet max size
  // prettier just keep messing the lint if i calculate it programmatically (cause of auto newline)
  @media (min-width: ${(425 + 1) / 16}rem) and (max-width: 48rem) {
    display: flex;
    align-items: center;
  }
`;

const useMobileResponsiveness = (): [
  showDetail: boolean,
  toggleShowDetail: () => void
] => {
  const { isChatActive, setIsChatActive } = React.useContext(
    ChatEnablementContext
  );

  React.useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth > BREAKPOINTS_IN_PIXEL.tablet) {
        setIsChatActive(true);
      }
      if (window.innerWidth <= BREAKPOINTS_IN_PIXEL.mobile) {
        setIsChatActive(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsChatActive]);

  const toggleShowDetail = () => {
    setIsChatActive(!isChatActive);
  };

  return [!isChatActive, toggleShowDetail];
};

function PartnerList({ partners }: PartnerPreviewListType) {
  // mobile only state
  const [showDetail, toggleShowDetail] = useMobileResponsiveness();

  return (
    <Layout>
      <OptionSection>
        <ThemeToggle />

        <ToggleExpand>
          <Interactable onClick={toggleShowDetail}>
            {!showDetail ? <ChevronRight /> : <ChevronLeft />}
          </Interactable>
        </ToggleExpand>
      </OptionSection>

      <PartnersContainer
      // style={
      //   {
      //     '--width': isMobile ? '100vw' : 'initial',
      //   } as React.CSSProperties
      // }
      >
        {partners.map((partnerPreview) => {
          return (
            <PartnerPreviewChat
              forceShowChatPreview={showDetail}
              key={crypto.randomUUID()}
              {...partnerPreview}
            />
          );
        })}
      </PartnersContainer>
    </Layout>
  );
}

export default PartnerList;
