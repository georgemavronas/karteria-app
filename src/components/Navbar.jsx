import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  const [coloredBg, setColoredBg] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setColoredBg(window.pageYOffset > 100)
      );
    }
  }, []);

  return (
    <>
      <header className={`navbar ${
          coloredBg ? "coloredNavbar" : ""
        }`}>
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src="/logos/karteria_logo_white.svg" alt="Karteria Logo" />
        </Link>

        <button
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`nav-overlay ${open ? "visible" : ""}`}>
        <button className="nav-close" onClick={closeMenu} aria-label="Close menu">
          &#x2715;
        </button>
        <nav className="nav-menu">
          <ul>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
            <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;