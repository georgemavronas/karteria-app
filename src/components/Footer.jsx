import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* Top Section: Logo and Social Icons */}
        <div className="footer__top">
          <div>
            <img src="/logos/karteriaOldLogo.png" alt="Karteria Logo" className="footer__logo" />
          </div>

          <div className="footer__social">
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>

        {/* Bottom Section: Links and Copyright */}
        <div className="footer__bottom">

          <nav className="footer__nav">
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
          </nav>

          <div className="footer__legal">
            <span>© 2026 KARTERIA All Rights Reserved</span>
            <div className="footer__legal-links">
              <a href="/privacy">Privacy / Legal Notice</a>
              <span>Created by <strong>Karteria Team</strong></span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
