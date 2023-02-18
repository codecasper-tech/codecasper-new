import "./Navbar.css"
import codecasper from "../assets/codecasper.png"
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function Navbar() {

  // function windowRatio(x: MediaQueryList) {
  //   const nav = document.getElementById("navbar");
  //   if (x.matches) {
  //     nav?.classList.remove("left");
  //     nav?.classList.remove("bottom");
  //   } else {
  //     // do something
  //   }
  // }

  // useEffect(() => {
  //   var x = window.matchMedia("(min-width: 480px)");
  //   windowRatio(x);
  
  // }, [window.innerWidth])
  

  return (
    <nav className="m l left" id="navbar">
      <NavLink to="/">
        <img className="circle" src={codecasper} />
      </NavLink>
      <NavLink to="/">
        <i>home</i>
        <span>Home</span>
      </NavLink>
      <NavLink to="/aboutus">
        <i>widgets</i>
        <span>About Us</span>
      </NavLink>
      <NavLink to="/payments">
        <i>paid</i>
        <span>Payments</span>
      </NavLink>
      <NavLink to="/findmore">
        <i>more</i>
        <span>Find More</span>
      </NavLink>
    </nav>
  );
}

export default Navbar;
