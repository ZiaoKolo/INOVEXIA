import { useState, useEffect, useRef } from 'react';

const ScrollReveal = ({ 
  children, 
  className = '',
  animation = 'fade-up',
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay]);

  const animations = {
    'fade-up': 'translate-y-8 opacity-0',
    'fade-down': '-translate-y-8 opacity-0',
    'fade-left': 'translate-x-8 opacity-0',
    'fade-right': '-translate-x-8 opacity-0',
    'zoom-in': 'scale-95 opacity-0',
    'zoom-out': 'scale-105 opacity-0'
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ${
        isVisible ? 'translate-y-0 translate-x-0 scale-100 opacity-100' : animations[animation]
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
