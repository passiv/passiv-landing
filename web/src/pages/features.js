import React from 'react'
import {graphql} from 'gatsby'
import {mapEdgesToNodes} from '../lib/helpers'
import FeaturePreviewGrid from '../components/feature-preview-grid'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import {responsiveTitle1} from '../components/typography.module.css'
import styles from '../components/tutorial.module.css'


export const query = graphql`
  query FeaturesPageQuery {
    features: allSanityFeaturePage(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
      edges {
        node {
          id
          publishedAt
          title
          _rawBody
          _rawExcerpt
          mainImage {
            ...SanityImage
          }
          slug {
            current
          }
        }
      }
    }
  }
`

const FeaturesPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const featureNodes = data && data.features && mapEdgesToNodes(data.features)

  return (
    <div className={styles.features}>
      <Layout>
        <SEO title='Features' />
        <Container>
          <div className={styles.content}>
            <h1 className={responsiveTitle1}>Passiv's Features</h1>
            <p className={styles.firstLine}>Passiv provides all the functionality you need to manage your own portfolio. This page lists all of our features.</p>
            {featureNodes && featureNodes.length > 0 && <FeaturePreviewGrid nodes={featureNodes} />}
          </div>
        </Container>
      </Layout>
    </div>
  )
}

export default FeaturesPage
