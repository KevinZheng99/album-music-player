import { useState, useContext } from "react";

import AudioPlayer from "../AudioPlayer/AudioPlayer";
import TrackSong from "../shared/TrackSong";
import { mbdtf } from "../../consts";

import { AudioContext } from "../../store/play-audio-context";

function TrackList() {
  const { isPlaying, playButton } = useContext(AudioContext);
  const [currSongNum, setCurrSongNum] = useState(0);
  const [trackPlaying, setTrackPlaying] = useState(
    "./src/assets/audio/Dark Fantasy.mp3"
  );

  const handlePlayTrack = (trackNum, songName) => {
    setTrackPlaying(songName);
    setCurrSongNum(trackNum);

    if (trackNum !== currSongNum && !isPlaying) {
      playButton();
    } else if (trackNum === currSongNum) {
      playButton();
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
            />
          ))}
        </tbody>
      </table>
      <AudioPlayer trackSrc={trackPlaying} />
    </section>
  );
}

export default TrackList;
