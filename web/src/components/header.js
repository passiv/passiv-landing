import {Link} from 'gatsby'
import React, { useState, useEffect } from 'react'
import Icon from './icon'
import Container from './container'
import Logo from '../images/passiv-fullname.svg'
import { cn, getReferralCode, getTrackingCode } from '../lib/helpers';

import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => {
  const [referralCode, setReferralCode] = useState(undefined);
  const [trackingCode, setTrackingCode] = useState(undefined);

  useEffect(() => {
    setReferralCode(getReferralCode());
    setTrackingCode(getTrackingCode());
  }, []);

  let registerPath = '/app/register/';
  let loginPath = '/app/login/';
  if (trackingCode !== undefined && trackingCode !== null) {
    const appendage = `?ref=${trackingCode}`;
    registerPath += appendage;
    loginPath += appendage;
    if (referralCode !== undefined && referralCode !== null) {
      const appendage = `&ref=${referralCode}`;
      registerPath += appendage;
      loginPath += appendage;
    }
  }

  return (
    <div>
      <header className={styles.siteHeader} role="banner">
        <Container>
          <Link className={styles.logo} rel="author" to='/'>
            <img src={Logo} width="123" alt="Passiv Logo" />
          </Link>

          <nav className={cn(styles.siteNav, showNav && styles.showNav)}>

            <input type="checkbox" id="nav-trigger" className={styles.navTrigger} />
            <label htmlFor="nav-trigger">
              <span className={styles.menuIcon}></span>
            </label>

            <div className={styles.trigger}>
              <Link className={styles.pageLink} to="/features/">Features</Link>
              <Link className={styles.pageLink} to="/tutorials/">Tutorials</Link>
              <Link className={styles.pageLink} to="/pricing/">Pricing</Link>
              <Link className={styles.pageLink} to="/about/">About</Link>
              <Link className={styles.pageLink} to="/blog/">Blog</Link>
              <a className={cn(styles.pageLink, styles.btn2, styles.login)} href={loginPath}>Log in</a>
              <a className={cn(styles.pageLink, styles.btn1, styles.try, styles.clickping)} href={registerPath}>Sign Up</a>
            </div>

          </nav>

        </Container>
      </header>
    </div>
  )
}

export default Header
