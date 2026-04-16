import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="navbar">
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <img src="/logos/karteriaOldLogo.png" alt="Karteria Logo" />
        </Link>

        <button
          className={`hamburger ${open ? "hamburger--open" : ""}`}
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`nav-overlay ${open ? "nav-overlay--visible" : ""}`}>
        <button className="nav-overlay__close" onClick={closeMenu} aria-label="Close menu">
          &#x2715;
        </button>
        <nav className="nav-overlay__menu">
          <ul>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;