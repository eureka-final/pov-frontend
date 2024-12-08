import { useCallback, useEffect, useState } from 'react';

type windowSizeType = {
  width: number | undefined;
  height: number | undefined;
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<windowSizeType>({ width: undefined, height: undefined });

  const handleReSizer = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleReSizer);
    handleReSizer();
    return () => window.removeEventListener('resize', handleReSizer);
  }, []);

  return windowSize;
};

export default useWindowSize;
