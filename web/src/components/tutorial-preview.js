import {format} from 'date-fns'
import {Link} from 'gatsby'
import React from 'react'
import {buildImageObj, cn, getBlogUrl} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'

import styles from './tutorial.module.css'
import {responsiveTitle3} from './typography.module.css'

function TutorialPreview (props) {

const {_rawBody, title} = props

  return (
    <div className={styles.text}>
      <h2 className={cn(responsiveTitle3, styles.title)}>
        <Link to={`/help/tutorials/${props.slug.current}/`}>
          {props.title}
        </Link>
      </h2>
      {props._rawExcerpt && (
        <div className={styles.excerpt}>
          <PortableText blocks={props._rawExcerpt} />
        </div>
      )}
      <Link className={styles.readBtn} to={`/help/tutorials/${props.slug.current}/`}>
        Read More
      </Link>
    </div>
  )
}

export default TutorialPreview
