import React from 'react';

const useScrollToBottom = (ref) => {
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return scrollToBottom;
};
