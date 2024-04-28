import SoundCloud from "../Icons/SoundCloud";
import Apple from "../Icons/Apple";
import YouTube from "../Icons/YouTube";
import Spotify from "../Icons/Spotify";

function Streams() {
  const linkStyles = "border px-4 py-4 text-slate-200";

  return (
    <section className="mb-20">
      <p className="text-slate-200 text-5xl font-bold mb-12">
        STREAM IT YOUR WAY
      </p>
      <div className="inline-flex">
        <a
          className={linkStyles}
          href="https://soundcloud.com/kanyewest/sets/my-beautiful-dark-twisted-2"
          target="_blank"
          rel="noreferrer"
        >
          <SoundCloud />
        </a>
        <a
          className={linkStyles}
          href="https://music.apple.com/us/album/my-beautiful-dark-twisted-fantasy/1440742903"
          target="_blank"
          rel="noreferrer"
        >
          <Apple />
        </a>
        <a
          className={linkStyles}
          href="https://www.youtube.com/watch?v=UTH1VNHLjng&list=PL8YH4mOwWryUMna911yJM2B52iIIzigKy"
          target="_blank"
          rel="noreferrer"
        >
          <YouTube />
        </a>
        <a
          className={linkStyles}
          href="https://open.spotify.com/album/20r762YmB5HeofjMCiPMLv"
          target="_blank"
          rel="noreferrer"
        >
          <Spotify />
        </a>
      </div>
    </section>
  );
}

export default Streams;
