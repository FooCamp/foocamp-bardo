import { useState, useEffect } from 'react';

export default function useViewport() {
  const [viewport, setViewport] = useState(undefined);

  useEffect(() => {
    function handleResize() {
      const newViewport = window.innerWidth <= 768 ? 'mobile' : 'desktop';
      setViewport(newViewport);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { viewport };
}
