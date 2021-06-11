import React from "react";
import { Link } from "gatsby";
import Container from "./container";

import styles from "./footer.module.css";

function Footer() {
  var date = new Date();
  var year = date.getFullYear();
  return (
    <footer className={styles.siteFooter}>
      <Container>
        <p className={styles.sub}>
          <a href="/app/contact-form/">Feedback</a>
          <Link to="/about/">About Us</Link>
          <Link to="/blog/">Blog</Link>
          <Link to="/terms-of-service/">Terms of Service</Link>
          <Link to="/privacy/">Privacy Policy</Link>
          <Link to="/security/">Security</Link>
        </p>
      </Container>
      <small className={styles.copyright}>&copy; Copyright {year}, Passiv</small>
    </footer>
  );
}

export default Footer;
