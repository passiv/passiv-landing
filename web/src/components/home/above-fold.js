import React, { useState, useEffect } from "react";
import { buildImageObj, cn } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import Container from "../container";
import { getReferralCode, getTrackingCode, getAppBase, getAPIBase } from "../../lib/helpers";
import axios from "axios";
import styles from "./above-fold.module.css";

function AboveFold({}) {
  const referralCode = getReferralCode();
  const trackingCode = getTrackingCode();

  const apiBase = getAPIBase();
  const appBase = getAppBase();

  const [signups, setSignups] = useState(null);

  useEffect(() => {
    axios.get(`https://${apiBase}/v1/signups/`)
    .then(response => setSignups(response.data.count))
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className={styles.aboveFold}>
      <Container>
        <div className={styles.ctaContainer}>
          <h1>Autopilot for your Portfolio</h1>
          <p className={styles.blurb}>
            Passiv turns your brokerage account into a modern portfolio management tool. Build your
            own personalized index, invest and rebalance with the click of a button, and seamlessly
            manage multiple accounts.
          </p>
          <div className={cn(styles.emailSignup, styles.inputContainer)}>
            <div className={cn(styles.emailContainer, styles.formContainer)}>
              <form className={styles.register} method="get" noValidate action={`https://${appBase}/register/`}>
                <label>
                  <span>Enter your Email</span>
                </label>
                <input type="hidden" name="type" />
                <input
                  type="email"
                  required
                  max_length="512"
                  className={styles.registerEmail}
                  name="email"
                />
                <input
                  className={cn(styles.btn1, styles.registerBtn, styles.clickping)}
                  type="submit"
                  value={`Get Passiv`}
                />
                {referralCode !== null && <input type="hidden" name="ref" value={referralCode} />}
                {trackingCode !== null && <input type="hidden" name="uid" value={trackingCode} />}
                <p className={styles.socialProof}>
                {signups && `Join ${new Intl.NumberFormat().format(signups)} new Passiv users this month!`}
                </p>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboveFold;
