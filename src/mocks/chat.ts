const getChat = () => {
  return {
    avatar_url:
      'https://play-lh.googleusercontent.com/i8fGO7LrghUKcBCijVf09Vy_FET5-tCh35O6FTFjkHUMixnCRokmaKMZOKNvf4k2P3Y',
    display_name: 'barrack obama',
    username: 'milkers728',
    history: [
      {
        chat_id: '1',
        is_my_chat: false,
        content: 'how r u?',
        timestamp: 1737792062000,
      },
      {
        chat_id: '2',
        is_my_chat: true,
        content: "i'm good lol",
        timestamp: 1737825627000,
      },
      {
        chat_id: '3',
        is_my_chat: true,
        content: 'are you interested in building a project with me?',
        timestamp: 1737826759000,
      },
    ],
  };
};

export { getChat };
