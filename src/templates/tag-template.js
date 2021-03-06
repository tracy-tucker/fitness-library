import React from "react"
import { graphql } from "gatsby"
import ExercisesList from "../components/ExercisesList"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const TagTemplate = ({ data, pageContext }) => {
  const exercises = data.allContentfulExercise.nodes
  return (
    <Layout>
      <SEO title={pageContext.tag} />
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="exercises">
          <ExercisesList exercises={exercises} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetExerciseByTag($tag: String) {
    allContentfulExercise(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        id
        executionTime
        repetitions
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default TagTemplate

// Programmatically creates individual tag pages
// Invoking a GraphQL query asking for the matching tag and its properties (matching the tag being passed in)
// Passing in the query result as data, and passing in the context tag object (pageContext) from gatsby-node.js
