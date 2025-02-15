export type PotentialPartnerType = {
  username: string;
  name: string;
  description: string;
  avatarSrc: string;
};

export const getPotentialPartners = (): PotentialPartnerType[] => {
  return [
    {
      username: 'milkers728',
      name: 'Barrack Obama',
      description: 'Looking for partners!',
      avatarSrc: '/images/Memoji-22.png',
    },
    {
      username: 'johnny_doe',
      name: 'Johnny Doe',
      description: 'Seeking fun and adventure!',
      avatarSrc: '/images/Memoji-01.png',
    },
    {
      username: 'claire_bear',
      name: 'Claire Bear',
      description: 'Open to new experiences!',
      avatarSrc: '/images/Memoji-03.png',
    },
    {
      username: 'lily_walker',
      name: 'Lily Walker',
      description: 'Excited to meet new people!',
      avatarSrc: '/images/Memoji-05.png',
    },
    {
      username: 'kyle_king',
      name: 'Kyle King',
      description: 'Let’s make some memories!',
      avatarSrc: '/images/Memoji-08.png',
    },
    {
      username: 'sarah_rose',
      name: 'Sarah Rose',
      description: 'Looking to connect!',
      avatarSrc: '/images/Memoji-12.png',
    },
    {
      username: 'bobby_grey',
      name: 'Bobby Grey',
      description: 'Adventure awaits!',
      avatarSrc: '/images/Memoji-14.png',
    },
    {
      username: 'emma_smith',
      name: 'Emma Smith',
      description: 'Always down for fun times!',
      avatarSrc: '/images/Memoji-18.png',
    },
    {
      username: 'mike_hughes',
      name: 'Mike Hughes',
      description: 'Ready for some good vibes!',
      avatarSrc: '/images/Memoji-20.png',
    },
    {
      username: 'rachel_white',
      name: 'Rachel White',
      description: 'Searching for exciting connections!',
      avatarSrc: '/images/Memoji-25.png',
    },
  ];
};
