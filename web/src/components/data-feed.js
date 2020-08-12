import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
import Container from './container'
const ReactMarkdown = require('react-markdown')

import styles from './blog-post.module.css'

function DataFeed (props) {
  const {body, title, publishedAt, postType} = props
  return (
    <article className={styles.root}>
      <Container>
        <div className={styles.grid}>
        <div className={styles.wrapper}>
          <div className={styles.sidebar}>
            <div className={styles.sidebarContainer}>
              <div className={styles.share}>
                <h2>Share</h2>
                <a
                  target="_blank"
                  href={`https://twitter.com/intent/tweet/?text=${
                    title
                  }&url=https://getpassiv.com/blog/${props.slug.current}%2F&via=getpassiv`}>
                  <FontAwesomeIcon icon={faTwitter} className={styles.icon}/>
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://getpassiv.com/blog/${
                    props.slug.current
                  }`}
                  target="_blank">
                  <FontAwesomeIcon icon={faFacebook} className={styles.icon}/>
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=https://getpassiv.com/blog/${
                    props.slug.current
                  }&title=${title}&source=${title}`}
                  target="_blank">
                  <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon}/>
                </a>
              </div>
              <div className={styles.formContainer}>
                <h2>Stay up to date</h2>

                <form onSubmit={handleSubmit}>
                  <label for="email">
                    Email
                    <input id="email" name="email" required="" type="email"/>
                  </label>
                  { success ? (
                    <button type="submit" disabled>Success</button>
                  ) : (
                    <button type="submit">Get Updates</button>
                  )}

                </form>

              </div>
            </div>
          </div>
          <div className={styles.mainContent}>
            <h1>{title}</h1>
            <ReactMarkdown
              source={body}
              escapeHtml={false}
            />
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do, YYYY')}
              </div>
            )}
          </div>
        </div>
      </Container>
    </article>
  )
}

export default DataFeed
