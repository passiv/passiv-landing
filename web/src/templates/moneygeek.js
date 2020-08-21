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
    postMoneyGeek: sanityPostMoneyGeek(id: {eq: $id}) {
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
      body
    }
  }
`

const BlogPostMoneyGeekTemplate = props => {
  const {data, errors} = props
  const postMoneyGeek = data && data.postMoneyGeek


  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {postMoneyGeek && <SEO title={postMoneyGeek.title || 'Untitled'} description={toPlainText(postMoneyGeek._rawExcerpt)} image={postMoneyGeek.mainImage} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {postMoneyGeek && <BlogPost {...postMoneyGeek} />}

    </Layout>
  )
}

export default BlogPostMoneyGeekTemplate
