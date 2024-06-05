import React from 'react';
import ReactPlayer from 'react-player';
export default function ReactVideoPlayer() {
  return (
    <div>
      <ReactPlayer
        controls
        url='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
      />
    </div>
  );
}
