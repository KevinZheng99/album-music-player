import { useRef, useState, useContext } from "react";

import PlayFilled from "../Icons/PlayFilled";
import { calculateTime } from "../../utils/calculateTime";
import Volume from "../Icons/Volume";
import PauseFilled from "../Icons/PauseFilled";
import VolumeMuted from "../Icons/VolumeMuted";

import { AudioContext } from "../../store/play-audio-context";

function AudioPlayer({ trackSrc }) {
  const { isPlaying, playButton } = useContext(AudioContext);

  const audioPlayerPos =
    "flex items-center gap-2 fixed w-1/2 top-full left-1/2 -translate-x-1/2 rounded-full -translate-y-32 font-medium z-10";
  const audioRef = useRef();
  const currentTimeRef = useRef();
  const [songDuration, setSongDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [currTime, setCurrTime] = useState(0);

  const onLoadedMetadata = () => {
    const seconds = Math.floor(audioRef.current.duration);
    currentTimeRef.current.max = seconds;
    setSongDuration(calculateTime(seconds));
  };

  const handleVolumeButton = () => {
    if (!isMuted) {
      audioRef.current.muted = true;
      setIsMuted(!isMuted);
    } else {
      audioRef.current.muted = false;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeSlider = (e) => {
    const value = e.target.value;
    audioRef.current.volume = value / 100;
  };

  const handleChangeSlider = () => {
    setCurrTime(currentTimeRef.current.value);
    audioRef.current.currentTime = currentTimeRef.current.value;
  };

  const handleTimeUpdate = () => {
    setCurrTime(audioRef.current.currentTime);
    currentTimeRef.current.value = Math.floor(audioRef.current.currentTime);
  };

  if (isPlaying) {
    audioRef.current?.play();
  } else if (!isPlaying) {
    audioRef.current?.pause();
  }

  return (
    <>
      <audio
        preload="metadata"
        onLoadedMetadata={onLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        ref={audioRef}
        src={trackSrc}
      >
        {/* <source src={trackSrc} type="audio/mpeg"></source> */}
      </audio>
      <div
        className={
          audioPlayerPos + " bg-[#F22546] p-4 border-4 border-[#D8943F]"
        }
      >
        <span className="cursor-pointer" onClick={playButton}>
          {isPlaying ? <PauseFilled /> : <PlayFilled />}
        </span>
        <span className="text-center w-14">
          {currTime ? calculateTime(currTime) : "0:00"}
        </span>
        <input
          className="w-full accent-[#D8943F]"
          type="range"
          value={currTime}
          onChange={handleChangeSlider}
          ref={currentTimeRef}
        ></input>
        <span className="text-center w-14">{songDuration}</span>
        <div className="flex items-center group w-1/4">
          <input
            className="w-full accent-[#D8943F]"
            type="range"
            max="100"
            onChange={handleVolumeSlider}
          ></input>
        </div>
        <span className="cursor-pointer" onClick={handleVolumeButton}>
          {isMuted ? <VolumeMuted /> : <Volume />}
        </span>
      </div>
    </>
  );
}

export default AudioPlayer;
