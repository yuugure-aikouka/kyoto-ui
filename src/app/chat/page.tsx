import ChatLayout from '@/components/ChatLayout/ChatLayout';
import SearchPartnersLayout from '@/components/SearchPartnersLayout';
import SearchModeList from '@/components/SearchModeList';
import SearchPartnerBox from '@/components/SearchPartnerBox';
import PartnerList from '@/components/PartnerList';
import ChatBox from '@/components/ChatBox';
import { CurrentPartnerProvider } from '@/contexts/CurrentPartner';
import { ChatEnablementProvider } from '@/contexts/ChatEnablement';
import { SectionSwitcherProvider } from '@/contexts/SectionSwitcher';
import { CurrentSearchModeProvider } from '@/contexts/CurrentSearchMode';

const Page = () => {
  return (
    <CurrentPartnerProvider>
      <ChatEnablementProvider>
        <SectionSwitcherProvider>
          {/* each section has their own layout to ease the future changes */}
          <ChatLayout>
            {/* todo: perhaps we could move the partner list state into a provider */}
            <PartnerList />
            <ChatBox />
          </ChatLayout>
          {/* -- end of chat section -- */}

          {/* we use the provider at this level cuz it does not have any network call */}
          <CurrentSearchModeProvider>
            <SearchPartnersLayout>
              <SearchModeList />
              <SearchPartnerBox />
            </SearchPartnersLayout>
          </CurrentSearchModeProvider>
          {/* -- end of search partner section -- */}
        </SectionSwitcherProvider>
      </ChatEnablementProvider>
    </CurrentPartnerProvider>
  );
};

export default Page;
