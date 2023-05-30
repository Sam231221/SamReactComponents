import { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom';
import video1 from '../../assets/videos/Video.mp4'
export const VideoPlayer = () => {
  const [caption, setCaption] = useState('')
  const playPauseBtn = useRef(null)
  const theaterBtn = useRef(null)
  const fullScreenBtn = useRef(null)
  const miniPlayerBtn = useRef(null)
  const muteBtn = useRef(null)
  const captionsBtn = useRef(null)
  const speedBtn = useRef(null)
  const currentTimeElem = useRef(null)
  const totalTimeElem = useRef(null)
  const previewImg = useRef(null)
  const thumbnailImg = useRef(null)
  const volumeSlider = useRef(null)
  const videoContainer = useRef(null)
  const timelineContainer = useRef(null)
  const video = useRef(null)

  document.addEventListener("keydown", e => {
    const tagName = document.activeElement.tagName.toLowerCase()

    if (tagName === "input") return

    //Do not let someone who turned on capslock or hold shift affect this 
    switch (e.key.toLowerCase()) {
      //spacebar
      case " ":
        if (tagName === "button") return
      case "k":
        togglePlay()
        break
      case "f":
        toggleFullScreenMode()
        break
      case "t":
        toggleTheaterMode()
        break
      case "i":
        toggleMiniPlayerMode()
        break
      case "m":
        toggleMute()
        break
      case "arrowleft":
      case "j":
        skip(-5)
        break
      case "arrowright":
      case "l":
        skip(5)
        break
      case "c":
        toggleCaptions()
        break
    }
  })

  /*
  Play/Pause functinality
  */
  const togglePlay = () => {
    video.current.paused ? video.current.play() : video.current.pause()
  }
  const handlePlay = () => {
    videoContainer.current.classList.remove("paused")
  }
  const handlePause = () => {
    videoContainer.current.classList.add("paused")
  }

  /*
  View Modes
  */
  function toggleTheaterMode() {
    videoContainer.current.classList.toggle("theater")
  }

  function toggleFullScreenMode() {
    if (document.fullscreenElement == null) {
      videoContainer.current.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

  function toggleMiniPlayerMode() {
    if (videoContainer.current.classList.contains("mini-player")) {
      document.exitPictureInPicture()
      console.log('sfsd:', document.exitPictureInPicture())
    } else {
      //this function causes picture in picture view-
      video.current.requestPictureInPicture()
      console.log('sdfs:', video.current.requestPictureInPicture)
    }
  }
  document.addEventListener("fullscreenchange", () => {
    videoContainer.current.classList.toggle("full-screen", document.fullscreenElement)
  })

  /*
  Volume
  */
  const toggleMute = () => {
    video.current.muted = !video.current.muted
  }
  const handleVolumeSliderOnInput = (e) => {
    video.current.volume = e.target.value
    video.current.muted = e.target.value === 0
  }
  const handleVideoOnVolumeChange = () => {
    volumeSlider.current.value = video.current.volume
    let volumeLevel
    if (video.current.muted || video.current.volume === 0) {
      volumeSlider.current.value = 0
      volumeLevel = "muted"
    } else if (video.volume >= 0.5) {
      volumeLevel = "high"
    } else {
      volumeLevel = "low"
    }

    videoContainer.current.dataset.volumeLevel = volumeLevel

  }

  /*----------------------------------------------------------
 4. Duration
-------------------------------------------------------------*/
  //once the video is loaded
  const handleVideoOnLoadedData = () => {
    totalTimeElem.current.textContent = formatDuration(video.current.duration)
  }

  //function that gets called in every time changes
  const handleVideoOnTimeUpdate = () => {
    currentTimeElem.current.textContent = formatDuration(video.current.currentTime)
    const percent = video.current.currentTime / video.current.duration
    timelineContainer.current.style.setProperty("--progress-position", percent)
  }

  const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2,
  })
  function formatDuration(time) {
    const seconds = Math.floor(time % 60)
    const minutes = Math.floor(time / 60) % 60
    const hours = Math.floor(time / 3600)
    if (hours === 0) {
      return `${minutes}:${leadingZeroFormatter.format(seconds)}`
    } else {
      return `${hours}:${leadingZeroFormatter.format(minutes)}:
         ${leadingZeroFormatter.format(seconds)}`
    }
  }

  function skip(duration) {
    video.current.currentTime += duration
  }


  /* ---------------------------------------------------
   5. Captions
  -----------------------------------------------------*/

  function toggleCaptions() {
    let captions = video.current.textTracks[0]
    console.log(captions)
    captions.mode = "hidden"
    const isHidden = captions.mode === "hidden"
    captions.mode = isHidden ? "showing" : "hidden"
    videoContainer.current.classList.toggle("captions", isHidden)
  }


  /*
6. Playback Speed
*/


  function changePlaybackSpeed() {
    let newPlaybackRate = video.current.playbackRate + 0.25
    if (newPlaybackRate > 2) newPlaybackRate = 0.25
    video.current.playbackRate = newPlaybackRate
    speedBtn.current.textContent = `${newPlaybackRate}x`
  }

  /*-------------------------------------------------------------
   Timeline PreviewImage And tHUMB Indicator
  ----------------------------------------------------------------*/
  let isScrubbing = false
  let wasPaused

  document.addEventListener("mouseup", e => {
    if (isScrubbing) toggleScrubbing(e)
  })
  function toggleScrubbing(e) {
    console.log('f:', e)
    const rect = timelineContainer.current.getBoundingClientRect()
    const percent = Math.min(Math.max(0, e.screenX - rect.x), rect.width) / rect.width
    console.log(percent)
    isScrubbing = (e.buttons & 1) === 1
    console.log(isScrubbing)
    videoContainer.current.classList.toggle("scrubbing", isScrubbing)
    if (isScrubbing) {
      wasPaused = video.current.paused
      video.current.pause()
    } else {
      video.current.currentTime = percent * video.current.duration
      if (!wasPaused) video.current.play()
    }

    handleTimelineUpdate(e)
  }



  document.addEventListener("mousemove", e => {
    if (isScrubbing) handleTimelineUpdate(e)
  })

  function handleTimelineUpdate(e) {
    console.log('sdfsdf:', e)
    //e has different propety name than in plain js
    //i.e e.x to e.screenX
    const rect = timelineContainer.current.getBoundingClientRect()
    const percent = Math.min(Math.max(0, e.screenX - rect.x), rect.width) / rect.width
    console.log(percent)
    // const previewImgNumber = Math.max(
    //   1,
    //   Math.floor((percent * video.current.duration) / 10)
    // )
    // const previewImgSrc = `assets/previewImgs/preview${previewImgNumber}.jpg`
    // previewImg.current.src = previewImgSrc
    timelineContainer.current.style.setProperty("--preview-position", percent)

    if (isScrubbing) {
      e.preventDefault()
      // thumbnailImg.current.src = previewImgSrc
      timelineContainer.current.style.setProperty("--progress-position", percent)
    }
  }


  return (
    <div ref={videoContainer} className="video-container paused" data-volume-level="high">
      <img className="thumbnail-img" />

      {/* <!--All the Controls here--> */}
      <div className="video-controls-container">


        {/* <!-- full vertical line with image preview--> */}
        <div
          onMouseDown={(e) => toggleScrubbing(e)}
          onMouseMove={(e) => handleTimelineUpdate(e)}
          ref={timelineContainer} className="timeline-container">
          <div className="timeline">
            <img ref={previewImg} className="preview-img" />
            <div className="thumb-indicator"></div>
          </div>
        </div>


        <div className="controls">

          <button onClick={togglePlay} ref={playPauseBtn} className="play-pause-btn">
            <svg className="play-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
            </svg>
            <svg className="pause-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" />
            </svg>
          </button>

          <div className="volume-container">
            <button onClick={toggleMute} ref={muteBtn} className="mute-btn">
              <svg className="volume-high-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
              </svg>
              <svg className="volume-low-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z" />
              </svg>
              <svg className="volume-muted-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z" />
              </svg>
            </button>
            <input onInput={(e) => handleVolumeSliderOnInput(e)} ref={volumeSlider} className="volume-slider" type="range" min="0" max="1" step="any" value="1" />
          </div>

          <div className="duration-container">
            <div ref={currentTimeElem} className="current-time">0:00</div>
            /
            <div ref={totalTimeElem} className="total-time"></div>
          </div>

          <button onClick={toggleCaptions} ref={captionsBtn} className="captions-btn">
            <svg viewBox="0 0 24 24">
              <path fill="currentColor" d="M18,11H16.5V10.5H14.5V13.5H16.5V13H18V14A1,1 0 0,1 17,15H14A1,1 0 0,1 13,14V10A1,1 0 0,1 14,9H17A1,1 0 0,1 18,10M11,11H9.5V10.5H7.5V13.5H9.5V13H11V14A1,1 0 0,1 10,15H7A1,1 0 0,1 6,14V10A1,1 0 0,1 7,9H10A1,1 0 0,1 11,10M19,4H5C3.89,4 3,4.89 3,6V18A2,2 0 0,0 5,20H19A2,2 0 0,0 21,18V6C21,4.89 20.1,4 19,4Z" />
            </svg>
          </button>

          {/* <!--wide-btn is used beacuse 1.25x has more width that 1x so.--> */}
          <button ref={speedBtn} onClick={changePlaybackSpeed} className="speed-btn wide-btn">
            1x
          </button>
          <button ref={miniPlayerBtn} onClick={toggleMiniPlayerMode} className="mini-player-btn">
            <svg viewBox="0 0 24 24">
              <path fill="currentColor" d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-7h9v6h-9z" />
            </svg>
          </button>
          <button ref={theaterBtn} onClick={toggleTheaterMode} className="theater-btn">
            <svg className="tall" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z" />
            </svg>
            <svg className="wide" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z" />
            </svg>
          </button>
          <button ref={fullScreenBtn} onClick={toggleFullScreenMode} className="full-screen-btn">
            <svg className="open" viewBox="0 0 24 24">
              <path fill="currentColor" d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
            </svg>
            <svg className="close" viewBox="0 0 24 24">
              <path fill="currentColor" d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
            </svg>
          </button>
        </div>
      </div>

      <video
        onLoadedData={handleVideoOnLoadedData}
        onTimeUpdate={handleVideoOnTimeUpdate}
        onVolumeChange={handleVideoOnVolumeChange}
        onClick={togglePlay} onPlay={handlePlay} onPause={handlePause} ref={video} src={video1}>
        <track kind="captions" srcLang="en" src="assets/subtitles.vtt" />
      </video>
    </div>
  )
}
