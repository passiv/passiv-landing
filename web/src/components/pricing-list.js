import React from 'react'
import {buildImageObj,cn} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import Container from './container'

import styles from './pricing.module.css'

function PricingList ({  }) {
  return (
  <div className={styles.priceContainer}>
    <Container>
      <h1>Pricing Plans</h1>
      <p className={styles.tagline}>Use Passiv, invest on your own and save on fees! </p>
      <div className={styles.pricingTable}>
        <div className={cn(styles.plan,styles.plan1)}>
          <div className={cn(styles.title,styles.title1)}>
            <h3>Community User</h3>

            <span className={styles.price}><span className={styles.numbers}>$0</span>/month</span>
            <div><span className={styles.priceSubtext}>Free Forever</span></div>
          </div>
          <ul className={styles.planDetails}>
            <li>Automated calculations</li>
            <li>Cash & dividend notifications</li>
            <li>Keep stock picks separate</li>
            <li className={styles.disabled}>One-click trades</li>
            <li className={styles.disabled}>Multi-account portfolios</li>
            <li className={styles.disabled}>Advanced currency handling</li>
            <li className={styles.disabled}>Connect multiple brokerage logins</li>
          </ul>
          <a href="/app/register/" className={cn(styles.pageLink,styles.btn4)}>GET COMMUNITY</a>
        </div>
        <div className={cn(styles.plan,styles.plan2)}>
          <div className={cn(styles.title, styles.title2)}>
            <h3>Elite Member</h3>
            <div>
              <span className={styles.price}><span className={styles.numbers}>$99</span>/year</span>
            </div>
            <div><span className={styles.priceSubtext}>$0 for Questrade Clients</span>&#42;</div>
          </div>
          <ul className={styles.planDetails}>
            <li>Automated calculations</li>
            <li>Cash & dividend notifications</li>
            <li>Keep stock picks separate</li>
            <li>One-click trades</li>
            <li>Multi-account portfolios</li>
            <li>Advanced currency handling</li>
            <li>Connect multiple brokerage logins</li>
          </ul>
          <a href="/app/register/" className={cn(styles.pageLink,styles.btn4)}>GET ELITE</a>
        </div>
      </div>
      <div className={styles.pricingFooter}>
        <p className={styles.pricingFooterTitle}>Money-back <span className={styles.textGreen}>GUARANTEE</span></p>
        <p className={styles.pricingFooterText}>
            We offer a no-risk, 100% money-back guarantee.
        </p>
        <p className={styles.pricingFooterText}>
            If you're not happy, we'll refund you.
        </p>
      </div>
      <div className={styles.pricingFooter}>
        <p className={styles.pricingSubtext}>
            &#42; Questrade covers the cost of Passiv Elite subscriptions for their customers on an annual basis and reserves the right to discontinue at any point.
        </p>
      </div>
    </Container>
  </div>

  )
}

export default PricingList
