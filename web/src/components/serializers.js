import React from 'react'
import Figure from './Figure'
import getVideoId from 'get-video-id'
import Vimeo from 'react-vimeo'

const serializers = {
  types: {
    authorReference: ({node}) => <span>{node.author.name}</span>,
    mainImage: Figure,
    vimeo: ({node}) => {
      const { url } = node
      const id = getVideoId(url).id
      return (<Vimeo videoId={id} />)
    }
  }
}

export default serializers
