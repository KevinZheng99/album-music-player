import { useRef, useState } from "react";

import PlayFilled from "../Icons/PlayFilled";
import { calculateTime } from "../../utils/calculateTime";
import Volume from "../Icons/Volume";
import Pause from "../Icons/Pause";
import VolumeMuted from "../Icons/VolumeMuted";

function AudioPlayer() {
  const audioPlayerPos =
    "flex items-center gap-2 fixed w-1/2 top-full left-1/2 -translate-x-1/2 rounded-full -translate-y-32 font-medium";
  const audioRef = useRef();
  const currentTimeRef = useRef();
  const [songDuration, setSongDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currTime, setCurrTime] = useState(0);

  const onLoadedMetadata = () => {
    const seconds = Math.floor(audioRef.current.duration);
    console.log(currentTimeRef.current);
    currentTimeRef.current.max = seconds;
    setSongDuration(calculateTime(seconds));
  };

  const handlePlayButton = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeButton = () => {
    setIsMuted(!isMuted);
  };

  const handleChangeSlider = () => {
    setCurrTime(currentTimeRef.current.value);
  };

  return (
    <>
      <audio
        className="fixed w-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        preload="metadata"
        onLoadedMetadata={onLoadedMetadata}
        controls
        ref={audioRef}
        src="src/assets/audio/POWER.mp3"
      />
      <div
        className={
          audioPlayerPos + " bg-[#F22546] p-4 border-4 border-[#D8943F]"
        }
      >
        <span className="cursor-pointer" onClick={handlePlayButton}>
          {isPlaying ? <Pause /> : <PlayFilled />}
        </span>
        <span>{currTime ? calculateTime(currTime) : "0:00"}</span>
        <input
          className="w-full accent-[#D8943F]"
          type="range"
          value={currTime}
          onChange={handleChangeSlider}
          ref={currentTimeRef}
        ></input>
        <span>{songDuration}</span>
        <div className="flex items-center group w-1/4">
          <input
            className="w-full accent-[#D8943F]"
            type="range"
            max="100"
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
