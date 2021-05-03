const { isFuture } = require("date-fns");

const { format } = require("date-fns");

async function createBlogPostPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityPost || {}).edges || [];

  postEdges
    .filter((edge) => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const { id, slug = {}, publishedAt } = edge.node;
      const dateSegment = format(publishedAt, "YYYY/MM");
      
      const path = `/blog/${slug.current}/`;

      createPage({
        path,
        component: require.resolve("./src/templates/blog-post.js"),
        context: { id },
      });
    });
}

async function createBlogPostMoneyGeekPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPostMoneyGeek(filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postMoneyGeekEdges = (result.data.allSanityPostMoneyGeek || {}).edges || [];

  postMoneyGeekEdges
    .filter((edge) => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const { id, slug = {}, publishedAt } = edge.node;
      const dateSegment = format(publishedAt, "YYYY/MM");
      const path = `/weblog/${slug.current}/`;

      createPage({
        path,
        component: require.resolve("./src/templates/moneygeek.js"),
        context: { id },
      });
      
    });
}

async function createTutorialPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityTutorial(filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const tutorialEdges = (result.data.allSanityTutorial || {}).edges || [];

  tutorialEdges
    .filter((edge) => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const { id, slug = {}, publishedAt } = edge.node;
      const dateSegment = format(publishedAt, "YYYY/MM");
      const path = `/help/tutorials/${slug.current}/`;

      createPage({
        path,
        component: require.resolve("./src/templates/tutorial.js"),
        context: { id },
      });
    });
}

async function createLandingPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityLanding(filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

    if (result.errors) throw result.errors;

  const landingEdges = (result.data.allSanityLanding || {}).edges || [];

  landingEdges
    .filter((edge) => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const { id, slug = {}, publishedAt } = edge.node;
      const dateSegment = format(publishedAt, "YYYY/MM");
      const path = `/${slug.current}/`;

      createPage({
        path,
        component: require.resolve("./src/templates/landing-page.js"),
        context: { id },
      });
    });
}

async function createLandingNewPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityLandingNew(filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);


  if (result.errors) throw result.errors;

  const landingNewEdges = (result.data.allSanityLandingNew || {}).edges || [];

  landingNewEdges
    .filter((edge) => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const { id, slug = {}, publishedAt } = edge.node;
      const dateSegment = format(publishedAt, "YYYY/MM");
      const path = `/${slug.current}/`;

      createPage({
        path,
        component: require.resolve("./src/templates/landing-new-page.js"),
        context: { id },
      });
    });
}

async function createDataPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityDataFeed(filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
            postType
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const dataFeedEdges = (result.data.allSanityDataFeed || {}).edges || [];

  dataFeedEdges
    .filter((edge) => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const { id, slug = {}, publishedAt } = edge.node;
      const dateSegment = format(publishedAt, "YYYY/MM");
      const path = `${edge.node.postType}/${slug.current}/`;

      createPage({
        path,
        component: require.resolve("./src/templates/data-feed.js"),
        context: { id },
      });
    });
}

async function createModelPortfolios(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityModelPortfolio(filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const modelPortfolioEdges = (result.data.allSanityModelPortfolio || {}).edges || [];

  modelPortfolioEdges
    .filter((edge) => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const { id, slug = {}, publishedAt } = edge.node;
      const dateSegment = format(publishedAt, "YYYY/MM");
      const path = `model-portfolio/${slug.current}/`;

      createPage({
        path,
        component: require.resolve("./src/templates/model-portfolio.js"),
        context: { id },
      });
    });
}

async function createFeaturePages(graphql, actions) {
    const { createPage } = actions;
    const result = await graphql(`
      {
        allSanityFeaturePage(filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }) {
          edges {
            node {
              id
              publishedAt
              slug {
                current
              }
            }
          }
        }
      }
    `);
  
    if (result.errors) throw result.errors;
  
    const featurePageEdges = (result.data.allSanityfeaturePage || {}).edges || [];
  
    featurePageEdges
      .filter((edge) => !isFuture(edge.node.publishedAt))
      .forEach((edge, index) => {
        const { id, slug = {}, publishedAt } = edge.node;
        const dateSegment = format(publishedAt, "YYYY/MM");
        const path = `features/${slug.current}/`;
  
        createPage({
          path,
          component: require.resolve("./src/templates/feature.js"),
          context: { id },
        });
      });
  }


exports.createPages = async ({ graphql, actions }) => {
  await createBlogPostPages(graphql, actions);
  await createBlogPostMoneyGeekPages(graphql, actions);
  await createTutorialPages(graphql, actions);
  await createLandingPages(graphql, actions);
  await createLandingNewPages(graphql, actions);
  await createDataPages(graphql, actions);
  await createModelPortfolios(graphql, actions);
  await createFeaturePages(graphql, actions);
};
