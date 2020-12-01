import { format } from 'date-fns'

export default {
    name: 'howToInvest',
    type: 'document',
    title: 'How to Invest $X For the Long-Term',
    fields: [
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
