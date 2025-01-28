'use client';
import React from 'react';
import styled from 'styled-components';
import Avatar from '@/components/Avatar';
import Interactable from '@/components/Interactable';

import { CurrentPartnerContext } from '@/components/CurrentPartnerProvider';

export type PartnerPreviewType = {
  avatarSrc: string;
  isAi: boolean;
  displayName: string;
  username: string;
  lastChat: string;
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

  padding-inline-start: 16px;
  // HACK: this property is to center the preview chat
  // currently, the default memoji avatars contain large paddings
  // todo: fix should be applied when we finally decided the avatar system
  padding-inline-end: 48px;
`;

const ChatPreview = styled.section``;

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
}: PartnerPreviewType) => {
  const { username: activePartnerUsername, syncCurrentPartner } =
    React.useContext(CurrentPartnerContext);

  return (
    <Interactable
      onClick={() => {
        syncCurrentPartner({
          newAvatarUrl: avatarSrc,
          newIsAi: isAi,
          newName: displayName,
          newUsername: username,
        });
      }}>
      <Container>
        {username == activePartnerUsername && <Backdrop />}
        <PreviewContainer>
          <Avatar size="large" src={avatarSrc} isAi={isAi} />
          <ChatPreview>
            <p>
              <strong>{displayName}</strong>
            </p>
            <p>{lastChat}</p>
          </ChatPreview>
        </PreviewContainer>
      </Container>
    </Interactable>
  );
};

export default PartnerPreviewChat;
