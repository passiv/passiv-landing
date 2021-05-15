import React from "react";
import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import Container from "./container";

import styles from "./page.module.css";

function Security({}) {
  return (
    <article className={cn(styles.postPage, styles.Security)}>
      <Container>
        <h1 className={styles.postTitle}>Security</h1>
        <div className={styles.postContent}>
          <p>
            Security is a fundamental part of our business. Below, we explain how we protect
            personal data and secure our systems.
          </p>

          <h2 id="how-we-access-your-personal-data">How we access your personal data</h2>

          <p>
            A functioning Passiv account relies on enabling Passiv to interact with your investment
            account. This allows Passiv to display your investment accounts, account holdings, and
            transaction history.
          </p>

          <p>
            To link your investment account, Passiv sends you over to your brokerage’s website,
            where you enter your login credentials. At no point does Passiv see or store your
            brokerage account credentials.
          </p>

          <p>
            When you link your investment account, you choose whether to grant Passiv read-only or
            trade-enabled access. Trade-enabled access allows you to execute One-Click Trades
            through Passiv.
          </p>

          <p>This access is granted through a secure OAuth flow. The process works as follows:</p>

          <ul>
            <li>
              User creates a Passiv account and clicks the Authorize button to start the OAuth flow.
            </li>
            <li>
              Passiv redirects the user to their brokerage website with a request for limited
              access.
            </li>
            <li>The user logs in to their brokerage website and grants the access request.</li>
            <li>The user is then redirected back to Passiv with a temporary access token.</li>
            <li>
              Passiv collects the access token and authenticates with the brokerage to confirm that
              the token is valid.
            </li>
            <li>
              Upon receipt of a valid token, Passiv can now sync with the user’s brokerage, enabling
              the user’s Passiv dashboard to display their accounts and holdings.
            </li>
            <li>
              Should the user wish to revoke Passiv’s access, they can delete the connection within
              Passiv or do so from the application dashboard within their brokerage account.
            </li>
          </ul>

          <p>Passiv periodically accesses information from your investment account in order to:</p>

          <ul>
            <li>Refresh the access token to keep it valid</li>
            <li>Check your account for new transactions</li>
            <li>Check your account for portfolio accuracy</li>
          </ul>

          <p>
            When you access your Passiv account, we make live requests for information from your
            investment account to give you real-time information about your account and calculated
            trades.
          </p>

          <h2 id="how-we-store-your-personal-data">How we store your personal data</h2>

          <p>
            Passiv stores limited personal data from your investment account. We store only
            information that is required to provide our service. The basic account information is a
            list of your investment accounts and identifiers associated with them. We need to store
            this information so that we can associate your set portfolio targets with their
            associated investment accounts.
          </p>

          <p>Besides basic account information, Passiv also stores:</p>

          <ul>
            <li>account holdings and balances</li>
            <li>
              symbol and ticker information to allow us to efficiently fetch quotes for securities
              associated with your account
            </li>
            <li>account transaction history for cash notifications and reporting tools</li>
            <li>
              order history for trades that were placed or attempted through Passiv’s One-Click
              Trades feature
            </li>
            <li>
              pageview and application usage history, including your IP address and session cookies
            </li>
            <li>
              anonymized aggregate statistics across all accounts, such as active accounts, total
              holdings, and other business metrics
            </li>
          </ul>

          <p>
            Your investment account information is not shared with any other party, except when
            included with communications such as emails or other messaging. Application usage data
            may be shared with third-party services including Google Analytics, Reddit, and
            Facebook.
          </p>

          <h2 id="how-we-secure-your-personal-data">How we secure your personal data</h2>

          <p>
            Passiv runs its software on servers in a major datacentre. Our servers are hosted in
            Canada and fall under the jurisdiction of the Canadian legal system. We limit server
            access to only key employees who need access to production resources. The server is
            frequently screened for vulnerabilities and patched where appropriate. Standard security
            practices such as a firewall and SSH keys are used to limit access and reduce attack
            surface. All networked services running on the server are locally bound and password
            protected where possible. Database backups are made frequently and strongly encrypted
            before uploading to a secure remote location. All data is encrypted at rest and in
            transit using SSL.
          </p>

          <h2 id="data-subprocessors">Data subprocessors</h2>

          <p>
            Passiv employs a number of third party services to help us run our business. Only
            relevant data is shared as needed with subprocessors, and is anonymized where possible.
          </p>

          <p>Data subprocessors include:</p>

          <ul>
            <li>
              <a href="https://www.digitalocean.com/" target="_blank" rel="noopener noreferrer">
                DigitalOcean
              </a>
            </li>
            <li>
              <a href="https://www.fastmail.com/" target="_blank" rel="noopener noreferrer">
                Fastmail
              </a>
            </li>
            <li>
              <a
                href="https://marketingplatform.google.com/about/analytics/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Analytics
              </a>
            </li>
            <li>
              <a href="https://postmarkapp.com/" target="_blank" rel="noopener noreferrer">
                Postmark
              </a>
            </li>
            <li>
              <a href="https://sendgrid.com/" target="_blank" rel="noopener noreferrer">
                SendGrid
              </a>
            </li>
            <li>
              <a href="https://www.twilio.com/" target="_blank" rel="noopener noreferrer">
                Twilio
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.reddit.com" target="_blank" rel="noopener noreferrer">
                Reddit
              </a>
            </li>
            <li>
              <a href="https://stripe.com/" target="_blank" rel="noopener noreferrer">
                Stripe
              </a>
            </li>
            <li>
              <a href="https://airtable.com/" target="_blank" rel="noopener noreferrer">
                Airtable
              </a>
            </li>
          </ul>

          <h2 id="deleting-your-personal-data">Deleting your personal data</h2>

          <p>
            Any user can request the permanent deletion of all their personal data at any time.
            Simply contact us using our <a href="/app/contact-form/">feedback form</a> and the email
            address associated with your Passiv account, requesting the closure of your account or
            the deletion of your personal data. Your request will be processed within five business
            days and you will receive a confirmation email once complete.
          </p>
        </div>
      </Container>
    </article>
  );
}

export default Security;
