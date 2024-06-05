import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

export const ImageGallery = ({ images }) => {
  const [modal, setOpenModal] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };
  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(images.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === images.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <>
      <div className={modal ? 'modal open' : 'modal'}>
        <FontAwesomeIcon
          onClick={() => setOpenModal(false)}
          icon={faXmark}
          style={{ fontSize: '22px' }}
        />
        <img src={images[slideNumber].imgSrc} alt='' />
        <FontAwesomeIcon icon={faAngleLeft} onClick={() => prevSlide()} />
        <FontAwesomeIcon icon={faAngleRight} onClick={nextSlide} />
      </div>
      <div className='gallery'>
        {images.map((item, index) => {
          return (
            <div
              className='pics'
              onClick={() => handleOpenModal(index)}
              key={index}
            >
              <img src={item.imgSrc} style={{ width: '100%' }} />
            </div>
          );
        })}
      </div>
    </>
  );
};
