import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./GlassCard.css";
import fb from "../assets/icons/fb_png.png";
import insta from "../assets/icons/insta.png";
import twit from "../assets/icons/twitter.png";

function GlassCard() {
  const el = useRef(null);

  useEffect(() => {
    // @ts-ignore
    const typed = new Typed(el.current, {
      strings: ["Welcometo", "Welcome to", "Welcome to CodeCasper", "Welcome to Codecasper."],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container">
      <div className="texts">
        <h1>Hi!</h1>
        <h3 className="element" ref={el}></h3>
        <p>Grow your business with us at a very fair price.</p>
        <div className="icons" style={{marginTop: "100px"}}>
          <img src={fb} style={{ width: "90px", height: "50px" }} />
          <img src={insta} style={{ width: "60px", height: "60px" }} />
          <img src={twit} style={{ width: "60px", height: "60px" }} />
        </div>
      </div>
    </div>
  );
}

export default GlassCard;
