// This code runs once in the process of building the site
// gatsby-node API will be used to create pages dynamically,
// add data into GraphQL, or respond to events during
// the build lifecycle.

const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  // destructuring action props
  const { createPage } = actions
  // write query, iterate over nodes, use items to build page

  //await for promise to settle
  const result = await graphql(`
    query GetExercises {
      allContentfulExercise {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)

  result.data.allContentfulExercise.nodes.forEach(exercise => {
    exercise.content.tags.forEach(tag => {
      createPage({
        // 3 properties are needed in order to create the page.
        // path of the created page
        // a component to populate the page
        // a variable to use in the query
        path: `/${tag}`,
        component: path.resolve(`src/templates/tag-template.js`),
        context: {
          tag: tag,
        },
      })
    })
  })
}
