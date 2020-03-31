const {isFuture} = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const {format} = require('date-fns')

async function createBlogPostPages (graphql, actions) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []

  postEdges
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const {id, slug = {}, publishedAt} = edge.node
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/blog/${slug.current}/`

      createPage({
        path,
        component: require.resolve('./src/templates/blog-post.js'),
        context: {id}
      })
    })
}

async function createTutorialPages (graphql, actions) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityTutorial(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const tutorialEdges = (result.data.allSanityTutorial || {}).edges || []

  tutorialEdges
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const {id, slug = {}, publishedAt} = edge.node
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/help/tutorials/${slug.current}/`

      createPage({
        path,
        component: require.resolve('./src/templates/tutorial.js'),
        context: {id}
      })
    })
}

async function createLandingPages (graphql, actions) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityLanding(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const landingEdges = (result.data.allSanityLanding || {}).edges || []

  landingEdges
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const {id, slug = {}, publishedAt} = edge.node
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${slug.current}/`

      createPage({
        path,
        component: require.resolve('./src/templates/landing-page.js'),
        context: {id}
      })
    })
}

exports.createPages = async ({graphql, actions}) => {
  await createBlogPostPages(graphql, actions)
  await createTutorialPages(graphql, actions)
  await createLandingPages(graphql, actions)
}
