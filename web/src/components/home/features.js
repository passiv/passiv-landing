import React from 'react'
import {buildImageObj,cn} from '../../lib/helpers'
import {imageUrlFor} from '../../lib/image-url'
import Container from '../container'

import styles from './features.module.css'

function Features ({  }) {
    return (
  <section className={styles.features}>
    <Container>
      <div className={styles.col3}>
        <div className={cn(styles.innerCol, styles.tile)}>
          <div className={styles.tileContainer}>
            <img src="assets/images/allocation.jpg" srcset="assets/images/allocation@2x.jpg 2x" alt="Target Allocation" />
            <h3>Maintain Your Portfolio’s Target Allocation</h3>
            <p>Build your portfolio and maintain your target allocation. Use Passiv's "buy-only" setting to identify the underweight assets in your portfolio.
            </p>
          </div>
        </div>
        <div className={cn(styles.innerCol,styles.tile)}>
          <div className={styles.tileContainer}>
            <img src="assets/images/automate.jpg" srcset="assets/images/automate@2x.jpg 2x" alt="Target Allocation" />
            <h3>Automate Your Investments</h3>
            <p>Save time by letting Passiv calculate & execute the trades needed to keep your portfolio balanced.
            </p>
          </div>
        </div>
        <div className={cn(styles.innerCol, styles.tile)}>
          <div className={styles.tileContainer}>
            <img src="assets/images/smartAlerts.jpg" srcset="assets/images/smartAlerts@2x.jpg 2x" alt="Smart Alerts" />
            <h3>Smart Alerts</h3>
            <p>Get notified whenever new cash & dividend payments come in or whenever your portfolio drifts out of alignment.
            </p>
          </div>
        </div>
      </div>
    </Container>
  </section>
  )
}

export default Features
