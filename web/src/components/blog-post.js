import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
import Container from './container'
import axios from 'axios';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faFacebook,faTwitter,faLinkedinIn} from "@fortawesome/free-brands-svg-icons"

import ReadingProgress from 'react-reading-progress'
import Img from "gatsby-image"
import {Link} from 'gatsby'

import styles from './blog-post.module.css'

function BlogPost (props) {
  const {_rawBody, slug, authors, title, postType, mainImage, publishedAt} = props
  const handleSubmit = event => {
    event.preventDefault();
    const form = new FormData(event.target);
    const email = form.get('email');
     axios.post('https://staging.getpassiv.com/api/v1/emailsubscribe', {email: email}).then(
       response => {
         console.log('success', response)
       }
     ).catch(
       error => {
         console.log('error', error)
       }
     );
  }
  return (
    <>

    <ReadingProgress targetEl="#targetEl" />

    <article id="targetEl" className={styles.root}>
      <Container>
        <div className={styles.metaContainer}>
          <div className={styles.metaDetails}>
            {postType && (
              <Link className={styles.category} to={postType} >
                {postType}
              </Link>
            )}
            <div>
              <h1 className={styles.blogTitle}>{title}</h1>
            </div>
            <div className={styles.whoWhen}>
              {authors && authors.length > 0 && (
                <>
                {authors.map( author => (
                  <div key={author._key}>
                    <span>name {author.name}</span>
                  </div>
                ))}
                </>
              )}
              {publishedAt && (
                <span className={styles.publishedAt}>
                  {differenceInDays(new Date(publishedAt), new Date()) > 3
                    ? distanceInWords(new Date(publishedAt), new Date())
                    : format(new Date(publishedAt), 'MMMM Do, YYYY')}
                </span>
              )}
            </div>
          </div>
          {mainImage && mainImage.asset && (
            <div className={styles.mainImage}>
              <Img
                width={860}
                fluid={mainImage.asset.fluid}
                fluid={props.mainImage.asset.fluid}
                alt=""
                role="presentation"
              />
            </div>
          )}
        </div>
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
                  <button type="submit">Get Updates</button>
                </form>

              </div>
            </div>
          </div>

          <div className={styles.mainContent}>
            {_rawBody && <PortableText blocks={_rawBody} />}
          </div>

          {authors && authors.length > 0 && (
            <>
            {authors.map( author => (
              <div key={author._key}>
                <span>{author.name}</span>
                <span>{author._rawBio && <PortableText blocks={author._rawBio} />}</span>
              </div>
            ))}
            </>
          )}
        </div>
      </Container>
    </article>
    </>
  )
}

export default BlogPost
