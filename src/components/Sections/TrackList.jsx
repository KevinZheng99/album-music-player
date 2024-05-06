import { useState } from "react";

import AudioPlayer from "../AudioPlayer/AudioPlayer";
import TrackSong from "../shared/TrackSong";
import { mbdtf } from "../../consts";

function TrackList() {
  const [trackPlaying, setTrackPlaying] = useState(
    "src/assets/audio/Dark Fantasy.mp3"
  );

  const handlePlayTrack = (songName) => {
    setTrackPlaying(songName);
  };

  return (
    <section className="mb-20">
      <p className="text-slate-200 text-5xl font-bold mb-12">TRACK LIST</p>
      <table className="w-full">
        <tbody>
          {mbdtf.map((song, index) => (
            <TrackSong
              key={song.songName}
              trackNum={index}
              songSrc={song.src}
              songName={song.songName}
              songLength={song.songLength}
              artists={song.artists}
              onPlayTrack={handlePlayTrack}
            />
          ))}
        </tbody>
      </table>
      <AudioPlayer trackSrc={trackPlaying} />
    </section>
  );
}

export default TrackList;
