import React from 'react';
import './index.css';
import { ImageGallery } from './ImageGallery';
import pic1 from '../../assets/images/pic1.jpg';
import pic2 from '../../assets/images/pic2.jpg';
import pic3 from '../../assets/images/pic3.jpg';
import pic4 from '../../assets/images/pic4.jpg';
import pic5 from '../../assets/images/pic5.jpg';
import pic6 from '../../assets/images/pic6.jpg';
let images = [
  {
    id: 1,
    alt: 'pic1',
    imgSrc: pic1,
  },
  {
    id: 2,
    alt: 'pic2',
    imgSrc: pic2,
  },
  {
    id: 3,
    alt: 'pic3',
    imgSrc: pic3,
  },
  {
    id: 4,
    alt: 'pic4',
    imgSrc: pic4,
  },
  {
    id: 5,
    alt: 'pic5',
    imgSrc: pic5,
  },
  {
    id: 6,
    alt: 'pic6',
    imgSrc: pic6,
  },
];
const index = () => {
  return (
    <div>
      <br />
      <h1>Image Gallery</h1>
      <br /> <br />
      <ImageGallery images={images} />
    </div>
  );
};

export default index;
