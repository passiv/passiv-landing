import React from 'react'
import {buildImageObj,cn} from '../../lib/helpers'
import {imageUrlFor} from '../../lib/image-url'
import Container from '../container'
import allocation from "../../images/allocation@2x.jpg"
import allocation2x from "../../images/allocation.jpg"
import automate from "../../images/automate.jpg"
import automate2x from "../../images/automate@2x.jpg"
import smartAlerts from "../../images/smart-alerts.jpg"
import smartAlerts2x from "../../images/smart-alerts@2x.jpg"

import styles from './features.module.css'

function Features ({  }) {
    return (
  <section className={styles.features}>
    <Container>
      <h2>What can Passiv do?</h2>
      <div className={styles.col3}>
        <div className={cn(styles.innerCol, styles.tile)}>
          <div className={styles.tileContainer}>
            <img src={allocation} srcSet={cn(allocation2x,'2x')} alt="Target Allocation" />
            <h3>Maintain Your Portfolio’s Target Allocation</h3>
            <p>Build your portfolio and maintain your target allocation. Use Passiv's "buy-only" setting to identify the underweight assets in your portfolio.
            </p>
          </div>
        </div>
        <div className={cn(styles.innerCol,styles.tile)}>
          <div className={styles.tileContainer}>
            <img src={automate} srcSet={cn(automate2x,'2x')} alt="Target Allocation" />
            <h3>Automate Your Investments</h3>
            <p>Save time by letting Passiv calculate & execute the trades needed to keep your portfolio balanced.
            </p>
          </div>
        </div>
        <div className={cn(styles.innerCol, styles.tile)}>
          <div className={styles.tileContainer}>
            <img src={smartAlerts} srcset={cn(smartAlerts2x,'2x')} alt="Smart Alerts" />
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
