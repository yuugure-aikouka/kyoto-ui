import React from 'react';
import BREAKPOINTS_IN_PIXEL from '@/const/BREAKPOINTS';

const useIsMobile = (
  breakpoint: number = BREAKPOINTS_IN_PIXEL.mobile
): boolean => {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth <= breakpoint) {
        setIsMobile(true);
        return;
      }

      setIsMobile(false);
    };

    // to trigger effects on consumer components according to whether or not
    // user is in mobile screen
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
