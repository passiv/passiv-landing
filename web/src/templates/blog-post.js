import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import BlogPost from '../components/blog-post'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {toPlainText} from '../lib/helpers'

import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'

import BlogPostPreviewList from '../components/blog-post-preview-list'

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    posts: allSanityPost(
      limit: 3
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
    post: sanityPost(id: {eq: $id}) {
      id
      publishedAt
      mainImage {
        asset {
          fluid(maxWidth: 1600) {
            ...GatsbySanityImageFluid_noBase64
          }
          _id
        }
        alt
      }
      title
      slug {
        current
      }
      postType
      _rawExcerpt(resolveReferences: {maxDepth: 5})
      _rawBody(resolveReferences: {maxDepth: 5})
    }
  }
`

const BlogPostTemplate = props => {
  const {data, errors} = props
  const post = data && data.post

  const postNodes = (data || {}).posts
  ? mapEdgesToNodes(data.posts)
    .filter(filterOutDocsWithoutSlugs)
    .filter(filterOutDocsPublishedInTheFuture)
  : []


  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {post && <SEO title={post.title || 'Untitled'} description={toPlainText(post._rawExcerpt)} image={post.mainImage} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {post && <BlogPost {...post} />}
      <Container>
        {postNodes && (
          <BlogPostPreviewList
            title='Latest Posts'
            nodes={postNodes}
            browseMoreHref='/blog/'
          />
        )}
      </Container>

    </Layout>
  )
}

export default BlogPostTemplate
