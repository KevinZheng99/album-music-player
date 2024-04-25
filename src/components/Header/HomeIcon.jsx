import albumCover from "../../assets/MBDTF.jpg";

function HomeIcon() {
  return (
    <a href="/">
      <img className="w-12 ml-16" src={albumCover} alt="album cover" />{" "}
    </a>
  );
}

export default HomeIcon;
