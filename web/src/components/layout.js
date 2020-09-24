import React from 'react'
import Header from './header'
import Footer from './footer'

import '../styles/layout.css'
import styles from './layout.module.css'

import ReactPixel from '@zsajjad/react-facebook-pixel';

const options = {
    autoConfig: true, // set pixel's autoConfig
    debug: false, // enable logs
};
ReactPixel.init('yourPixelIdGoesHere', advancedMatching, options);

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
    <>
        ReactPixel.pageView();
        <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
        <div className={styles.content}>{children}</div>
        <Footer />
    </>
)

export default Layout
