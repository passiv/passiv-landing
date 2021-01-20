import React, { useState, useEffect }  from 'react'
import {graphql} from 'gatsby'
import { buildImageObj , cn, getReferralCode, getTrackingCode } from '../lib/helpers'
import axios from "axios";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import notifications from "../images/notification@2x.svg"
import currency from "../images/currency@2x.svg"
import portfolios from "../images/portfolios@2x.svg"
import trades from "../images/trades@2x.svg"

import styles from '../components/questrade.module.css'

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query QuestradePageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`

const QuestradePage = props => {
  const {data, errors} = props

  const referralCode = getReferralCode();
  const trackingCode = getTrackingCode();

  const [signups, setSignups] = useState(null);

  useEffect(() => {
    axios.get(`https://${process.env.GATSBY_API_BASE_URL_OVERRIDE}/api/v1/signups/`)
    .then(response => setSignups(response.data.count))
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO
        title="Questrade Landing Page"
        description="Passiv builds portfolio rebalancing software for DIY investors. This page explains a bit about us and the company we're building."
        keywords={site.keywords}
      />
      <div className={styles.questrade}>
        <section className={styles.aboveFold}>
          <Container>
            <div className={styles.ctaContainer}>
              <h1>Autopilot for your Portfolio</h1>
              <p className={styles.blurb}>Passiv turns your <strong>Questrade</strong> account into a modern portfolio management tool. Build your own personalized index, invest and rebalance with the click of a button, and seamlessly manage multiple accounts.</p>
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
                    {trackingCode !== null && <input type="hidden" name="uid" value={trackingCode} />}
                      <p className={styles.socialProof}>
                      {signups && `Join ${signups} new Passiv users this month!`}
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
        </section>
        <section className={styles.benefits} id="whyus">
          <Container>
            <div className={styles.flexContainer}>
              <div className={styles.videoWrapper}>

                <h2>Free Passiv Elite</h2>
                <p>All Questrade clients can upgrade to Elite for free and get access to these premium features.</p>

                <div>
                  <iframe width="560" height="309" src="https://www.youtube.com/embed/7qNmzwSIZ2A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
              <div className={styles.copyContainer}>
                <ul>
                  <li>
                    <img src={trades} alt="" role="presentation" />
                    Place trades directly from Passiv across your Questrade accounts
                  </li>
                  <li>
                    <img src={currency} alt="" role="presentation" />
                    Choose how Passiv manages your assets in multiple currencies
                  </li>
                  <li className={styles.notifications}>
                    <img src={notifications} alt="" role="presentation" />
                    Get notified whenever your portfolio drifts out of alignment
                  </li>
                  <li>
                    <img src={portfolios} alt="" role="presentation" />
                    Manage multiple Questrade accounts as one portfolio
                  </li>
                </ul>
              </div>
            </div>
          </Container>
          <div className={styles.howItWorks}>
            <Container>
              <div className={styles.howCopyContainer}>
                <h2><span>How</span> it Works</h2>
                <ol>
                    <li><p>Connect your Questrade account</p></li>
                    <li><p>Set up your target portfolio </p></li>
                    <li><p>Let Passiv do all the work </p></li>
                </ol>
                <p className={styles.bonus}><strong>Bonus:</strong> Set up a Pre-Authorized Deposit to fund your Questrade account and put your retirement strategy on autopilot.</p>

                <p>Need more help getting started? Check out our <a href="/tutorials" className={styles.link}>tutorials</a></p>
              </div>
            </Container>
          </div>
        </section>

        <section className={styles.features}>
          <div className={styles.feature3}>
            <Container>
              <div className={styles.ctaContainer}>
                <h2>Automate your investments</h2>
                <p className={styles.blurb}>Save time by letting Passiv calculate & execute the trades needed to keep your portfolio balanced.</p>
              </div>
            </Container>
          </div>
        </section>

        <section className={styles.features}>
          <div className={styles.feature4}>
            <Container>
              <div className={styles.ctaContainer}>
                <h2>Maintain your target allocation</h2>
                <p className={styles.blurb}>Build your portfolio and maintain your target allocation. Use Passiv’s “buy-only” setting to identify the underweight assets in your portfolio or “enable selling” to do a full rebalance.</p>
              </div>
            </Container>
          </div>
        </section>

        <section className={styles.features}>
          <div className={styles.feature}>
            <Container>
              <div className={styles.ctaContainer}>
                <h2>Performance reporting</h2>
                <p className={styles.blurb}>See how your investments are performing. Keep track of your portfolio’s growth, value, contributions, dividend payments and more.</p>
              </div>
            </Container>
          </div>
        </section>

        <section className={styles.features}>
          <div className={styles.feature2}>
            <Container>
              <div className={styles.ctaContainer}>
                <h2>Cash management</h2>
                <p className={styles.blurb}>Use cash management rules to help with dollar-cost averaging. Have greater flexibility and control over the cash in held in your Questrade account.</p>
              </div>
            </Container>
          </div>
        </section>

        <section className={styles.security}>
          <Container>
            <h2>Passiv uses <span>bank-level</span> security standards</h2>
            <ul>
              <li>Passiv works with Questrade directly to keep your information safe and secure.</li>
              <li>All information is encrypted and Passiv never has access to your account credentials or personal identifying information.</li>
              <li>Passiv is an official Questrade partner and using Passiv will not violate your account's terms and conditions.</li>
              <li>Passiv is GDPR compliant and will never share your financial data with third parties.</li>
            </ul>
            <p>Review Passiv's <a href="/security/">Security page</a> to learn more.</p>
          </Container>
        </section>
      </div>
    </Layout>
  )
}

export default QuestradePage
