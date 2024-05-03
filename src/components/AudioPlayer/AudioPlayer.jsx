import { useRef, useState } from "react";

import PlayFilled from "../Icons/PlayFilled";
import { calculateTime } from "../../utils/calculateTime";
import Volume from "../Icons/Volume";
import Pause from "../Icons/Pause";

function AudioPlayer() {
  const audioPlayerPos =
    "flex items-center gap-2 fixed w-1/2 top-full left-1/2 -translate-x-1/2 rounded-full -translate-y-32 font-medium";
  const audioRef = useRef();
  const [songDuration, setSongDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const onLoadedMetadata = () => {
    const seconds = Math.floor(audioRef.current.duration);
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
        <a className="cursor-pointer" onClick={handlePlayButton}>
          {isPlaying ? <Pause /> : <PlayFilled />}
        </a>
        <span>0:00</span>
        <input
          className="w-full bg-black accent-[#D8943F] rounded-full appearance-none"
          type="range"
          id="seek-slider"
          max="100"
        ></input>
        <span>{songDuration}</span>
        <a className="cursor-pointer">
          <Volume />
        </a>
      </div>
    </>
  );
}

export default AudioPlayer;
