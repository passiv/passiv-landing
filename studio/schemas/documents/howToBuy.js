import { format } from 'date-fns'

export default {
    name: 'howToBuy',
    type: 'document',
    title: 'How To Buy X Stock',
    fields: [
        {
            name: 'ticker',
            type: 'string',
            title: 'Ticker',
        },
        {
            name: 'companyName',
            type: 'string',
            title: 'Company Name',
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
            name: 'authors',
            title: 'Authors',
            type: 'array',
            of: [
                {
                    type: 'authorReference'
                }
            ]
        },
    ],
}
