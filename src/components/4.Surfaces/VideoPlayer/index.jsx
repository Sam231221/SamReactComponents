import React from 'react';
import './index.css';
import { VideoPlayer } from './VideoPlayer';
import ReactVideoPlayer from './ReactVideoPlayer';
import WistiaPlayer from './WistiaPlayer';

import video1 from '../../assets/videos/Video.mp4';
import video2 from '../../assets/videos/Video1.mp4';

const videos = [
  {
    name: 'Video1',
    src: video1,
    tracks: [
      {
        lang: 'en',
        src: 'src/components/VideoPlayer/assets/subtitles.vtt',
      },
      {
        lang: 'np',
        src: 'assets/subtitles2.vtt',
      },
    ],
  },

  {
    name: 'Video2',
    src: video2,
    tracks: [
      {
        lang: 'en',
        src: 'src/components/VideoPlayer/assets/subtitles.vtt',
      },
      {
        lang: 'np',
        src: 'assets/subtitles2.vtt',
      },
    ],
  },
];

export default function index() {
  return (
    <div>
      <h1 className='mt-5'>Custom Video Player</h1>
      {videos.map((video, i) => (
        <VideoPlayer
          captions={video.tracks}
          src={video.src}
          width={'100%'}
          height={'100%'}
        />
      ))}

      <br />
      <br />
      <h1>ReactVideoPlayer</h1>
      <ReactVideoPlayer />

      <h1>Google Drive</h1>
      <iframe
        src='https://drive.google.com/file/d/1ZbHKec9U2DHdU0-zH1lqt2IEoWQTyANu/preview'
        width='640'
        height='480'
      ></iframe>

      <h1>Wistia Player</h1>
      <WistiaPlayer />
    </div>
  );
}
