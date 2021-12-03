/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
/** Site Metadata */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Fun Fitness",
    description: "Simple fitness instruction",
    author: "Tracy Tucker",
    person: {
      name: "jane",
      age: 32,
    },
    simpleData: ["item 1", "item 2"],
    complexData: [
      {
        name: "john",
        age: 38,
      },
      {
        name: "jane",
        age: 32,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
