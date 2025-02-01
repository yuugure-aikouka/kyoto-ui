import React from 'react';
import PATHS from '@/const/PATHS';

import { post } from '@/network';
import { Chat } from '@/components/ChatBox/ChatHistory';
import { getChat } from '@/mocks/chat';

const formatHistory = ({
  chat_id,
  is_my_chat,
  content,
  timestamp,
}: {
  chat_id: string;
  content: string;
  is_my_chat: boolean;
  timestamp: number;
}): Chat => {
  return {
    chatId: chat_id,
    content,
    timestamp,
    isMyChat: is_my_chat,
  };
};

const fetchChatData = (
  username: string
): {
  avatarUrl: string;
  name: string;
  username: string;
  isAi: boolean;
  history: Chat[];
} => {
  const { avatar_url, display_name, is_ai, history } =
    getChat(username);

  return {
    avatarUrl: avatar_url,
    name: display_name,
    username,
    isAi: is_ai,
    history: history.map((entry) => formatHistory(entry)),
  };
};

const chatToDialog = (chatHistory: Chat[]): string[] => {
  return chatHistory.map(({ isMyChat, content }) => {
    return JSON.stringify({
      them: isMyChat ? content : undefined,
      you: !isMyChat ? content : undefined,
    });
  });
};

const useChatData = (username: string) => {
  const { history, avatarUrl, isAi, name } = fetchChatData(username);

  const [chatHistory, setChatHistory] =
    React.useState<Chat[]>(history);
  const [isPartnerTyping, setIsPartnerTyping] = React.useState(false);

  const addNewChat = (
    content: string,
    isMyChat: boolean = true
  ): void => {
    setChatHistory((previousChatHistory) => {
      const newChatHistory = [...previousChatHistory];
      newChatHistory.push({
        chatId: crypto.randomUUID(),
        content,
        timestamp: Date.now(),
        isMyChat,
      });

      return newChatHistory;
    });
  };

  const getPartnerResponse = (content: string): void => {
    setIsPartnerTyping(true);

    const data = {
      message: content,
      history: chatToDialog(
        chatHistory.slice(
          Math.max(0, chatHistory.length - 25),
          chatHistory.length
        )
      ),
      character_name: name,
    };
    post({
      path: PATHS.chat_gemini,
      data,
      callback: (response) => {
        addNewChat(response.data?.data, false);
        setIsPartnerTyping(false);
      },
      errorHandler: (error: string) => {
        addNewChat(error, false);
        setIsPartnerTyping(false);
      },
    });
  };

  return {
    data: {
      name,
      avatarUrl,
      isAi,
      isPartnerTyping,
      history: chatHistory,
    },
    actions: {
      addNewChat,
      getPartnerResponse,
    },
  };
};

export default useChatData;
