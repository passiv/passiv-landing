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
