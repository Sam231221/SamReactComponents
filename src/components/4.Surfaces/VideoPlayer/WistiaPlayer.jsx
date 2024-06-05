import React, { useRef, useEffect } from 'react';
import 'wistia-video-element';

const WistiaPlayer = ({ videoId }) => {
  return (
    <wistia-video
      controls
      src='https://wesleyluyten.wistia.com/medias/mwa64nb8p1'
    ></wistia-video>
  );
};

export default WistiaPlayer;
