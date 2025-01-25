import ChatLayout from '@/components/ChatLayout/ChatLayout';
import PartnerList from '@/components/PartnerList';
import ChatBox from '@/components/ChatBox';

import { getChat } from '@/mocks/chat';
import { Chat } from '@/components/ChatBox/ChatHistory';

const formatHistory = ({
  chat_id,
  is_my_chat,
  content,
  timestamp,
}: {
  chat_id: string;
  content: string;
  is_my_chat: boolean;
  timestamp: number;
}): Chat => {
  return {
    chatId: chat_id,
    content,
    timestamp,
    isMyChat: is_my_chat,
  };
};

const Page = () => {
  const { avatar_url, display_name, history } = getChat();

  return (
    <ChatLayout>
      <PartnerList />
      <ChatBox
        history={history.map((entry) => formatHistory(entry))}
        avatarUrl={avatar_url}
        name={display_name}
      />
    </ChatLayout>
  );
};

export default Page;
