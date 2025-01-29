import React from 'react';

const useMeasure = (ref: React.RefObject<null | HTMLElement>) => {
  const [height, setHeight] = React.useState(0);
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const [entry] = entries;
      const rect = entry.target.getBoundingClientRect();
      setHeight(rect.height);
      setWidth(rect.width);
    });

    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
      setWidth(rect.width);
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref]);

  return { width, height };
};

export default useMeasure;
