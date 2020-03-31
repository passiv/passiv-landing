import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Landing from '../components/landing'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {toPlainText} from '../lib/helpers'

export const query = graphql`
  query LandingTemplateQuery($id: String!) {
    landing: sanityLanding(id: {eq: $id}) {
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
      featureTitle
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
      testimonialTitle
      testimonial {
        _key
        _type
        testimonialDesc
        testimonialName
      }
      darkTitle
      darkCopy
      darkBtnUrl
      darkBtnCopy
    }
  }
`

const LandingTemplate = props => {
  const {data, errors} = props
  const landing = data && data.landing
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {landing && <SEO title={landing.title || 'Untitled'} description={landing.description || 'Untitled'} image={landing.mainImage} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {landing && <Landing {...landing} />}
    </Layout>
  )
}

export default LandingTemplate
