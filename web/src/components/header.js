import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'
import Container from './container'

import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (

  <div>

    <header className={styles.siteHeader} role="banner">

      <Container>
        <Link className={siteTitle} rel="author" to='/'>
          <img width="60px" src="/assets/images/logo.svg" alt="Passiv Logo" />
        </Link>


        <nav className={cn(styles.siteNav, showNav && styles.showNav)}>
          <div>
            <Link className={styles.pageLink} to="/blog">Blog</Link>
            <Link className={cn(styles.pageLink, styles.btn2, styles.login)} to="/app/login/">Log in</Link>
            <Link className={cn(styles.pageLink, styles.btn1, styles.try, styles.clickping)} to="/app/register/">Sign Up</Link>
          </div>
        </nav>

      </Container>

    </header>
  </div>
)

export default Header
