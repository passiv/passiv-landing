import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import ModelPortfolio from "../components/model-portfolio";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { toPlainText } from "../lib/helpers";

export const query = graphql`
  query modelPortfolioTemplateQuery($id: String!) {
    feed: sanityModelPortfolio(id: { eq: $id }) {
      id
      publishedAt
      title
      slug {
        current
      }
      postType
      body
    }
  }
`;

const modelPortfolioTemplate = (props) => {
  const { data, errors } = props;
  const feed = data && data.feed;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {feed && <SEO title={feed.title || "Untitled"} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {feed && <ModelPortfolio {...feed} />}
    </Layout>
  );
};

export default modelPortfolioTemplate;