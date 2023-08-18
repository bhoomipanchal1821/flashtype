import "./Landing.css";
import Hero from "./../../images/flash.png";
import Typewriter from "typewriter-effect";
const Landing = () => {
  return (
    <div className="d-flex justify-content-between align-items-center  flex-wrap">
      <div data-aos="fade-right">
        <div className="display-1 lh-base">Can you type...</div>
        <div className="display-2 lh-base">
          <Typewriter
            options={{
              strings: ["Fast?", "Correct?" , "Quick?"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div data-aos="fade-left">
        <img src={Hero} alt="hero" className="hero-img" />
      </div>
    </div>
  );
};

export default Landing;
