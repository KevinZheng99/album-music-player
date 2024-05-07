import { useState } from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import HeroContainer from "./components/Hero/HeroContainer";
import Streams from "./components/Sections/Streams";
import TrackList from "./components/Sections/TrackList";
import MusicVideo from "./components/Sections/MusicVideo";
import { AudioContext } from "./store/play-audio-context";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayButton = () => {
    setIsPlaying(!isPlaying);
  };

  const ctxVlaue = {
    isPlaying: isPlaying,
    playButton: handlePlayButton,
  };

  return (
    <AudioContext.Provider value={ctxVlaue}>
      <div className="fixed h-[102%] w-[102%] bg-center bg-cover bg-album-cover blur-[5px] brightness-[38%] -top-[1%] -left-[1%] -z-10" />
      <HeaderContainer />
      <div className="mx-auto w-[414px] 860px:w-[768px] xl:w-[1200px] 2xl:w-fit">
        <HeroContainer />
        <div>
          <Streams />
          <TrackList />
          <MusicVideo />
        </div>
      </div>
    </AudioContext.Provider>
  );
}

export default App;
