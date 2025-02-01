import ChatLayout from '@/components/ChatLayout/ChatLayout';
import PartnerList from '@/components/PartnerList';
import ChatBox from '@/components/ChatBox';
import CurrentPartnerProvider from '@/contexts/CurrentPartnerProvider';

import { getPartnerList } from '@/mocks/partner';
import { PartnerPreviewType } from '@/components/PartnerPreviewChat';

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

const Page = () => {
  const partnerList = getPartnerList().map((entry) =>
    formatPartnerPreview(entry)
  );

  return (
    <CurrentPartnerProvider>
      <ChatLayout>
        <PartnerList partners={partnerList} />
        <ChatBox partners={partnerList} />
      </ChatLayout>
    </CurrentPartnerProvider>
  );
};

export default Page;
