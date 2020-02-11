import {Link} from 'gatsby'
import React from 'react'
import BlogPostPreview from './blog-post-preview'

import styles from './blog-post-preview-list.module.css'

function BlogPostPreviewGrid (props) {
  return (
    <div className={styles.root}>
      {props.title && <h2>{props.title}</h2>}
      <ul className={styles.col3}>
        {props.nodes &&
          props.nodes.map(node => (
            <li className={styles.item} key={node.id}>
              <BlogPostPreview {...node} isInList />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link className={styles.btn1} to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostPreviewGrid
