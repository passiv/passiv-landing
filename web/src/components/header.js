import {Link} from 'gatsby'
import React, { useState, useEffect } from 'react'
import Icon from './icon'
import Container from './container'
import Logo from '../images/passiv-fullname.svg'
import { cn, generateTrackingPath, getAppBase } from '../lib/helpers';

import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => {
  const [registerPath, setRegisterPath] = useState('/app/register/');
  const [loginPath, setLoginPath] = useState('/app/login/');
  const appBase = getAppBase();

  useEffect(() => {
    setRegisterPath(generateTrackingPath('/app/register/'));
    setLoginPath(generateTrackingPath('/app/login/'));
  }, []);

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
              <a className={cn(styles.pageLink, styles.btn2, styles.login)} href={`https://${appBase}${loginPath}`}>Log in</a>
              <a className={cn(styles.pageLink, styles.btn1, styles.try, styles.clickping)} href={`https://${appBase}${registerPath}`}>Sign Up</a>
            </div>

          </nav>

        </Container>
      </header>
    </div>
  )
}

export default Header
