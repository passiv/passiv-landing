import React, { useState } from "react";
import { buildImageObj, cn } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import Container from "../container";
import { getReferralCode } from "../../lib/helpers";
import axios from "axios";
import styles from "./above-fold.module.css";

function AboveFold({}) {
  const referralCode = getReferralCode();

  const [signups, setSignups] = useState(0);
  axios.get("https://getpassiv.com/api/v1/signups/")
  .then(data => setSignups(data.count))	    
  .then(response => setSignups(response.data.count))


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
              <form className={styles.register} method="get" noValidate action="/app/register/">
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
                  <p className={styles.socialProof}>
                  {signups && `Join ${signups} new Passiv users this month!`}
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
