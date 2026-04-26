import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

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
      <header className={`${styles.navbar} ${coloredBg ? styles.coloredNavbar : ''}`}>
        <Link to="/" className={styles['nav-logo']} onClick={closeMenu}>
          <img src={process.env.PUBLIC_URL + '/logos/karteria_logo_white.svg'} alt="Karteria Logo" />
        </Link>

        <button
          className={`${styles.hamburger} ${open ? styles.open : ''}`}
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`${styles['nav-overlay']} ${open ? styles.visible : ''}`}>
        <button className={styles['nav-close']} onClick={closeMenu} aria-label="Close menu">
          &#x2715;
        </button>
        <nav className={styles['nav-menu']}>
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