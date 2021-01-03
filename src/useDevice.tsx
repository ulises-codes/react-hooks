import { useEffect, useState, useMemo } from 'react';

export default function useDevice() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);
  const [userAgent, setUserAgent] = useState('');
  const [device, setDevice] = useState('');

  useEffect(() => {
    if (typeof globalThis === 'undefined') return;

    const agent = navigator.userAgent;

    const mobileRegex = /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i;

    const mobile = mobileRegex.test(agent);

    setIsMobile(mobile);
    setUserAgent(agent);

    const deviceMatch = agent.match(mobileRegex);

    setDevice(deviceMatch ? deviceMatch[0] : 'Desktop');
  }, []);

  const obj = { isMobile, userAgent, device };

  return useMemo(() => obj, [isMobile, userAgent, device]);
}
