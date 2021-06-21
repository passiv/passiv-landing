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
    tutorialsExpert: allSanityTutorial(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, postType: { eq : "expert" }, publishedAt: { ne: null } }
      ) {
      edges {
        node {
          id
          publishedAt
          title
          _rawBody
          _rawExcerpt
          postType
          mainImage {
            ...SanityImage
          }
          slug {
            current
          }
        }
      }
    }

     tutorialsBasic: allSanityTutorial(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, postType: { eq : "basic" }, publishedAt: { ne: null } }
      ) {
      edges {
        node {
          id
          publishedAt
          title
          _rawBody
          _rawExcerpt
          postType
          mainImage {
            ...SanityImage
          }
          slug {
            current
          }
        }
      }
    }

     tutorialsIntermediate: allSanityTutorial(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, postType: { eq : "intermediate" }, publishedAt: { ne: null } }
      ) {
      edges {
        node {
          id
          publishedAt
          title
          _rawBody
          _rawExcerpt
          postType
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

const TutorialsPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const tutorialExpert = data && data.tutorialsExpert && mapEdgesToNodes(data.tutorialsExpert)
  const tutorialBasic = data && data.tutorialsBasic && mapEdgesToNodes(data.tutorialsBasic)
  const tutorialIntermediate = data && data.tutorialsIntermediate && mapEdgesToNodes(data.tutorialsIntermediate)

  return (
    <div className={styles.tutorials}>
      <Layout>
        <SEO title='Tutorials' />
        <Container>
          <div className={styles.content}>
            <h1 className={responsiveTitle1}>What can we help you learn today?</h1>
            <p className={styles.firstLine}>Search through our articles for helpful tips and videos.</p>
            {/* <div className={styles.searchBox}>
               <h2 className={styles.searchTitle}>SEARCH</h2>
               <input type="text" placeholder="Type to look for helpful resources"/>
            </div> */}
            <div className={styles.carouselContainer}>
              <h2 className={styles.headerBar}>Basic</h2>
              {tutorialBasic && tutorialBasic.length > 0 && <TutorialPreviewGrid nodes={tutorialBasic} />}
              <h2 className={styles.headerBar}>Intermediate</h2>
              {tutorialIntermediate && tutorialIntermediate.length > 0 && <TutorialPreviewGrid nodes={tutorialIntermediate} />}
              <h2 className={styles.headerBar}>Expert</h2>
              {tutorialExpert && tutorialExpert.length > 0 && <TutorialPreviewGrid nodes={tutorialExpert} />}
            </div>
          </div>
        </Container>

      </Layout>
    </div>
  )
}

export default TutorialsPage
