import ChatLayout from '@/components/ChatLayout/ChatLayout';
import PartnerList from '@/components/PartnerList';
import ChatBox from '@/components/ChatBox';

import { getChat } from '@/mocks/chat';

const Page = () => {
  const { avatar_url, display_name } = getChat();

  return (
    <ChatLayout>
      <PartnerList />
      <ChatBox avatarUrl={avatar_url} name={display_name} />
    </ChatLayout>
  );
};

export default Page;
