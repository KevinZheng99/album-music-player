import { useState } from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import HeroContainer from "./components/Hero/HeroContainer";
import Streams from "./components/Sections/Streams";
import TrackList from "./components/Sections/TrackList";
import MusicVideo from "./components/Sections/MusicVideo";
import ShareModal from "./components/ShareModal/ShareModal";
import { AudioContext } from "./store/play-audio-context";
import { ShareModalContext } from "./store/share-modal";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handlePlayButton = () => {
    setIsPlaying(!isPlaying);
  };

  const handleShareButton = () => {
    setShowModal(!showModal);
  };

  const audioCtxVlaue = {
    isPlaying: isPlaying,
    playButton: handlePlayButton,
  };

  const shareCtxVlaue = {
    isShowing: showModal,
    shareButton: handleShareButton,
  };

  return (
    <AudioContext.Provider value={audioCtxVlaue}>
      <ShareModalContext.Provider value={shareCtxVlaue}>
        <ShareModal />
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
      </ShareModalContext.Provider>
    </AudioContext.Provider>
  );
}

export default App;
