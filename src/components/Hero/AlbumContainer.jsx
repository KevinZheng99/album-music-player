import albumCover from "../../assets/MBDTF.jpg";

function AlbumContainer() {
  return (
    <div className="-rotate-90 -translate-y-20">
      <p className="text-slate-200 italic text-xl mb-2">
        <span className="text-[#66f0d4]">Def Jam Recordings</span> and{" "}
        <span className="text-[#66f0d4]">Rock-A-Fella Records</span> — Released
        Nov 22, 2010
      </p>
      <img className="w-2/3 rotate-90" src={albumCover} />
    </div>
  );
}

export default AlbumContainer;
