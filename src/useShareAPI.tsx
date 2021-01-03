import { useEffect, useState } from 'react';

export default function useShareAPI() {
  const [navigator, setNavigator] = useState<Navigator>();
  useEffect(() => {
    if (typeof window === undefined) return;

    setNavigator(window.navigator);
  }, []);

  async function share(shareData: ShareData) {
    if (!navigator) return undefined;

    try {
      await navigator.share(shareData);
    } catch (err) {
      if (err.name !== 'AbortError') {
        return console.error('ERROR WHILE TRYING TO SHARE: ', err);
      }
    }
  }

  return { share, canShare: navigator ? !!navigator.share : false };
}
