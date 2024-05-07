import { useContext } from "react";

import Pause from "../Icons/Pause";
import Play from "../Icons/Play";
import Share from "../Icons/Share";

import { AudioContext } from "../../store/play-audio-context";

function TrackSong({
  trackNum,
  songSrc,
  songName,
  songLength,
  artists,
  onPlayTrack,
  currSongNum,
}) {
  const { isPlaying } = useContext(AudioContext);

  return (
    <tr className="flex items-center text-slate-200">
      <td className="p-4 w-12 text-xl font-medium">{trackNum}</td>
      <td className="p-4">
        <span
          className="cursor-pointer"
          onClick={() => onPlayTrack(trackNum, songSrc)}
        >
          {currSongNum === trackNum && isPlaying ? <Pause /> : <Play />}
        </span>
      </td>
      <td className="p-4 flex flex-col w-full">
        <span className="text-xl font-bold">{songName}</span>
        <span className="font-medium">{artists}</span>
      </td>
      <td className="p-4 mr-8 text-xl font-medium">{songLength}</td>
      <td className="p-4">
        <Share />
      </td>
    </tr>
  );
}

export default TrackSong;
