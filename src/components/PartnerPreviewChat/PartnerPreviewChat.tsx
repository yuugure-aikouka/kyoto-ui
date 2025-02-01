'use client';
import React from 'react';
import styled from 'styled-components';
import Avatar from '@/components/Avatar';
import Interactable from '@/components/Interactable';

import { CurrentPartnerContext } from '@/contexts/CurrentPartnerProvider';
import { ChatEnablementContext } from '@/contexts/ChatEnablementProvider/ChatEnablementProvider';

export type PartnerPreviewType = {
  avatarSrc: string;
  isAi: boolean;
  displayName: string;
  username: string;
  lastChat: string;
  forceShowChatPreview?: boolean;
};

const Container = styled.div`
  position: relative;
  isolation: isolate;

  // reset button default style from interactable
  text-align: left;
`;

const PreviewContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 16px;

  --base-inline-padding: 16px;
  padding-inline-start: var(--base-inline-padding);
  // HACK: this property is to center the preview chat
  // currently, the default memoji avatars contain large paddings
  // todo: fix should be applied when we finally decided the avatar system
  padding-inline-end: calc(var(--base-inline-padding) * 1.5);

  & > *:first-child {
    flex-shrink: 0;
  }

  & > *:last-child {
    flex-shrink: 1;
  }
`;

const ResponsiveChatPreview = styled.section`
  // tablet only
  // 48 rem = 768 / 16 -> tablet max size
  // prettier just keep messing the lint if i calculate it programmatically (cause of auto newline)
  @media (min-width: ${(425 + 1) / 16}rem) and (max-width: 48rem) {
    display: none;
  }
`;

const Backdrop = styled.div`
  background-color: var(--color-text);
  opacity: 0.15;

  width: 100%;
  height: 100%;
  position: absolute;
`;

const PartnerPreviewChat = ({
  avatarSrc,
  isAi,
  displayName,
  lastChat,
  username,
  forceShowChatPreview = false,
}: PartnerPreviewType) => {
  const { username: activePartnerUsername, syncCurrentPartner } =
    React.useContext(CurrentPartnerContext);
  const { setIsChatActive } = React.useContext(ChatEnablementContext);

  return (
    <Interactable
      onClick={() => {
        syncCurrentPartner({
          newAvatarUrl: avatarSrc,
          newIsAi: isAi,
          newName: displayName,
          newUsername: username,
        });
        setIsChatActive(true);
      }}>
      <Container>
        {username == activePartnerUsername && <Backdrop />}
        <PreviewContainer>
          <Avatar size="large" src={avatarSrc} isAi={isAi} />

          {!forceShowChatPreview && (
            <ResponsiveChatPreview>
              <p>
                <strong>{displayName}</strong>
              </p>
              <p>{lastChat}</p>
            </ResponsiveChatPreview>
          )}

          {forceShowChatPreview && (
            <section>
              <p>
                <strong>{displayName}</strong>
              </p>
              <p>{lastChat}</p>
            </section>
          )}
        </PreviewContainer>
      </Container>
    </Interactable>
  );
};

export default PartnerPreviewChat;
