import {Link} from 'gatsby'
import React from 'react'
import TutorialPreview from './tutorial-preview'

import styles from './tutorial.module.css'

function TutorialPreviewGrid (props) {
  return (
    <div className={styles.root}>
      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      <ul className={styles.posts}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id} className={styles.post}>
              <TutorialPreview {...node} />
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

TutorialPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default TutorialPreviewGrid
