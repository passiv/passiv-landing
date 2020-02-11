import React from 'react'
import {buildImageObj,cn} from '../../lib/helpers'
import {imageUrlFor} from '../../lib/image-url'
import Container from '../container'

import styles from './testimonials.module.css'

function Testimonials ({  }) {
    return (
  <section className={styles.testimonials}>
    <Container>
      <h2>What Passiv Users Have to Say</h2>
      <div className={styles.col2}>
        <div className={cn(styles.innerCol, styles.testimonial)}>
          <p><span>"</span>This is a great tool! Sign up is simple, connecting to my stock portfolio was a breeze, and the interface is really clean and straightforward. Highly recommend to anyone who manages a portfolio.<span>"</span></p>
          <span className={styles.name}>Tyler F.</span>
        </div>
        <div className={cn(styles.innerCol, styles.testimonial)}>
          <p><span>"</span> I’ve saved a ton of time and money using Passiv. Its simplicity has given me the confidence to manage my retirement investments.<span>"</span></p>
          <span className={styles.name}>Santi C.</span>
        </div>
      </div>
    </Container>
  </section>

    )
}

export default Testimonials
