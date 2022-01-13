import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import setupTags from "../utils/setupTags"
import slugify from "slugify"
import SEO from "../components/SEO"

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulExercise.nodes)

  return (
    <Layout>
      <SEO title="Tags" />
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            const slug = slugify(text, { lower: true })
            return (
              <Link to={`/tags/${slug}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value} exercise</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulExercise {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags

// Using the Layout component as a wrapper to render page content as children (prop) within the Layout component, with Navbar above and Footer below
// Exporting a GraphQL query that is asking for all the tags within the content property.
// Passing in and destructuring the query prop

// importing the setupTags function, creating a new array (newTags), then passing in the query result, data object
// iterating over newTags with map to return a new tag array with an index
// Destructuring tag, then assigning the key to index, and displaying the text and value elements on the page
// Using slugify to create the correct page path
// Passing in SEO component to render metadata to the page