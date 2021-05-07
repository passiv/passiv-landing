import { format, distanceInWords, differenceInDays } from "date-fns";
import React, { useState, useEffect } from "react";

import { imageUrlFor } from "../lib/image-url";
import PortableText from "./portableText";
import Container from "./container";
import { Link } from "gatsby";
import SEO from "../components/seo";
import {
  cn,
  buildImageObj,
  getReferralCode,
  getTrackingCode,
  getAppBase,
  getAPIBase,
} from "../lib/helpers";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import styles from "./questrade.module.css";

function LandingNew(props) {
  const {
    title,
    mainImage,
    publishedAt,
    tagline,
    description,
    btnUrl,
    btnCopy,
    feature,
    summaryTitle,
    _rawSummaryDesc,
    summary,
    howItWorksTitle,
    howItWorks,
    howItWorksDesc,
    _rawHowItWorksDesc,
    darkTitle,
    _rawDarkBody,
  } = props;

  const referralCode = getReferralCode();
  const trackingCode = getTrackingCode();

  const apiBase = getAPIBase();
  const appBase = getAppBase();

  const [signups, setSignups] = useState(null);

  useEffect(() => {
    axios
      .get(`https://${apiBase}/api/v1/signups/`)
      .then((response) => setSignups(response.data.count));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.landingNew}>
      <section className={styles.aboveFold}>
        <Container>
          <div className={styles.ctaContainer}>
            <h1>{title}</h1>
            <p className={styles.blurb}>{description}</p>
            <div className={cn(styles.emailSignup, styles.inputContainer)}>
              <div className={cn(styles.emailContainer, styles.formContainer)}>
                <form
                  className={styles.register}
                  method="get"
                  noValidate
                  action={`https://${appBase}/app/register/`}
                >
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
                    value={btnCopy}
                  />
                  {referralCode !== null && <input type="hidden" name="ref" value={referralCode} />}
                  {trackingCode !== null && <input type="hidden" name="uid" value={trackingCode} />}
                  <p className={styles.socialProof}>
                    {signups &&
                      `Join ${new Intl.NumberFormat().format(
                        signups
                      )} new Passiv users this month!`}
                  </p>
                </form>
              </div>
            </div>
            <a href="#whyus" className={styles.scrollCTA}>
              <p>Scroll down to learn more</p>
              <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
            </a>
          </div>
        </Container>
        {mainImage && (
          <div className={styles.imgContainerAboveFold}>
            <img src={imageUrlFor(buildImageObj(mainImage)).width(1400).url()} />
          </div>
        )}
      </section>

      <section className={styles.benefits} id="whyus">
        <Container>
          <div className={styles.whyUs}>
            <div className={styles.videoWrapper}>
              <h2>{summaryTitle}</h2>
              <div>{_rawSummaryDesc && <PortableText blocks={_rawSummaryDesc} />}</div>
            </div>
            <div className={styles.copyContainerNoVid}>
              <ul>
                {summary.map((itemSum) => (
                  <li key={itemSum._key}>
                    {itemSum.icon && (
                      <img
                        alt=""
                        role="presentation"
                        src={imageUrlFor(buildImageObj(itemSum.icon)).width(500).url()}
                      />
                    )}
                    {itemSum.sumDesc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
        <div className={styles.howItWorks}>
          <Container>
            <div className={styles.howCopyContainer}>
              <h2>{howItWorksTitle}</h2>
              <ol>
                {howItWorks.map((itemHow) => (
                  <li key={itemHow._key}>
                    <p>{itemHow.howItWorksDesc}</p>
                  </li>
                ))}
              </ol>
              <div>{_rawHowItWorksDesc && <PortableText blocks={_rawHowItWorksDesc} />}</div>
            </div>
          </Container>
        </div>
      </section>

      {feature.map((itemFeature) => (
        <section key={itemFeature._key} className={styles.features}>
          <div className={styles.feature}>
            <Container>
              <div className={styles.flex}>
                <div className={styles.ctaContainer}>
                  <h2>{itemFeature.featureTitle}</h2>
                  <p className={styles.blurb}>{itemFeature.featureDesc}</p>
                </div>
                <div className={styles.imgContainer}>
                  <img
                    alt=""
                    role="presentation"
                    src={imageUrlFor(buildImageObj(itemFeature.icon)).width(1000).url()}
                  />
                </div>
              </div>
            </Container>
          </div>
        </section>
      ))}

      <section className={styles.security}>
        <Container>
          <h2>{darkTitle}</h2>
          <div>{_rawDarkBody && <PortableText blocks={_rawDarkBody} />}</div>
        </Container>
      </section>
    </div>
  );
}

export default LandingNew;
