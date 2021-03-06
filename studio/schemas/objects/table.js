import React from 'react'

export default {
  name: 'table',
  type: 'object',
  title: 'Table',
  fields: [
    {
      title: 'Table Title',
      name: 'tableTitle',
      type: 'string'
    },
    {
      title: 'Table Description',
      name: 'tableDesc',
      type: 'string'
    },
    {
      type: 'array',
      name: 'tableHeadingRow',
      title: 'Table Headings',
      of: [
      {
        name: 'heading',
        type: 'string'
      }]
    },
    {
      type: 'array',
      name: 'row',
      title: 'Table Rows',
      of: [{
        type:'cells'
      }]
    }
  ],
  preview: {
    select: {
      title: 'table.name',
    }
  }
}
