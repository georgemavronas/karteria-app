import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    if (footerRef.current) {
      const footerHeight = footerRef.current.getBoundingClientRect().height;
      document.documentElement.style.setProperty('--footer-height', `${footerHeight}px`);
    }
  }, []);
  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-inner">

        <div className="footer-top">
          <div>
            <img src={process.env.PUBLIC_URL + '/logos/karteria_logo_white.svg'} alt="Karteria Logo" className="footer-logo" />
          </div>

          <div className="social">
            <a href="https://www.linkedin.com/company/karteriaee/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="footer-bottom">

          <nav className="footer-nav">
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <div className="copyright">
            <span>© 2026 KARTERIA All Rights Reserved</span>
            <div className="credits">
              <span>Created by <strong>Karteria Team</strong></span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
