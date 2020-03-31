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
            <Link className={cn(styles.pageLink, styles.btn2, styles.login)} to="/app/login/">Log in</Link>
            <Link className={cn(styles.pageLink, styles.btn1, styles.try, styles.clickping)} to="/app/register/">Sign Up</Link>
          </div>

        </nav>

      </Container>
    </header>
  </div>
)

export default Header
