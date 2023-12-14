import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faCirclePause } from '@fortawesome/free-solid-svg-icons';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import "../assets/css/UserDashboard/MyPlans_Content.css";
import { useAudioPlayer } from '../components/AudioContext';

function AudioPlayer({ src }) {
  const audioRef = useRef(new Audio(src));
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressBarRef = useRef();
  const [wasPlayingBeforeDrag, setWasPlayingBeforeDrag] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.1); // Default volume is 0.1 (10%)
  const { currentSrc, playAudio, stopAudio } = useAudioPlayer();

  useEffect(() => {
    const audio = audioRef.current;
    console.log("Audio source set to: ", src);
    audio.volume = volume;

    const setAudioTime = () => {
        setCurrentTime(audio.currentTime);
        setProgress((audio.currentTime / audio.duration) * 100);
    };

    const setAudioDuration = () => {
        setDuration(audio.duration);
    };

    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('loadeddata', setAudioDuration);

    // Check if this audio source should be playing
    if (src === currentSrc) {
      console.log("Playing audio: ", src);
        audio.src = src; // Ensure the correct src is set
        audio.play();
        setIsPlaying(true);
    } else {
      console.log("Pausing audio: ", src);
        audio.pause();
        setIsPlaying(false);
    }

    return () => {
      audio.pause();
      console.log("Audio component unmounted, stopped playing: ", src);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('loadeddata', setAudioDuration);
    };
}, [currentSrc, src, volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      // setIsPlaying(true);
      playAudio(src);
    } else {
      audio.pause();
      // setIsPlaying(false);
      stopAudio();
    }
  };

  const handleProgressClick = (e) => {
    const audio = audioRef.current;
    const clickPosition = (e.nativeEvent.offsetX / e.target.clientWidth) * audio.duration; // clientWidth is the CSS width
    audio.currentTime = clickPosition;
  };

  const handleMouseDown = (e) => {
    const audio = audioRef.current;
    // Record if the audio was playing before dragging started
    setWasPlayingBeforeDrag(isPlaying);
    // Pause the audio when the drag starts
    if (isPlaying) {
      audio.pause();
    }
    // Begin tracking mouse movements
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    handleMouseMove(e); // Update the progress bar immediately
  };

  const handleMouseMove = (e) => {
    if (!progressBarRef.current) return;
    const boundingRect = progressBarRef.current.getBoundingClientRect();
    const x = e.clientX - boundingRect.left; // X position within the progress bar
    const ratio = x / boundingRect.width;
    const time = ratio * audioRef.current.duration;
    audioRef.current.currentTime = time;
    setProgress(ratio * 100);
  };

  const handleMouseUp = () => {
    // Stop tracking mouse movements
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    // Play the audio when the drag ends
    const audio = audioRef.current;
    if (wasPlayingBeforeDrag) {
      audio.play();
      setIsPlaying(true);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    audioRef.current.volume = e.target.value;
  };

  const calculateVolumeLevel = () => {
    return { strokeDashoffset: 100 - volume * 100 };
  };

  return (
    <div className='audio-player'>
      <button onClick={togglePlay} className='play-button listen-button'>
        <FontAwesomeIcon icon={isPlaying ? faCirclePause : faCirclePlay} style={{ color: 'black' }} />
      </button>
      <progress ref={progressBarRef} value={progress} max="100" onClick={handleProgressClick} onMouseDown={handleMouseDown}></progress>
      <span className='audio-duration'>{formatTime(currentTime)} / {formatTime(duration)}</span>
      <div className='volume-control-container'>
        <svg width="30" height="30" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="none" stroke="#ddd" strokeWidth="2"></circle>
          <circle cx="12" cy="12" r="10" fill="none" stroke="#0078D7" strokeWidth="2" strokeDasharray="100" style={calculateVolumeLevel()}></circle>
        </svg>
        <div className='volume-control'>
          <FontAwesomeIcon icon={faVolumeHigh} className="volume-icon" style={{ color: 'black' }} />
          <input className="volume-slider" type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} style={{ width: '100px' }} />
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;