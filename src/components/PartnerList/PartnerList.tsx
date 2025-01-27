'use client';
import React from 'react';
import styled from 'styled-components';

import PartnerPreviewChat, {
  PartnerPreviewType,
} from '@/components/PartnerPreviewChat';

type Props = {
  partners: PartnerPreviewType[];
};

const Layout = styled.div`
  overflow: auto;
  border: 2px dashed var(--color-primary);
  // this is only temporary
  // todo: remove / update this in the development ticket of partner list UI
  /* display: grid;
  place-content: center; */
`;

const PartnersContainer = styled.section`
  display: flex;
  flex-direction: column;

  gap: 8px;
`;

function PartnerList({ partners }: Props) {
  return (
    <Layout>
      <PartnersContainer>
        {partners.map((partnerPreview) => {
          return (
            <PartnerPreviewChat
              key={crypto.randomUUID()}
              {...partnerPreview}
            />
          );
        })}
      </PartnersContainer>
    </Layout>
  );
}

export default PartnerList;
