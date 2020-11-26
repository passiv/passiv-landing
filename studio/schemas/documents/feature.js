//Note - these are for feature block components that are primarily used on Passiv's homepage

export default {
  type: 'object',
  name: 'feature',
  title: 'Feature',
  fields: [
    {
      title: 'Icon',
      name: 'icon',
      type: 'image'
    },
    {
      title: 'Feature Title',
      name: 'featureTitle',
      type: 'string'
    },
    {
      title: 'Feature Description',
      name: 'featureDesc',
      type: 'string'
    }
  ]
}
