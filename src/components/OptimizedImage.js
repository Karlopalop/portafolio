import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '',
  placeholderSrc = '/api/placeholder/300/200'
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`optimized-image ${className}`}>
      <LazyLoadImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        effect="blur"
        placeholderSrc={placeholderSrc}
        afterLoad={() => setLoaded(true)}
        className={`optimized-image__img ${loaded ? 'loaded' : 'loading'}`}
      />
    </div>
  );
};

export default OptimizedImage;