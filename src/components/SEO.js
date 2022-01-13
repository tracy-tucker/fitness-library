import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const metaDescription = description || site.siteMetadata.description
  console.log("i am a desc", description)

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | ${site.siteMetadata.title}`}
      meta={[{ name: `description`, content: metaDescription }]}
    ></Helmet>
  )
}

export default SEO

// Importing Helmet from React to handle metadata
// Creating a GraphQL query that is asking for site data, title and description
// Passing in the destructured props, title and description, from the page
// Also passing destructured results from GraphQL query
// Rendering results within the Helmet component

