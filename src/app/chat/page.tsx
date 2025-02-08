import ChatLayout from '@/components/ChatLayout/ChatLayout';
import PartnerList from '@/components/PartnerList';
import ChatBox from '@/components/ChatBox';
import { CurrentPartnerProvider } from '@/contexts/CurrentPartner';
import { ChatEnablementProvider } from '@/contexts/ChatEnablement';

const Page = () => {
  return (
    <CurrentPartnerProvider>
      <ChatEnablementProvider>
        <ChatLayout>
          <PartnerList />
          <ChatBox />
        </ChatLayout>
      </ChatEnablementProvider>
    </CurrentPartnerProvider>
  );
};

export default Page;
