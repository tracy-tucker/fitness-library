const path = require("path")
const slugify = require("slugify")

// Node JS syntax required
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
      const tagSlug = slugify(tag, { lower: true })
      createPage({
        // 3 properties are needed in order to create the page.
        // - path of the created page
        // - a component to populate the page
        // a variable to use in the query
        path: `tags/${tagSlug}`,
        component: path.resolve(`src/templates/tag-template.js`),
        context: {
          tag: tag,
        },
      })
    })
  })
}

// Using Gatsby Node API to dynamically build individual tag pages
// This code runs once in the process during the build lifecycle
// using the createPages built-in method
// using async/await to return a promise, graphql and the actions object
// destructuring action to access createPage
// invoking graphql within the await promise to return a query for all tags
// iterating over all nodes, then iterating over all tags to reach each tag
// using slugify to create the correct page path
// using a component path to grab the correct page template
// using the context property to explicitly pass in the variable name and value over to the page template
