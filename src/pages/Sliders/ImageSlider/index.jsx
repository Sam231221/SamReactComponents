import { useEffect, useState } from 'react';

import {
  ImageSlider,
  ImageSlider2,
} from '../../../components/5.Sliders/MediaSlider/ImageSlider';
import imageData from '../../../data/ImageData';
const index = () => {
  const [slides, setSLides] = useState([]);
  useEffect(() => {
    setSLides(imageData);
  }, []);
  return (
    <div>
      <ImageSlider slides={slides} autoplay={true} />
      <ImageSlider2 infinite timer={2000} stopOnManual>
        {/* <div className="cards">
                    <div className="card">1</div>
                    <div className="card">2</div>
                    <div className="card">3</div>
                </div>
                <div className="cards">
                    <div className="card">4</div>
                    <div className="card">5</div>
                    <div className="card">6</div>
                </div> */}
        <img
          src='https://c4.wallpaperflare.com/wallpaper/290/826/480/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg'
          alt=''
        />
        <img
          src='https://c4.wallpaperflare.com/wallpaper/290/826/480/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg'
          alt=''
        />
      </ImageSlider2>
    </div>
  );
};

export default index;
