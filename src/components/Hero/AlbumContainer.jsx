import albumCover from "../../assets/MBDTF.jpg";

function AlbumContainer() {
  return (
    <div className="w-full 860px:rotate-90">
      <img className="xl:w-full 860px:-rotate-90" src={albumCover} />
      <p className="text-slate-200 italic text-lg 860px:text-xl xl:text-base 2xl:text-xl mb-2 860px:rotate-180">
        <span className="text-[#66f0d4]">Def Jam Recordings</span> and{" "}
        <span className="text-[#66f0d4]">Rock-A-Fella Records</span> — Released
        Nov 22, 2010
      </p>
    </div>
  );
}

export default AlbumContainer;
