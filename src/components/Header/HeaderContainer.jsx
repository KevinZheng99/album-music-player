import HomeIcon from "./HomeIcon";
import Hamburger from "./Hamburger";
import Socials from "./Socials";

function HeaderContainer() {
  return (
    <header className="flex h-24 justify-between items-center sticky top-0">
      <HomeIcon />
      <Hamburger />
      <Socials />
    </header>
  );
}

export default HeaderContainer;
