import React from 'react'
import {buildImageObj,cn} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import Container from './container'

import styles from './page.module.css'

function Privacy ({  }) {
  return (
    <article className={cn(styles.postPage,styles.Privacy)}>
      <Container>
        <h1 className={styles.postTitle}>Privacy</h1>
        <div className={styles.postContent}>
           <p>Your privacy is very important to us. Accordingly, we have developed this Policy in order for you to understand how we collect, use, communicate and disclose and make use of personal information. The following outlines our privacy policy.</p>
            <ul>
              <li>
                <p>Before or at the time of collecting personal information, we will identify the purposes for which
            information is being collected.</p>
              </li>
              <li>
                <p>We will collect and use personal information solely with the objective of fulfilling those purposes specified by us and for other compatible purposes, unless we obtain the consent of the individual concerned or as required by law.</p>
              </li>
              <li>
                <p>We will only retain personal information as long as necessary for the fulfillment of those purposes.</p>
              </li>
              <li>
                <p>We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.</p>
              </li>
              <li>
                <p>Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date.</p>
              </li>
              <li>
                <p>We will protect personal information by reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
              </li>
              <li>
                <p>We will make readily available to customers information about our policies and practices relating to the management of personal information.</p>
              </li>
            </ul>
            <p>We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained.</p>
        </div>
        <h2 className={styles.postTitle}>GDPR Compliance Statement</h2>
        <div className={styles.postContent}>
            <p>
                At Passiv we take user data and privacy very seriously. Our position is that software companies have a duty of care to protect and secure user data. As such we have decided to voluntarily adhere to GDPR standards.
            </p>
            <h3>General GDPR principles</h3>
            <ul>
                <li>
                    <p>
                        we will process all personal data fairly and lawfully
                    </p>
                </li>
                <li>
                    <p>
                        we will only process personal data for specified and lawful purposes
                    </p>
                </li>
                <li>
                    <p>
                        we will endeavor to hold relevant and accurate personal data, and where practical, we will keep it up to date
                    </p>
                </li>
                <li>
                    <p>
                        we will not keep personal data for longer than is necessary
                    </p>
                </li>
                <li>
                    <p>
                        we will keep all personal data secure
                    </p>
                </li>
                <li>
                    <p>
                        we will endeavor to ensure that personal data is not transferred to countries outside of the European Economic Area (EEA) without adequate protection
                    </p>
                </li>
            </ul>
            <h3>GDPR compliance</h3>
            <p>
                We have implemented the relevant policies and practices to ensure we protect any data handled by Passiv – for its employees and suppliers, specifically including the following:
            </p>
            <ul>
                <li>
                    <p>
                        employees were made aware of the GDPR and restrictions and obligations within it as may be relevant to them, with the relevant training provided as necessary
                    </p>
                </li>
                <li>
                    <p>
                        all new employees joining after the 25th May 2018 will receive awareness training as part of our induction programme
                    </p>
                </li>
                <li>
                    <p>
                        all suppliers who process personal data on behalf of Passiv are required to provide proof of compliance with GDPR standards
                    </p>
                </li>
            </ul>
            <h3>GDPR actions to date</h3>
            <ul>
                <li>
                    <p>
                        we created a policy to only collect and store minimum required user data
                    </p>
                </li>
                <li>
                    <p>
                        we undertook a gap analysis of all our business processes where personal data is either held or collected and produced an action plan
                    </p>
                </li>
                <li>
                    <p>
                        we are undertaking a systematic review of the personal data we store, manage, maintain, collect, process and control
                    </p>
                </li>
                <li>
                    <p>
                        we have assessed our lawful bases for processing data to ensure all personal data is processed lawfully, fairly and transparently
                    </p>
                </li>
                <li>
                    <p>
                        we migrated our servers and data center to a service provider that follows GDPR standards
                    </p>
                </li>
                <li>
                    <p>
                        we have conducted data mapping of all our processes involving personal data
                    </p>
                </li>
                <li>
                    <p>
                        we are providing training to our employees and generally raising the awareness and importance of GDPR to our business and their individual responsibilities arising from this
                    </p>
                </li>
                <li>
                    <p>
                        we are and will continue to look at ways of improving our systems and procedures to better comply with GDPR best practice
                    </p>
                </li>
            </ul>
            <h3>Contact</h3>
            <p>
                Should you require any further information about Passiv’s GDPR statements, please feel free to reach out using Passiv’s <a href="https://passiv.com/help/" target="_blank" rel="noopener noreferrer">feedback form</a>.
            </p>
        </div>
      </Container>
    </article>

  )
}

export default Privacy
