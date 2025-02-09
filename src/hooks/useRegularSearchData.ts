import React from 'react';

import { PotentialPartnerType } from '@/mocks/potential-partners';
import { getPotentialPartners } from '@/mocks/potential-partners';

const useRegularSearchData = (): [
  PotentialPartnerType[],
  () => void
] => {
  const [potentialPartners, setPotentialPartners] = React.useState<
    PotentialPartnerType[]
  >(getPotentialPartners());

  const removeFirstPartner = () => {
    setPotentialPartners([
      ...potentialPartners.slice(1, potentialPartners.length),
    ]);
  };

  React.useEffect(() => {
    if (potentialPartners.length <= 5) {
      const newPotentialPartners = [
        ...potentialPartners,
        ...getPotentialPartners(),
      ];

      setPotentialPartners(newPotentialPartners);
    }
  }, [potentialPartners]);

  return [potentialPartners, removeFirstPartner];
};

export default useRegularSearchData;
