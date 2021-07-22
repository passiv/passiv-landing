import {format} from 'date-fns'
import {Link} from 'gatsby'
import React from 'react'
import {buildImageObj, cn, getBlogUrl} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'

import styles from './features.module.css'
import {responsiveTitle3} from './typography.module.css'

function FeaturePreview (props) {

const {_rawBody, title, vimeo} = props

  return (
    <div className={styles.text}>
      <h2 className={styles.title}>
          {props.title}
      </h2>
      {props._rawExcerpt && (
        <div className={styles.excerpt}>
          <PortableText blocks={props._rawExcerpt} />
        </div>
      )}
      
      <div className={styles.videoContainer}>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(1200)
              .auto('format')
              .url()}
          />
        )}
      </div>
    </div>
  )
}

export default FeaturePreview
