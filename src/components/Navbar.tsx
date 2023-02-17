import "./Navbar.css"
import codecasper from "../assets/codecasper.png"

function Navbar() {
  return (
    <nav className="m l left">
      <a>
        <img className="circle" src={codecasper} />
      </a>
      <a>
        <i>home</i>
        <span>Home</span>
      </a>
      <a>
        <i>widgets</i>
        <span>About Us</span>
      </a>
      <a>
        <i>arrow_back</i>
        <span>Payments</span>
      </a>
      <a>
        <i>arrow_forward</i>
        <span>Right</span>
      </a>
      <a>
        <i>code</i>
        <span>Code</span>
      </a>
    </nav>
  );
}

export default Navbar;
