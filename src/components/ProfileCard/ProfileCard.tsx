'use client';
import React from 'react';
import styled from 'styled-components';
import Avatar from '@/components/Avatar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  background-color: var(--color-dark);
  color: var(--color-white);

  border-radius: 16px;
  overflow: hidden;

  outline: 2px dashed var(--color-secondary);
  /* outline-offset: 4px; */
`;

const BackgroundImage = styled.div`
  height: 96px;
  background-color: var(--color-purple);
`;

const AvatarWrapper = styled.div`
  // extra-large in avatar is 80/16 rem
  // 16px came from padding
  margin-top: calc(-${40 / 16}rem - 16px);

  width: fit-content;
  background-color: var(--color-dark);
  border-radius: 50%;

  outline: 2px dashed var(--color-white);
  outline-offset: 2px;
`;

const InformationSection = styled.section`
  display: flex;
  flex-direction: column;

  padding: 16px;
  gap: 16px;
`;

const BioContainer = styled.div``;

type Props = {
  avatarSrc: string;
  name: string;
  description: string;
};

const ProfileCard = ({ avatarSrc, name, description }: Props) => {
  return (
    <Container>
      <BackgroundImage />

      <InformationSection>
        <AvatarWrapper>
          <Avatar src={avatarSrc} size="extra-large" />
        </AvatarWrapper>

        <BioContainer>
          <h3>{name}</h3>
          <p>{description}</p>
        </BioContainer>
      </InformationSection>
    </Container>
  );
};

export default ProfileCard;
