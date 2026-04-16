import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-top">
          <div>
            <img src="/logos/karteriaOldLogo.png" alt="Karteria Logo" className="footer-logo" />
          </div>

          <div className="social">
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>

        <div className="footer-bottom">

          <nav className="footer-nav">
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
          </nav>

          <div className="copyright">
            <span>© 2026 KARTERIA All Rights Reserved</span>
            <div className="credits">
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
