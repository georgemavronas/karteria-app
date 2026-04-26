import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-inner']}>

        <div className={styles['footer-top']}>
          <div>
            <img src={process.env.PUBLIC_URL + '/logos/karteria_logo_white.svg'} alt="Karteria Logo" className={styles['footer-logo']} />
          </div>

          <div className={styles.social}>
            <a href="https://www.linkedin.com/company/karteriaee/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className={styles['footer-bottom']}>

          <nav className={styles['footer-nav']}>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <div className={styles.copyright}>
            <span>© 2026 KARTERIA All Rights Reserved</span>
            <div className={styles.credits}>
              <span>Created by <strong>Karteria Team</strong></span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
