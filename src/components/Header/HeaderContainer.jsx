import HomeIcon from "./HomeIcon";
import Hamburger from "./Hamburger";

function HeaderContainer() {
  return (
    <div className="flex h-24 justify-between items-center sticky top-0">
      <HomeIcon />
      <Hamburger />
    </div>
  );
}

export default HeaderContainer;
