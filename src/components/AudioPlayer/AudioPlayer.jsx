import { useRef, useState } from "react";

import PlayFilled from "../Icons/PlayFilled";
import { calculateTime } from "../../utils/calculateTime";

function AudioPlayer() {
  const audioPlayerPos =
    "flex items-center fixed w-1/2 top-full left-1/2 -translate-x-1/2 rounded-full -translate-y-32 font-medium";
  const audioRef = useRef();
  const [songDuration, setSongDuration] = useState(0);

  const onLoadedMetadata = () => {
    const seconds = Math.floor(audioRef.current.duration);
    setSongDuration(calculateTime(seconds));
  };

  const handlePlayButton = () => {
    audioRef.current.play();
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
          <PlayFilled />
        </a>
        <span>{songDuration}</span>
      </div>
    </>
  );
}

export default AudioPlayer;
