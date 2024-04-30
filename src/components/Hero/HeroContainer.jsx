import AlbumContainer from "./AlbumContainer";
import Play from "../Icons/Play";
import Share from "../Icons/Share";

function HeroContainer() {
  const buttonStyles =
    "flex items-center gap-2 text-slate-200 px-6 py-4 text-xl font-medium border-2";
  const buttonHoverStyles =
    "hover:bg-slate-200 hover:border-slate-200 hover:text-black transition-all";

  return (
    <div className="flex items-center mb-32 gap-20 mt-20">
      <AlbumContainer />
      <div className="w-full">
        <p className=" mb-4 text-slate-200 text-6xl 2xl:text-7xl font-bold">
          M.B.D.T.F.
        </p>
        <p className=" mb-16 text-slate-200 text-4xl 2xl:text-5xl font-bold">
          Kanye West
        </p>
        <div className="flex">
          <button
            className={
              buttonStyles +
              " bg-red-500 border-red-500 mr-4 " +
              buttonHoverStyles
            }
          >
            <Play />
            LISTEN NOW
          </button>
          <button
            className={buttonStyles + " border-slate-200 " + buttonHoverStyles}
          >
            <Share />
            SHARE
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroContainer;
