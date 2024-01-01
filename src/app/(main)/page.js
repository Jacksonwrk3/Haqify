import MenuModal from "../../components/MenuModal/MenuModal.jsx";
import HeroBanner from "../../components/HeroBanner/HeroBanner.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";
import ImageWithText from "../../components/ImageWText/ImageWText.jsx";
export default function Home() {
  return (
    <>
      <main>
        <HeroBanner />
        <ImageWithText
          image="/networking.svg"
          imgAlt="People working as a team"
          paragraph="Network and find a team of like
        minded developers to learn and
        build the next big thing!"
          heading="Build your Network"
          imgPosition="left"
        />
        <ImageWithText
          image="/interview.svg"
          imgAlt="An interview"
          paragraph="Develop unique apps with your team to stand out amongst the rest"
          heading="Stand out & get hired"
        />
      </main>
    </>
  );
}
