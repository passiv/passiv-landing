import React from 'react'
import {buildImageObj} from '../../lib/helpers'
import {imageUrlFor} from '../../lib/image-url'
import Container from '../container'

import styles from './security.module.css'

function Security ({  }) {
  return (
    <section className={styles.security}>
      <Container>
        <h2>We make sure everything is <span>secure</span></h2>
        <p>We work with brokerages directly and use their APIs in order to keep your information safe and secure. This ensures that you are not breaching their terms & conditions. We do not store your login credentials to your brokerage account nor do we share your information with any third parties.</p>
        <a href="/security/" className={styles.btn1}>Learn More</a>
      </Container>
    </section>
  )
}

export default Security
