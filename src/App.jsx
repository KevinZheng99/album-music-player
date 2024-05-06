import HeaderContainer from "./components/Header/HeaderContainer";
import HeroContainer from "./components/Hero/HeroContainer";
import MainContent from "./components/MainContent";

function App() {
  return (
    <>
      <div className="fixed h-[102%] w-[102%] bg-center bg-cover bg-album-cover blur-[5px] brightness-[38%] -top-[1%] -left-[1%] -z-10" />
      <HeaderContainer />
      <div className="mx-auto w-[414px] 860px:w-[768px] xl:w-[1200px] 2xl:w-fit">
        <HeroContainer />
        <MainContent />
      </div>
    </>
  );
}

export default App;
