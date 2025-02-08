import ChatLayout from '@/components/ChatLayout/ChatLayout';
import SectionSwitcher from '@/contexts/SectionSwitcher';
import PartnerList from '@/components/PartnerList';
import ChatBox from '@/components/ChatBox';
import { CurrentPartnerProvider } from '@/contexts/CurrentPartner';
import { ChatEnablementProvider } from '@/contexts/ChatEnablement';

const Page = () => {
  return (
    <CurrentPartnerProvider>
      <ChatEnablementProvider>
        <SectionSwitcher>
          {/* each section has their own layout to ease the future changes */}
          <ChatLayout>
            <PartnerList />
            <ChatBox />
          </ChatLayout>
          <div>halo gan</div>
        </SectionSwitcher>
      </ChatEnablementProvider>
    </CurrentPartnerProvider>
  );
};

export default Page;
