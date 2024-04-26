import HomeIcon from "./HomeIcon";
import Hamburger from "./Hamburger";
import Socials from "./Socials";

function HeaderContainer() {
  return (
    <div className="flex h-24 justify-between items-center sticky top-0">
      <HomeIcon />
      <Hamburger />
      <Socials />
    </div>
  );
}

export default HeaderContainer;
