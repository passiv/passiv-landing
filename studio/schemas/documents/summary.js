//Note - these are for feature block components that are primarily used on Passiv's homepage

export default {
  type: 'object',
  name: 'summary',
  title: 'Summary',
  fields: [
    {
      title: 'Icon',
      name: 'icon',
      type: 'image'
    },
    {
      title: 'Feature Description',
      name: 'featureDesc',
      type: 'string'
    }
  ]
}
