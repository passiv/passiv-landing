import React from 'react'
import {buildImageObj} from '../../lib/helpers'
import {imageUrlFor} from '../../lib/image-url'
import Container from '../container'

import styles from './mission.module.css'

function Mission ({  }) {
  return (
  <section className={styles.mission}>
    <Container>
      <div className={styles.imgContainer}>
        // <img alt="Passiv Interface" src="assets/images/mission-bg.jpg" />
      </div>
      <div className={styles.copyContainer}>
        <h2><span>The</span> Mission</h2>
        <p>At Passiv we believe that you should not have to work hard at making your investments work for you. We make it easy to maintain your portfolio’s target allocation by taking care of the calculations and letting you synchronize your holdings with one click. This way you stay balanced and spend less time with spreadsheets.</p>
        <a href="/about/" className={styles.btn3}><span>About Passiv</span></a>
      </div>
    </Container>
  </section>

  )
}

export default Mission
