import { useState } from "react";

import AudioPlayer from "../AudioPlayer/AudioPlayer";
import TrackSong from "../shared/TrackSong";
import { mbdtf } from "../../consts";

function TrackList() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currSongNum, setCurrSongNum] = useState(0);
  const [trackPlaying, setTrackPlaying] = useState(
    "src/assets/audio/Dark Fantasy.mp3"
  );

  const handlePlayTrack = (trackNum, songName) => {
    setTrackPlaying(songName);
    setCurrSongNum(trackNum);

    if (trackNum !== currSongNum && !isPlaying) {
      setIsPlaying(!isPlaying);
    } else if (trackNum === currSongNum) {
      setIsPlaying(!isPlaying);
    }
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
              currSongNum={currSongNum}
              isPlaying={isPlaying}
            />
          ))}
        </tbody>
      </table>
      <AudioPlayer
        trackSrc={trackPlaying}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
      />
    </section>
  );
}

export default TrackList;
