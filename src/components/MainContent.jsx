import MusicVideo from "./Sections/MusicVideo";
import Streams from "./Sections/Streams";
import TrackList from "./Sections/TrackList";

function MainContent() {
  return (
    <div>
      <Streams />
      <TrackList />
      <MusicVideo />
    </div>
  );
}

export default MainContent;
