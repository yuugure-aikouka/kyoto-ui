'use client';
import React from 'react';

type NewPartnerType = {
  newUsername: string | null;
  newAvatarUrl: string | null;
  newName: string | null;
  newIsAi: boolean;
};

type CurrentPartnerType = {
  username: string | null;
  avatarUrl: string | null;
  name: string | null;
  isAi: boolean;
  syncCurrentPartner: (partner: NewPartnerType) => void | null;
};

type Props = {
  children: React.ReactNode;
};

const BLANK_STRING = '';

export const CurrentPartnerContext = React.createContext({
  username: BLANK_STRING,
  avatarUrl: BLANK_STRING,
  name: BLANK_STRING,
  isAi: false,
  syncCurrentPartner: () => {},
} as CurrentPartnerType);

const CurrentPartnerProvider = ({ children }: Props) => {
  const [name, setName] = React.useState<string | null>(null);
  const [username, setUsername] = React.useState<string | null>(null);
  const [avatarUrl, setAvatarUrl] = React.useState<string | null>(
    null
  );
  const [isAi, setIsAi] = React.useState<boolean>(false);

  const syncCurrentPartner = (partner: NewPartnerType): void => {
    setUsername(partner.newUsername);
    setAvatarUrl(partner.newAvatarUrl);
    setName(partner.newName);
    setIsAi(partner.newIsAi);
  };

  return (
    <CurrentPartnerContext
      value={{ username, avatarUrl, name, isAi, syncCurrentPartner }}>
      {children}
    </CurrentPartnerContext>
  );
};

export default CurrentPartnerProvider;
