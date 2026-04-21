import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-top">
          <div>
            <img src="/logos/karteria_logo_white.svg" alt="Karteria Logo" className="footer-logo" />
          </div>

          <div className="social">
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="footer-bottom">

          <nav className="footer-nav">
            <a href="/about">About Us</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
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
