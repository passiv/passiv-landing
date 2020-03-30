import {format} from 'date-fns'
import {Link} from 'gatsby'
import React from 'react'
import {buildImageObj, cn, getBlogUrl} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
import getVideoId from 'get-video-id'
import Vimeo from '@u-wave/react-vimeo';

import styles from './tutorial.module.css'
import {responsiveTitle3} from './typography.module.css'

function TutorialPreview (props) {

const {_rawBody, title, vimeo} = props

  const url = vimeo.url
  const videoId = getVideoId(url).id

  return (
    <div className={styles.text}>
      <h2 className={cn(responsiveTitle3, styles.title)}>
        <Link to={`/help/tutorials/${props.slug.current}`}>
          {props.title}
        </Link>
      </h2>
      {props._rawExcerpt && (
        <div className={styles.excerpt}>
          <PortableText blocks={props._rawExcerpt} />
        </div>
      )}
      {props._rawBody && (
        <div className={styles.body}>
          <PortableText blocks={props._rawBody} />
        </div>
      )}
      <div className={styles.videoContainer}>
        <Vimeo video={videoId} width="640" />
      </div>
    </div>
  )
}

export default TutorialPreview
