import ChatLayout from '@/components/ChatLayout/ChatLayout';
import PartnerList from '@/components/PartnerList';
import ChatBox from '@/components/ChatBox';

const Page = () => {
  return (
    <ChatLayout>
      <PartnerList />
      <ChatBox />
    </ChatLayout>
  );
};

export default Page;
