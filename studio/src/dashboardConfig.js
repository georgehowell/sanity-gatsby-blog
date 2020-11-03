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
                  buildHookId: '5fa0aeefa86290219dc57a6e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-rcywkn2w',
                  apiId: '33ec98aa-b423-427d-92e6-11a801efd3d5'
                },
                {
                  buildHookId: '5fa0aeefdaebff1bff21f9f6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-8xqr1onz',
                  apiId: 'd5dd58ee-3ddb-4236-b61c-e3c573374090'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/georgehowell/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-8xqr1onz.netlify.app', category: 'apps' }
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
