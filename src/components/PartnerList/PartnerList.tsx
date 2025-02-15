'use client';
import React from 'react';
import styled from 'styled-components';

import PartnerPreviewChat, {
  PartnerPreviewType,
} from '@/components/PartnerPreviewChat';
import Interactable from '@/components/Interactable';
import ThemeToggle from '@/components/ThemeToggle';
import BREAKPOINTS_IN_PIXEL from '@/const/BREAKPOINTS';

import {
  ChevronRight,
  ChevronLeft,
  MessageCircle,
  Search,
} from 'react-feather';
import { ChatEnablementContext } from '@/contexts/ChatEnablement/ChatEnablement';
import { getPartnerList } from '@/mocks/partner';
import { SectionContext } from '@/contexts/SectionSwitcher';

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

type OptionSectionProps = {
  // styled component can't have boolean
  $expanded?: string;
};

const OptionSection = styled.section<OptionSectionProps>`
  position: sticky;
  top: 0;
  z-index: 1;

  border-bottom: 2px dashed var(--color-secondary);
  background-color: var(--color-background);

  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px;

  // tablet only
  // 48 rem = 768 / 16 -> tablet max size
  // prettier just keep messing the lint if i calculate it programmatically (cause of auto newline)
  @media (min-width: ${(425 + 1) / 16}rem) and (max-width: 48rem) {
    flex-direction: ${(props) =>
      props.$expanded == 'true' ? 'row' : 'column'};

    & > *:last-child {
      margin-left: ${(props) =>
        props.$expanded == 'true' ? 'auto' : '0'};
    }
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

const formatPartnerPreview = ({
  display_name,
  avatar_url,
  is_ai,
  last_chat,
  username,
}: {
  display_name: string;
  avatar_url: string;
  is_ai: boolean;
  last_chat: string;
  username: string;
}): PartnerPreviewType => {
  return {
    displayName: display_name,
    avatarSrc: avatar_url,
    isAi: is_ai,
    lastChat: last_chat,
    username,
  };
};

const Options = ({
  showDetail,
  toggleShowDetail,
}: {
  showDetail: boolean;
  toggleShowDetail: () => void;
}) => {
  const { switchMode } = React.useContext(SectionContext);

  return (
    // styled component props can't be a boolean
    <OptionSection $expanded={showDetail.toString()}>
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

      <ToggleExpand>
        <Interactable onClick={toggleShowDetail}>
          {!showDetail ? <ChevronRight /> : <ChevronLeft />}
        </Interactable>
      </ToggleExpand>
    </OptionSection>
  );
};

const PartnerList = () => {
  // mobile only state
  const [showDetail, toggleShowDetail] = useMobileResponsiveness();

  const partnerList = getPartnerList().map((entry) =>
    formatPartnerPreview(entry)
  );

  return (
    <Layout>
      <Options
        showDetail={showDetail}
        toggleShowDetail={toggleShowDetail}
      />

      <PartnersContainer>
        {partnerList.map((partnerPreview) => {
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
};

export default PartnerList;
