import Navigation from "../components/Navigation/Navigation.jsx";
import MenuModal from "../components/MenuModal/MenuModal.jsx";
import HeroBanner from "../components/HeroBanner/HeroBanner.jsx";
import ImageWithText from "../components/ImageWText/ImageWText.jsx";
export default function Home() {
  return (
    <>
      <header className="relative z-50 flex flex-col w-screen h-screen ">
        <Navigation />
        <HeroBanner />
      </header>
      <main>{/* <ImageWithText /> */}</main>
    </>
  );
}
