import TrackSong from "../shared/TrackSong";
import { mbdtf } from "../../consts";

function TrackList() {
  return (
    <section className="mb-20">
      <p className="text-slate-200 text-5xl font-bold mb-12">TRACK LIST</p>
      <table className="w-full">
        <tbody>
          {mbdtf.map((song, index) => (
            <TrackSong
              key={song.songName}
              trackNum={index}
              songName={song.songName}
              songLength={song.songLength}
              artists={song.artists}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default TrackList;
