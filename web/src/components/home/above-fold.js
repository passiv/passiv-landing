import React from 'react'
import {buildImageObj,cn} from '../../lib/helpers'
import {imageUrlFor} from '../../lib/image-url'
import Container from '../container'

import styles from './above-fold.module.css'

function AboveFold ({  }) {
  return (
    <section className={styles.aboveFold}>
      <Container>
        <div className={styles.ctaContainer}>
          <h1>Autopilot for your Portfolio</h1>
          <p className={styles.tagline}>Allocating cash and rebalancing made easy</p>
          <p className={styles.blurb}>Over $350M is already managed using Passiv. Sign up today and join the movement.</p>
          <div className={cn(styles.emailSignup, styles.inputContainer)}>
            <div className={cn(styles.emailContainer, styles.formContainer)}>
              <form className={styles.register} method="get" novalidate action="/app/register/">
                <label><span>Enter your Email</span></label>
                <input type="hidden" name="type" />
                <input type="email" required max_length="512" className={styles.registerEmail} name="email" />
                <input className={cn(styles.btn1, styles.registerBtn, styles.clickping)} type="submit" value="Get Passiv" />
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboveFold
