import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import DataFeed from '../components/data-feed'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { toPlainText } from '../lib/helpers'

const dataFeedTemplate = props => {
    const { data, errors } = props
    const feed = data && data.feed
    return (
        <Layout>
            {errors && <SEO title='GraphQL Error' />}
            {feed && <SEO title={feed.title || 'Untitled'} />}

            {errors && (
                <Container>
                    <GraphQLErrorList errors={errors} />
                </Container>
            )}
            {feed && <DataFeed {...feed} />}
        </Layout>
    )
}

export default dataFeedTemplate
