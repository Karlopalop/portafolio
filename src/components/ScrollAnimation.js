import React, { useEffect, useRef, useState } from 'react';

const ScrollAnimation = ({ 
  children, 
  animation = 'fade-in', 
  threshold = 0.1,
  delay = 0,
  duration = 0.6
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current; // Copiamos la referencia a una variable
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, delay]); // Ahora las dependencias son correctas

  return (
    <div 
      ref={ref} 
      className={`scroll-animation ${animation} ${isVisible ? 'visible' : ''}`}
      style={{ 
        '--animation-delay': `${delay}ms`,
        '--animation-duration': `${duration}s`
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;