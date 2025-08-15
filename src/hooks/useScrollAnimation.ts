import { useEffect, useRef } from 'react';

export const useFadeIn = <T extends HTMLElement = HTMLDivElement>(delay: number = 0) => {
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    const element = elementRef.current as unknown as HTMLElement;
    if (!element) return;

    // Set initial invisible state
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
            }, delay);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [delay]);

  return elementRef as React.MutableRefObject<T | null>;
};

export const usePopUpAnimation = <T extends HTMLElement = HTMLDivElement>(delay: number = 0) => {
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    const element = elementRef.current as unknown as HTMLElement;
    if (!element) return;

    // Set initial invisible state with stronger transform
    element.style.opacity = '0';
    element.style.transform = 'translateY(60px) scale(0.8)';
    element.style.transition = 'opacity 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0) scale(1)';
            }, delay);
          }
        });
      },
      { threshold: 0.1 } // Lower threshold so it triggers later when scrolling
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [delay]);

  return elementRef as React.MutableRefObject<T | null>;
};