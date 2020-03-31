import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'
import Container from './container'
import Logo from '../images/logo.svg'

import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (

  <div>
    <header className={styles.siteHeader} role="banner">
      <Container>
        <Link className={styles.logo} rel="author" to='/'>
          <img src={Logo} width="60" alt="Passiv Logo" />
        </Link>

        <nav className={cn(styles.siteNav, showNav && styles.showNav)}>

          <input type="checkbox" id="nav-trigger" className={styles.navTrigger} />
          <label for="nav-trigger">
            <span className={styles.menuIcon}></span>
          </label>

          <div className={styles.trigger}>
            <Link className={styles.pageLink} to="/blog">Blog</Link>
            <Link className={styles.pageLink} to="/about">About</Link>
            <Link className={styles.pageLink} to="/pricing">Pricing</Link>
            <Link className={styles.pageLink} to="/security">Security</Link>
            <Link className={styles.pageLink} to="/tutorials">Tutorials</Link>
            <a className={cn(styles.pageLink, styles.btn2, styles.login)} href="/app/login/">Log in</a>
            <a className={cn(styles.pageLink, styles.btn1, styles.try, styles.clickping)} href="/app/register/">Sign Up</a>
          </div>

        </nav>

      </Container>
    </header>
  </div>
)

export default Header
