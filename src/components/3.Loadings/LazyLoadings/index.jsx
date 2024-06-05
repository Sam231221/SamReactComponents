import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { LazyImage } from './LazyImage';
const FlexContainer = styled.div`
  display: flex;
  row-gap: 2em;
  flex-wrap: wrap;
  column-gap: 10px;
  max-width: 1024px;
`;
const ImageContainer = styled.div`
  width: 400px;
  height: 300px;
  flex-shrink: 0;
`;
const images = [
  {
    src: 'https://images.pexels.com/photos/8333734/pexels-photo-8333734.jpeg?auto=compress&cs=tinysrgb&w=400&',
  },
  {
    src: 'https://images.pexels.com/photos/6075189/pexels-photo-6075189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    src: 'https://images.pexels.com/photos/6075155/pexels-photo-6075155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    src: 'https://images.pexels.com/photos/16949384/pexels-photo-16949384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    src: 'https://images.pexels.com/photos/8333734/pexels-photo-8333734.jpeg?auto=compress&cs=tinysrgb&w=400&',
  },
  {
    src: 'https://images.pexels.com/photos/6075189/pexels-photo-6075189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    src: 'https://images.pexels.com/photos/6075155/pexels-photo-6075155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    src: 'https://images.pexels.com/photos/16949384/pexels-photo-16949384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    src: 'https://images.pexels.com/photos/8333734/pexels-photo-8333734.jpeg?auto=compress&cs=tinysrgb&w=400&',
  },
  {
    src: 'https://images.pexels.com/photos/6075189/pexels-photo-6075189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    src: 'https://images.pexels.com/photos/6075155/pexels-photo-6075155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    src: 'https://images.pexels.com/photos/16949384/pexels-photo-16949384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    src: 'https://images.pexels.com/photos/8333734/pexels-photo-8333734.jpeg?auto=compress&cs=tinysrgb&w=400&',
  },
];

export default function index() {
  const [isLoading, setLoading] = useState(false);
  // const [images, setImages] = useState([])
  // const fetchImages = async () => {
  //     const images = await fetch("http://localhost:9000/images");
  //     console.log("Images: ", await images.json());
  //     setImages((await images.json()));

  // };

  // useEffect(() => {
  //     fetchImages();
  // }, []);

  return (
    <div>
      <FlexContainer>
        {images.map((image) => (
          <ImageContainer>
            <LazyImage image={image} />
          </ImageContainer>
        ))}
      </FlexContainer>
    </div>
  );
}
