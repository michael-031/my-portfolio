import { useEffect, useState } from 'react';

/**
 * Application Hook: useSplashScreen
 * Manages splash screen progress counter and body scroll lock.
 */
export function useSplashScreen({ onFinish, durationMs = 2400 }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 12) + 4;
        return next > 100 ? 100 : next;
      });
    }, 80);

    const timer = setTimeout(() => {
      document.body.style.overflow = 'unset';
      if (onFinish) onFinish();
    }, durationMs);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, [onFinish, durationMs]);

  return { progress };
}
