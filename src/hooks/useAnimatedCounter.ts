import { useState, useEffect } from 'react';

export function useAnimatedCounter(end: number, duration = 2000, start = 0, isActive = false) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!isActive) return;
    let startTime: number;
    let frame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, start, isActive]);

  return count;
}
