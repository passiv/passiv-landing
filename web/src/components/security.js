import React from 'react'
import {buildImageObj,cn} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import Container from './container'

import styles from './page.module.css'

function Security ({  }) {
  return (
    <article className={cn(styles.postPage,styles.Security)}>
      <Container>
        <h1 className={styles.postTitle}>Security</h1>
        <div className={styles.postContent}>
          <p>Security is a fundamental part of our business. Below, we explain how we protect personal data and secure our systems.</p>

          <h2 id="how-we-access-your-personal-data">How we access your personal data</h2>

          <p>A functioning Passiv account relies on enabling Passiv to interact with your investment account. This allows Passiv to display your investment accounts, account holdings, and transaction history.</p>

          <p>To link your investment account, Passiv sends you over to your brokerage’s website, where you enter your login credentials. At no point does Passiv see or store your brokerage account credentials.</p>

          <p>When you link your investment account, you choose whether to grant Passiv read-only or trade-enabled access. Trade-enabled access allows you to execute One-Click Trades through Passiv.</p>

          <p>This access is granted through a secure OAuth flow. The process works as follows:</p>

          <ul>
            <li>User creates a Passiv account and clicks the Authorize button to start the OAuth flow.</li>
            <li>Passiv redirects the user to their brokerage website with a request for limited access.</li>
            <li>The user logs in to their brokerage website and grants the access request.</li>
            <li>The user is then redirected back to Passiv with a temporary access token.</li>
            <li>Passiv collects the access token and authenticates with the brokerage to confirm that the token is valid.</li>
            <li>Upon receipt of a valid token, Passiv can now sync with the user’s brokerage, enabling the user’s Passiv dashboard to display their accounts and holdings.</li>
            <li>Should the user wish to revoke Passiv’s access, they can do so from the application dashboard within their brokerage account.</li>
          </ul>

          <p>Passiv periodically accesses information from your investment account in order to:</p>

          <ul>
            <li>Refresh the access token to keep it valid</li>
            <li>Check your account for new transactions</li>
            <li>Check your account for portfolio accuracy</li>
          </ul>

          <p>When you access your Passiv account, we make live requests for information from your investment account to give you real-time information about your account and calculated trades.</p>

          <h2 id="how-we-store-your-personal-data">How we store your personal data</h2>

          <p>Passiv stores very limited personal data from your investment account. We store only basic account information and details required to provide our service. The basic account information is a list of your investment accounts and identifiers associated with them. We need to store this information so that we can associate your set portfolio targets with their associated investment accounts. We do not store your current holdings, open trades, or account equity. While Passiv does access detailed information from your investment account, the data is passed directly to the application program interface (API) and not persistently cached or stored in any way.</p>

          <p>Besides basic account information, Passiv also stores:</p>

          <ul>
            <li>symbol and ticker information to allow us to efficiently fetch quotes for securities associated with your account</li>
            <li>account transaction history for cash notifications</li>
            <li>order history for trades that were placed or attempted through Passiv’s One-Click Trades feature</li>
            <li>pageview and application usage history, including your IP address and session cookies</li>
            <li>anonymized aggregate statistics across all accounts, such as active accounts, total holdings, and other business metrics</li>
          </ul>

          <p>The data we store is not shared with any other party, except for application usage monitoring which is provided by third-party services including Google Analytics, Amplitude, HotJar, and Sendgrid.</p>

          <h2 id="how-we-secure-your-personal-data">How we secure your personal data</h2>

          <p>Passiv runs its software on a private dedicated server in a major datacentre. Our server is hosted in Canada, so everything falls under the jurisdiction of the Canadian legal system. We limit server access to only key employees who need access to production resources. The server is frequently screened for vulnerabilities and patched where appropriate. Standard security practices such as a firewall and SSH keys are used to limit access and reduce attack surface. All networked services running on the server are locally bound and password protected where possible. Database backups are made frequently and strongly encrypted before uploading to a secure remote location.</p>

          <p>Moving forward, we will be implementing at-rest encryption for database assets and a robust key management system.</p>

          <h2 id="deleting-your-personal-data">Deleting your personal data</h2>

          <p>Any user can request the permanent deletion of all their personal data at any time. Simply send us an email at <a href="mailto:support@getpassiv.com">support@getpassiv.com</a> from the email address associated with your Passiv account, requesting the closure of your account or the deletion of your personal data. Your request will be processed within two business days and you will receive a confirmation email once complete.</p>


        </div>
      </Container>
    </article>

  )
}

export default Security
