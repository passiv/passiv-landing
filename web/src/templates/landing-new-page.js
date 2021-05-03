import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import LandingNew from '../components/landingNew'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query LandingNewTemplateQuery($id: String!) {
    landingNew: sanityLandingNew(id: {eq: $id}) {
      id
      title
      slug {
        current
      }
      publishedAt
      tagline
      description
      btnUrl
      btnCopy
      mainImage {
        ...SanityImage
        alt
      }
      feature {
        _key
        _type
        icon {
          asset {
            _id
          }
        }
        featureTitle
        featureDesc
      }
      summary{
        _key
        _type
        icon {
          asset {
            _id
          }
        }
        sumDesc

      }
      _rawSummaryDesc
      summaryTitle
      howItWorksTitle
      howItWorks {
        _key
        _type
        howItWorksDesc
        howItWorksName
      }
      _rawHowItWorksDesc
      darkTitle
      _rawDarkBody
    }
  }
`

const LandingNewTemplate = props => {
    const { data, errors } = props
    const landingNew = data && data.landingNew
    return (
        <Layout>
            {errors && <SEO title='GraphQL Error' />}
            {landingNew && <SEO title={landingNew.title || 'Untitled'} description={landingNew.description || 'Untitled'} image={landingNew.mainImage} />}

            {errors && (
                <Container>
                    <GraphQLErrorList errors={errors} />
                </Container>
            )}

            {landingNew && <LandingNew {...landingNew} />}
        </Layout>
    )
}

export default LandingNewTemplate
