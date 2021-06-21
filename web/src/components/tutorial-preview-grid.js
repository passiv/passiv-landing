import {Link} from 'gatsby'
import React, { useState } from 'react'
import TutorialPreview from './tutorial-preview'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import styles from './tutorial.module.css'

const handleOnDragStart = e => e.preventDefault()
const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
    1600: { items: 5 },
};


function TutorialPreviewGrid (props) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.root}>
      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      <div className={styles.aliceCarousel}>
        <AliceCarousel
          className={styles.posts}
          mouseTrackingEnabled={true}
          mouseDragEnabled={true}
          disableAutoPlayOnAction={true}
          autoPlay={false}
          autoWidth={false}
          disableDotsControls={true}
          keyboardNavigation={true}
          activeIndex={activeIndex}
          responsive={responsive}
          paddingRight={40}>
        
          {props.nodes &&
            props.nodes.map(node => (
              <div onDragStart={handleOnDragStart} key={node.id} className={styles.post}>
                <TutorialPreview {...node} />
              </div>
            ))}
        </AliceCarousel>
      </div>
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
