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
  const exercises = data.allContentfulExercise.nodes
  // console.log(exercises)
  return (
    <section className="exercises-container">
      <TagsList exercises={exercises} />
      <ExercisesList exercises={exercises} />
    </section>
  )
}

export default AllExercises

// Running a GraphQL query asking for all exercises info, filtering by title in A-Z order
// Creating the data variable and passing the query result
// Drilling down into the query result and creating a variable for exercises
// Importing the ExercisesList component and passing in the exercises as a prop to this component