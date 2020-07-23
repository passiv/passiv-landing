export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ede65ce83dcd070494ffa3c',
                  title: 'Sanity Studio',
                  name: 'passiv-landing-studio',
                  apiId: 'e393b324-55f1-4d3d-8e3b-4d7199de9abb'
                },
                {
                  buildHookId: '5ede64cedce0626e4d69f0d5',
                  title: 'Blog Website',
                  name: 'passiv-landing',
                  apiId: '3cecaa22-8732-4d47-a3d0-bb7d8022e838'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kirstenjvd/passiv-landing',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://passiv-landing.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
