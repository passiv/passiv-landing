import {Link} from 'gatsby'
import React from 'react'
import FeaturePreview from './feature-preview'

import styles from './features.module.css'

function FeaturePreviewGrid (props) {
  return (
    <div className={styles.root}>
      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      <ul className={styles.posts}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id} className={styles.post}>
              <FeaturePreview {...node} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref + '/'}>Browse more</Link>
        </div>
      )}
    </div>
  )
}

FeaturePreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default FeaturePreviewGrid
