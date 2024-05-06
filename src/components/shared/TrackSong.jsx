import Play from "../Icons/Play";
import Share from "../Icons/Share";

function TrackSong({
  trackNum,
  songSrc,
  songName,
  songLength,
  artists,
  onPlayTrack,
}) {
  return (
    <tr className="flex items-center text-slate-200">
      <td className="p-4 w-12 text-xl font-medium">{trackNum}</td>
      <td className="p-4">
        <span onClick={() => onPlayTrack(songSrc)}>
          <Play />
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
