import React, { useRef, useEffect, useState } from 'react';

const ScrollAnimation = ({ children, animateIn = 'flipInX', className = '' }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Toggle visibility based on intersection so the animation
          // can replay when the element re-enters the viewport.
          setVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`overflow-hidden ${className} ${visible ? `animate-${animateIn} opacity-100` : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
