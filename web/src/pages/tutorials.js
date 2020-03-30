import React from 'react'
import {graphql} from 'gatsby'
import {mapEdgesToNodes} from '../lib/helpers'
import TutorialPreviewGrid from '../components/tutorial-preview-grid'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import {responsiveTitle1} from '../components/typography.module.css'
import styles from '../components/tutorial.module.css'


export const query = graphql`
  query TutorialsPageQuery {
    tutorials: allSanityTutorial(
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
          vimeo {
            url
          }
          slug {
            current
          }
        }
      }
    }
  }
`

const TutorialsPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const tutorialNodes = data && data.tutorials && mapEdgesToNodes(data.tutorials)

  return (
    <div className={styles.tutorials}>
      <Layout>
        <SEO title='Tutorials' />
        <Container>
          <div className={styles.content}>
            <h1 className={responsiveTitle1}>Getting Started with Passiv</h1>
            <p className={styles.firstLine}>Just getting acquainted with Passiv? We can walk you through it.</p>
            {tutorialNodes && tutorialNodes.length > 0 && <TutorialPreviewGrid nodes={tutorialNodes} />}
          </div>
        </Container>
      </Layout>
    </div>
  )
}

export default TutorialsPage
