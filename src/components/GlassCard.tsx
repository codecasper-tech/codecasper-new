import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./GlassCard.css";
import fb from "../assets/icons/Facebook-removebg-preview.png";
import insta from "../assets/icons/insta.png";
import twit from "../assets/icons/twitter.png";
import linkedin from "../assets/icons/LinkedIn_icon_circle.svg.png";

function GlassCard() {
  const el = useRef(null);

  useEffect(() => {
    // @ts-ignore
    const typed = new Typed(el.current, {
      strings: [
        "Welcometo",
        "Welcome to",
        "Welcome to CodeCasper",
        "Welcome to Codecasper.",
        "Welcome to Codecasper Technologies Pvt. Ltd.",
      ],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
    });
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
        <div className="icons" style={{ marginTop: "100px" }}>
          <button className="transparent circle">
            <img src={fb} />
          </button>
          <button className="transparent circle">
            <img src={insta} />
          </button>
          <button className="transparent circle">
            <img src={twit} />
          </button>
          <button className="transparent circle">
            <img src={linkedin} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default GlassCard;
