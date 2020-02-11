import React from 'react'
import {Link} from 'gatsby'
import Container from './container'

import styles from './footer.module.css'

function Footer () {
  return (
    <footer className={styles.siteFooter}>
      <Container>
        <p className={styles.sub}>
          <a href="#feedback" rel="modal:open" className={styles.openModal}>Feedback</a>
          <Link to='/about'>About Us</Link>
          <Link to="/blog/">Blog</Link>
          <Link to="/terms-of-service/">Terms of Service</Link>
          <Link to="/privacy/">Privacy Policy</Link>
          <Link to="/security/">Security</Link>
        </p>
      </Container>
      <small className={styles.copyright}>
        &copy; Copyright <script type="text/javascript">document.write(new Date().getFullYear());</script>, Passiv
      </small>
    </footer>
  )
}

export default Footer
