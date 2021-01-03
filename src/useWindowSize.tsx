import { useState, useEffect } from 'react';

export default function useWindowSize() {
  const isClient = typeof globalThis !== undefined;

  const getSize = () => ({
    width: isClient ? globalThis.innerWidth : undefined,
    height: isClient ? globalThis.innerHeight : undefined,
  });

  const [windowSize, setWindowSize] = useState(getSize());

  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => setWindowSize(getSize());

    globalThis.addEventListener('resize', handleResize);

    return () => globalThis.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
