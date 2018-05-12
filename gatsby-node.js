const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);
const slug = require('slug');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `ProductsCsv`) {
    createNodeField({
      node,
      name: `slug`,
      value: slug(node.name),
    })
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allProductsCsv {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allProductsCsv.edges.forEach(({ node }) => {
        createPage({
          path: '/products/' + node.fields.slug,
          component: path.resolve(`./src/templates/product.tsx`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
};
