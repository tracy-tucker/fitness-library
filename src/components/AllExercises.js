import React from "react"
import ExercisesList from "./ExercisesList"
import TagsList from "./TagsList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulExercise(sort: { order: ASC, fields: title }) {
      nodes {
        id
        title
        sets
        repetitions
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllExercises = () => {
  const data = useStaticQuery(query)
  console.log(data)
  return (
    <div>
      <h4>All Exercises</h4>
      <TagsList />
      <ExercisesList />
    </div>
  )
}

export default AllExercises
