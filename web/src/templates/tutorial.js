import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Tutorials from '../components/tutorials'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {toPlainText,cn} from '../lib/helpers'

export const query = graphql`
  query TutorialTemplateQuery($id: String!) {
    tutorial: sanityTutorial(id: {eq: $id}) {
      id
      publishedAt
      categories {
        _id
        title
      }
      title
      mainImage {
        ...SanityImage
      }
      slug {
        current
      }
      _rawExcerpt(resolveReferences: {maxDepth: 5})
      _rawBody(resolveReferences: {maxDepth: 5})
    }
  }
`

const TutorialTemplate = props => {
  const {data, errors} = props
  const tutorial = data && data.tutorial
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {tutorial && <SEO title={tutorial.title || 'Untitled'} description={toPlainText(tutorial._rawExcerpt)} image={tutorial.mainImage} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {tutorial && <Tutorials {...tutorial} />}
    </Layout>
  )
}

export default TutorialTemplate
