import React, { useState, useEffect } from 'react'
import {buildImageObj,cn} from '../../lib/helpers'
import {imageUrlFor} from '../../lib/image-url'
import Container from '../container'
import { getReferralCode, getTrackingCode } from '../../lib/helpers';

import styles from './brokerage.module.css'

function Brokerage ({  }) {
  const [referralCode, setReferralCode] = useState(undefined);

  useEffect(() => {
    setReferralCode(getReferralCode());
  }, []);

  let registerPath = '/app/register/';
  if (referralCode !== undefined && referralCode !== null) {
    const appendage = `?ref=${referralCode}`;
    registerPath += appendage;
  }
  return (
 <section className={styles.brokerage}>
    <Container>
      <h2>Do you have a brokerage account?</h2>
      <div className={styles.col2}>
        <div className={styles.innerCol}>
          <p>If <span>yes</span>, get yourself a free Passiv account and take control of your investments.</p>
          <a href={registerPath} className={cn(styles.btn1, styles.clickping)}>Get Passiv Free</a>
        </div>
        <div className={styles.innerCol}>
          <p>If <strong>no</strong>, click below to learn how passive investing with Passiv can save you time and money.</p>
          <a href="/blog/5-steps-passive-investing-retirement/">5 Steps to Passive Investing for Retirement</a>
          <a href="/blog/getting-started-passiv/">Getting Started with Passiv</a>
        </div>
      </div>
    </Container>
  </section>
  )
}

export default Brokerage
