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
        type: 'object',
        name: 'cells',
        title: 'Table Row',
        fields: [{
          type: 'array',
          name: 'cell',
          title: 'Cells',
          of: [{
            type: 'string'
          }]
        }]
      }]
    }
  ],
  preview: {
    select: {
      title: 'table.name',
    }
  }
}
