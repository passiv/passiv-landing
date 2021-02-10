import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { toPlainText } from '../lib/helpers'

export const query = graphql`
  query FeatureTemplateQuery($id: String!) {
    feature: sanityFeaturePage(id: {eq: $id}) {
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

const FeatureTemplate = props => {
    const { data, errors } = props
    const feature = data && data.feature
    return (
        <Layout>
            {errors && <SEO title='GraphQL Error' />}
            {feature && <SEO title={feature.title || 'Untitled'} description={toPlainText(feature._rawExcerpt)} image={feature.mainImage} />}

            {errors && (
                <Container>
                    <GraphQLErrorList errors={errors} />
                </Container>
            )}

            {feature && <Features {...feature} />}
        </Layout>
    )
}

export default FeatureTemplate
