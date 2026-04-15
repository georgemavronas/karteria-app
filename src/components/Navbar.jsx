import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="siteLogo"><img src="./logos/karteriaOldLogo.png"></img></div>

      <nav>
        <ul className="navbar__list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

    </header>
  );
}

export default Navbar;