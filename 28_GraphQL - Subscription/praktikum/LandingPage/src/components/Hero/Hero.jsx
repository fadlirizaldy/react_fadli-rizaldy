import HeroLeftSide from "./HeroLeftSide";
import "./../../landingPage.css";
import HeroRightSide from "./HeroRightSide";

const Hero = () => {
  return (
    <div className="heroSection">
      <HeroLeftSide />
      <HeroRightSide />
    </div>
  );
};

export default Hero;
