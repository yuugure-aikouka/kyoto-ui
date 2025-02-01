const MOCK_CHAT: {
  [key: string]: {
    avatar_url: string;
    display_name: string;
    username: string;
    is_ai: boolean;
    history: {
      chat_id: string;
      is_my_chat: boolean;
      content: string;
      timestamp: number;
    }[];
  };
} = {
  milkers728: {
    avatar_url: '/images/Memoji-22.png',
    display_name: 'barrack obama',
    username: 'milkers728',
    is_ai: true,
    history: [
      {
        chat_id: '2',
        is_my_chat: false,
        content: "i'm obama, the ceo of mcdonalds",
        timestamp: 1737791012000,
      },
      {
        chat_id: '1',
        is_my_chat: false,
        content: 'how r u?',
        timestamp: 1737792062000,
      },
    ],
  },
  moon_embrace: {
    username: 'moon_embrace',
    display_name: 'Hina Shima',
    avatar_url: '/images/Memoji-15.png',
    is_ai: true,
    history: [
      {
        chat_id: '1',
        is_my_chat: false,
        content: 'moshi moshii~',
        timestamp: 1737791012000,
      },
    ],
  },
  skywalker11: {
    username: 'skywalker11',
    display_name: 'Luke Skywalker',
    avatar_url: '/images/Memoji-01.png',
    is_ai: true,
    history: [
      {
        chat_id: '1',
        is_my_chat: true,
        content: 'I am a Jedi.',
        timestamp: 1737801012000,
      },
      {
        chat_id: '2',
        is_my_chat: false,
        content: 'The Force will be with you.',
        timestamp: 1737802012000,
      },
    ],
  },
  lone_ranger: {
    username: 'lone_ranger',
    display_name: 'John Doe',
    avatar_url: '/images/Memoji-02.png',
    is_ai: true,
    history: [
      {
        chat_id: '1',
        is_my_chat: false,
        content: 'I ride alone.',
        timestamp: 1737813012000,
      },
    ],
  },
  techno_guru: {
    username: 'techno_guru',
    display_name: 'Bruce Wayne',
    avatar_url: '/images/Memoji-04.png',
    is_ai: true,
    history: [
      {
        chat_id: '1',
        is_my_chat: true,
        content: 'I am Batman.',
        timestamp: 1737824012000,
      },
      {
        chat_id: '2',
        is_my_chat: false,
        content: 'I am the night.',
        timestamp: 1737824232000,
      },
    ],
  },
  storm_chaser: {
    username: 'storm_chaser',
    display_name: 'Annie Gale',
    avatar_url: '/images/Memoji-05.png',
    is_ai: true,
    history: [
      {
        chat_id: '1',
        is_my_chat: false,
        content: 'Ready to chase the storm!',
        timestamp: 1737835012000,
      },
    ],
  },
  fire_king: {
    username: 'fire_king',
    display_name: 'Jon Snow',
    avatar_url: '/images/Memoji-07.png',
    is_ai: true,
    history: [
      {
        chat_id: '1',
        is_my_chat: false,
        content: 'Winter is coming...',
        timestamp: 1737846012000,
      },
    ],
  },
  dragon_slayer: {
    username: 'dragon_slayer',
    display_name: 'Daenerys Targaryen',
    avatar_url: '/images/Memoji-08.png',
    is_ai: true,
    history: [
      {
        chat_id: '1',
        is_my_chat: true,
        content: 'Dracarys!',
        timestamp: 1737857012000,
      },
      {
        chat_id: '2',
        is_my_chat: false,
        content: 'I will set the world on fire.',
        timestamp: 1737959012000,
      },
    ],
  },
  galaxy_walker: {
    username: 'galaxy_walker',
    display_name: 'Rayna Walker',
    avatar_url: '/images/Memoji-09.png',
    is_ai: true,
    history: [
      {
        chat_id: '1',
        is_my_chat: false,
        content: 'The universe is vast!',
        timestamp: 1737868012000,
      },
    ],
  },
  moonlit_dreamer: {
    username: 'moonlit_dreamer',
    display_name: 'Sora Akane',
    avatar_url: '/images/Memoji-03.png',
    is_ai: true,
    history: [
      {
        chat_id: '1',
        is_my_chat: false,
        content: 'Stars guide me...',
        timestamp: 1737791012000,
      },
    ],
  },
  soul_stealer: {
    username: 'soul_stealer',
    display_name: 'Kuroshi Nakamura',
    avatar_url: '/images/Memoji-10.png',
    is_ai: true,
    history: [
      {
        chat_id: '1',
        is_my_chat: false,
        content: 'I take what’s mine.',
        timestamp: 1737879012000,
      },
    ],
  },
  serenity_rose: {
    username: 'serenity_rose',
    display_name: 'Florence Willow',
    avatar_url: '/images/Memoji-11.png',
    is_ai: true,
    history: [
      {
        chat_id: '1',
        is_my_chat: false,
        content: 'Peace is a journey.',
        timestamp: 1737889812000,
      },
    ],
  },
  cosmic_rider: {
    username: 'cosmic_rider',
    display_name: 'Ethan Wilder',
    avatar_url: '/images/Memoji-12.png',
    is_ai: true,
    history: [
      {
        chat_id: '1',
        is_my_chat: true,
        content: 'I travel the cosmos.',
        timestamp: 1737890812000,
      },
    ],
  },
  whirlwind_dancer: {
    username: 'whirlwind_dancer',
    display_name: 'Zara Wind',
    avatar_url: '/images/Memoji-13.png',
    is_ai: true,
    history: [
      {
        chat_id: '1',
        is_my_chat: false,
        content: 'The wind carries me!',
        timestamp: 1737901812000,
      },
    ],
  },
  shadow_scribe: {
    username: 'shadow_scribe',
    display_name: 'Amaya Shade',
    avatar_url: '/images/Memoji-14.png',
    is_ai: true,
    history: [
      {
        chat_id: '1',
        is_my_chat: false,
        content: 'Words are my weapon.',
        timestamp: 1737912812000,
      },
    ],
  },
  mystic_eyes: {
    username: 'mystic_eyes',
    display_name: 'Nina Starling',
    avatar_url: '/images/Memoji-16.png',
    is_ai: true,
    history: [
      {
        chat_id: '1',
        is_my_chat: false,
        content: 'The stars hold the answers.',
        timestamp: 1737923812000,
      },
    ],
  },
  illusion_master: {
    username: 'illusion_master',
    display_name: 'Galen Frost',
    avatar_url: '/images/Memoji-17.png',
    is_ai: true,
    history: [
      {
        chat_id: '1',
        is_my_chat: true,
        content: 'Nothing is as it seems.',
        timestamp: 1737934812000,
      },
    ],
  },
  wild_thunder: {
    username: 'wild_thunder',
    display_name: 'Kai Thunderstorm',
    avatar_url: '/images/Memoji-18.png',
    is_ai: true,
    history: [
      {
        chat_id: '1',
        is_my_chat: false,
        content: 'Let the storm rage!',
        timestamp: 1737945812000,
      },
    ],
  },
  dreamweaver7: {
    username: 'dreamweaver7',
    display_name: 'Elara Dreamstorm',
    avatar_url: '/images/Memoji-19.png',
    is_ai: true,
    history: [
      {
        chat_id: '1',
        is_my_chat: true,
        content: 'Dreams are my reality.',
        timestamp: 1737956812000,
      },
    ],
  },
  whisper_wing: {
    username: 'whisper_wing',
    display_name: 'Lily Featherstone',
    avatar_url: '/images/Memoji-06.png',
    is_ai: true,
    history: [
      {
        chat_id: '1',
        is_my_chat: false,
        content: 'Silence speaks louder than words.',
        timestamp: 1737791012000,
      },
    ],
  },
};

export const getChat = (username: string) => {
  return (
    MOCK_CHAT[username] ?? {
      username: 'dreamweaver7',
      display_name: 'Elara Dreamstorm',
      avatar_url: '/images/Memoji-19.png',
      is_ai: true,
      history: [
        {
          chat_id: '1',
          is_my_chat: true,
          content: 'Dreams are my reality.',
          timestamp: 1737956812000,
        },
      ],
    }
  );
};
