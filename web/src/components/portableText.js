import React from 'react'
import clientConfig from '../../client-config'
import BasePortableText from '@sanity/block-content-to-react'
import getVideoId from 'get-video-id'
import Vimeo from 'react-vimeo'
// import serializers from './serializers'

import Figure from './Figure'
import Table from './Table'

const serializers = {
  types: {
    mainImage: Figure,
    table (props) {
      return <Table {...props.node} />
    },
    vimeo: ({node}) => {
      const { url } = node
      const id = getVideoId(url).id
      return (<Vimeo videoId={id} />)
    }
  }
}

const PortableText = ({blocks}) => (
  <BasePortableText blocks={blocks} serializers={serializers} {...clientConfig.sanity} />
)

export default PortableText
