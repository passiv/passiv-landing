import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {buildImageObj,cn} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
import Container from './container'
import AuthorList from './author-list'

import getVideoId from 'get-video-id'

import styles from './blog-post.module.css'

function Tutorials (props) {
  const {_rawBody, _rawExcerpt, authors, categories, title, mainImage, publishedAt, vimeo} = props

  return (
    <article className={styles.root}>
      <Container>
        <div className={styles.tutorialPost}>
          <div className={styles.mainContent}>
            <h1>{title}</h1>
            {_rawExcerpt && <PortableText blocks={_rawExcerpt} />}
            {_rawBody && <PortableText blocks={_rawBody} />}
          </div>
        </div>
      </Container>
    </article>
  )
}

export default Tutorials
