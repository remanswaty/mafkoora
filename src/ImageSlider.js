import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LazyLoad from 'react-lazy-load';
import placeholderImage from '../public/img/placeholder-image.jpg';

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleSwipeLeft = () => {
    setCurrentImageIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      return newIndex;
    });
  };

  const handleSwipeRight = () => {
    setCurrentImageIndex((prevIndex) => {
      const newIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      return newIndex;
    });
  };

  return (
    <div className="slider-container">
      <button onClick={handleSwipeLeft}><ArrowBackIosIcon fontSize='large' /></button>
        <LazyLoad offset={200} debounce={false} once={true}>
          <img src={images[currentImageIndex]} alt="Slider Image" />
        </LazyLoad>
      <button onClick={handleSwipeRight}><ArrowForwardIosIcon fontSize='large' /></button>
    </div>
  );
};

export default ImageSlider;
