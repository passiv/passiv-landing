import {format} from 'date-fns'
import {Link} from 'gatsby'
import React from 'react'
import {buildImageObj, cn, getBlogUrl} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'

import styles from './blog-post-preview.module.css'
import {responsiveTitle3} from './typography.module.css'

function MoneyGeekPostPreview (props) {
  return (
    <Link
      className={props.isInList ? styles.inList : styles.inGrid}
      to={`/weblog/${props.slug.current}/`}
    >
      <div className={styles.text}>
        <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
        <div className={styles.date}>{format(props.publishedAt, 'MMMM Do, YYYY')}</div>
      </div>
    </Link>
  )
}

export default MoneyGeekPostPreview
