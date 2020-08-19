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
  query BlogPostMoneyGeekTemplateQuery($id: String!) {
    posts: allSanityPostMoneyGeek(
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
    post: sanityPostMoneyGeek(id: {eq: $id}) {
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
      authors {
        _key
        author {
          _id
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          name
          _rawBio
        }
      }
    }
  }
`

const BlogPostMoneyGeekTemplate = props => {
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
            browseMoreHref='/moneygeek/'
          />
        )}
      </Container>

    </Layout>
  )
}

export default BlogPostMoneyGeekTemplate
