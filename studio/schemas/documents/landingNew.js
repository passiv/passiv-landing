import {format} from 'date-fns'

export default {
  name: 'landingNew',
  type: 'document',
  title: 'Landing 2.0',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing'
    },
    {
      name: 'tagline',
      type: 'string',
      title: 'Tagline',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'btnUrl',
      type: 'url',
      title: 'Button Url',
    },
    {
      name: 'btnCopy',
      type: 'string',
      title: 'Button Label',
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    },
    {
      name: 'summaryTitle',
      type: 'string',
      title: 'Summary Title',
    },
    {
      name: 'summaryDesc',
      type: 'bodyPortableText',
      title: 'Summary Desc',
    },
    {
      type: 'array',
      name: 'summary',
      title: 'Summary',
      of: [{
        type: 'summary'
      }]
    },
    {
      name: 'howItWorksTitle',
      type: 'string',
      title: 'How It Works Title',
    },
    {
      type: 'array',
      name: 'howItWorks',
      title: 'How It Works',
      of: [{
        type: 'howItWorks'
      }]
    },
    {
      name: 'howItWorksDesc',
      type: 'bodyPortableText',
      title: 'How it works content area',
    },
    {
      type: 'array',
      name: 'feature',
      title: 'Feature',
      of: [{
        type: 'feature'
      }]
    },
    {
      name: 'darkTitle',
      type: 'string',
      title: 'Dark Section Title',
      description: 'Bottom Section Title'
    },
    {
      name: 'darkBody',
      type: 'bodyPortableText',
      title: 'Dark Body'
    }
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare ({title = 'No title', publishedAt, slug = {}, media}) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}
