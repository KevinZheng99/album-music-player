import HomeIcon from "./HomeIcon";
import Socials from "./Socials";

function HeaderContainer() {
  return (
    <header className="flex h-24 justify-between items-center sticky top-0 z-10 bg-black bg-opacity-70 xl:bg-transparent xl:bg-opacity-100">
      <HomeIcon />
      <Socials />
    </header>
  );
}

export default HeaderContainer;
