import React from 'react';

const useScrollBottom = (
  ref: React.RefObject<null | HTMLDivElement>,
  trigger: unknown
) => {
  React.useEffect(() => {
    const scrollToBottom = () => {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    };
    scrollToBottom();
  }, [ref, trigger]);
};

export default useScrollBottom;
