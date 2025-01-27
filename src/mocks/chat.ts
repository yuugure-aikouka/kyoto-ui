const getChat = () => {
  return {
    avatar_url: '/images/obama-pfp.png',
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
  };
};

export { getChat };
