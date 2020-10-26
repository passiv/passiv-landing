import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {buildImageObj,cn} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
import Container from './container'
import {Link} from 'gatsby'
import { getReferralCode, getTrackingCode } from '../lib/helpers';

import stylesA from './home/above-fold.module.css'
import stylesF from './home/features.module.css'
import stylesT from './home/testimonials.module.css'
import stylesS from './home/security.module.css'
import styles from './landing.module.css'


function Landing (props) {
  const { title, mainImage, publishedAt, tagline, description, btnUrl, btnCopy, featureTitle, feature, testimonialTitle,testimonial,darkTitle, darkCopy, darkBtnUrl, darkBtnCopy} = props
  const referralCode = getReferralCode();
  return (
    <div className={styles.landing}>
      <section className={cn(stylesA.aboveFold, styles.aboveFold)}>
        <Container>
          <div className={stylesA.ctaContainer}>
            <h1>{title}</h1>
            <p className={stylesA.tagline}>{tagline}</p>
            <p className={stylesA.blurb}>{description}</p>
            <div className={cn(stylesA.emailSignup, stylesA.inputContainer)}>
              <div className={cn(stylesA.emailContainer, stylesA.formContainer)}>
                <form className={stylesA.register} method="get" noValidate action="/app/register/">
                  <label><span>Enter your Email</span></label>
                  <input type="hidden" name="type" />
                  <input type="email" required max_length="512" className={stylesA.registerEmail} name="email" />
                  <input className={cn(stylesA.btn1, stylesA.registerBtn, stylesA.clickping)} type="submit" value={btnCopy} />
                  {
                    referralCode !== null && (
                      <input type="hidden" name="ref" value={referralCode} />
                    )
                  }
                </form>
              </div>
            </div>
          </div>
        </Container>
        {mainImage && (
          <div className={styles.imgContainer}>
            <img
              src={imageUrlFor(buildImageObj(mainImage))
              .width(900)
              .url()}
            />
          </div>
        )}
      </section>
      <section className={stylesF.features}>
        <Container>
          <h2>{featureTitle}</h2>

          <div className={stylesF.col3}>
            {feature.map( item => (
              <div className={cn(stylesF.innerCol, stylesF.tile)}>
                <div className={stylesF.tileContainer}>
                  {item.icon && (
                    <img
                      src={imageUrlFor(buildImageObj(item.icon))
                      .width(500)
                      .url()}
                    />
                  )}
                  <h3>{item.featureTitle}</h3>
                  <p>{item.featureDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className={cn(stylesT.testimonials, styles.testimonials)}>
        <Container>
          <h2>{testimonialTitle}</h2>
          <div className={stylesT.col2}>
            {testimonial.map( item => (
              <div className={cn(stylesT.innerCol, stylesT.testimonial)}>
                <p><span>"</span>{item.testimonialDesc}<span>"</span></p>
                <span className={stylesT.name}>{item.testimonialName}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className={stylesS.security}>
        <Container>
          <h2>{darkTitle}</h2>
          <p>{darkCopy}</p>
          <a href={darkBtnUrl} className={stylesS.btn1}>{darkBtnCopy}</a>
        </Container>
      </section>
    </div>
  )
}

export default Landing
