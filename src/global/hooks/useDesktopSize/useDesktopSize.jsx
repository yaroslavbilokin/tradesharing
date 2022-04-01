import { useEffect, useState } from 'react';

const useDesktopSize = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 1000);
      };

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  return isDesktop;
};

export default useDesktopSize;
