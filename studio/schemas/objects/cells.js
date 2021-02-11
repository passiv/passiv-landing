import React from 'react' 

export default {
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
}