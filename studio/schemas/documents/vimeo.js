import React from 'react'
import getVideoId from 'get-video-id'
import Vimeo from '@u-wave/react-vimeo';

const Preview = ({value}) => {
  const { url } = value
  const videoId = getVideoId(url).id
  return (<Vimeo video={ videoId } />)
}

export default {
  name: 'vimeo',
  type: 'object',
  title: 'Vimeo Embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'Vimeo URL'
    }
  ],
  preview: {
    select: {
      url: 'url'
    },
    component: Preview
  }
}
